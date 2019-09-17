import { RouteComponentProps } from '@reach/router'
import React, { ChangeEvent, useEffect, useState,  } from 'react';
import { connect } from 'react-redux';

import { IAppState } from 'types';
import { IGetPostInfoAction, IGetUserInfoByIdAction, IResetDataAction, IServerData } from 'types/serverDataTypes';

import { getPostsInfo, getUserInfoById, resetData } from 'actions/serverData'

import Input from 'components/Input'

import styles from './Page2.scss';


interface IProps extends IServerData {
  getUserInfoById: (id: number) => IGetUserInfoByIdAction,
  getPostsInfo: () => IGetPostInfoAction,
  resetData: () => IResetDataAction
}


const Page2: React.FC<RouteComponentProps<IProps>> = ({
  userInfo = {}, postsInfo, isLoading,
  resetData = () => {},
  getPostsInfo = () => {}, 
  getUserInfoById = () => {}
}) => {
  
  useEffect(() => () => {
    resetData()
  }, []);

  const [inputValue, setInputValue] = useState<string>('')

  const handleOnChange = (e: ChangeEvent<HTMLFormElement>) => {
    setInputValue(e.target.value)
  }
  
  const handleFetchInfoUser = () => {
    if (inputValue) { getUserInfoById(+inputValue) }
  }   

  const handleFetchPostsInfo = () => { getPostsInfo() }

  return (
    <div>
      <h2>Получить данные Пользователя по id</h2>
      <p className={styles.paragraph}>Введите id</p>
      <Input onChange={handleOnChange} />
      <button onClick={handleFetchInfoUser}>Получить данные пользователя</button>
      {
        userInfo.id ? (
          <div>
            <p>Имя: {userInfo.name}</p>
            <p>E-mail: {userInfo.email}</p>
            <p>Телефон: {userInfo.phone}</p>
            <button onClick={handleFetchPostsInfo}>Получить данные о постах</button>
          </div>
        ) : isLoading && (
          <div>Загружаем данные ...</div>
        )  
      }
      {
        Array.isArray(postsInfo) && postsInfo.length > 0 ? (
          postsInfo.map(({id, title, body}, index) => (
            <div key={id}>
              <h5>{`${index + 1}) ${title}`}</h5>
              <p>{body}</p>
            </div>
          ))
        ) : userInfo.id && isLoading && (
          <div>Загружаем данные ...</div>
        )  
      }
    </div>
  )
}


const mapStateToProps = (state: IAppState) => ({
  ...state.serverData
})

const mapDispatchToProps = {
  resetData,
  getPostsInfo,
  getUserInfoById
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2);
