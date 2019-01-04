import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserInfoById, getPostsInfo, resetData } from 'actions/dataFromServer'

import Input from 'components/Input'

import styles from './Page2.scss';

class Page2 extends Component {

  componentWillUnmount() {
    const { resetData } = this.props;

    resetData()
  }

  state = {
    inputValue: ''
  }

  handleOnChange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  
  handleFetchInfoUser = () => {
    const { inputValue } = this.state;
    const { getUserInfoById } = this.props;

    inputValue && getUserInfoById(inputValue)
  }

  handleFetchPostsInfo = () => {
    const { getPostsInfo } = this.props;

    getPostsInfo()
  }

  render() {
    const { userInfo, postsInfo, loading } = this.props;
    const { name, email, phone } = userInfo

    return (
      <div>
        <h2>Получить данные Пользователя по id</h2>
        <p>Введите id</p>
        <Input onChange={this.handleOnChange} />
        <button onClick={this.handleFetchInfoUser}>Получить данные пользователя</button>
        {
          Object.keys(userInfo).length > 0 ? (
            <div>
              <p>Имя: {name}</p>
              <p>E-mail: {email}</p>
              <p>Телефон: {phone}</p>
              <button onClick={this.handleFetchPostsInfo}>Получить данные о постах</button>
            </div>
          ) : loading && (
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
          ) : Object.keys(userInfo).length > 0 && loading && (
            <div>Загружаем данные ...</div>
          )  
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.dataFromServer
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
