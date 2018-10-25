import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import { confirmName } from 'actions/user';

import CreateArticle from './CreateArticle';

import styles from './Articles.scss';


class Articles extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,

    confirmName: PropTypes.func.isRequired,
  }

  state = { userName: ''}

  handleChangeName = (e) => {
    this.setState({ userName: e.target.value })
  }

  handleConfirmName = () => {
    const { userName } = this.state;
    const { confirmName } = this.props;
    
    this.setState({ userName: '' })
    confirmName(userName);
  }

  render() {
    const { name } = this.props;
    const { userName } = this.state;

    return (
      <div className={styles.block}>
        <CreateArticle />
        <p>Введите Ваше имя</p>
        <input
          value={userName}
          onChange={this.handleChangeName}
        />
        <button onClick={this.handleConfirmName}>Подтвердить</button>
        <h1 className={styles.header}>Hello {name}</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  name: state.user.name,
})

const mapDispatchToProps =  {
  confirmName,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
