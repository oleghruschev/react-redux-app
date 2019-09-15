import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux'

import { createArticle } from 'actions/articles';
import { ICreateArticleAction } from 'types/articlesTypes';

import Input from 'components/Input';

import styles from './CreateArticle.scss';


interface IProps {
  createArticle: (title: string, content: string) => ICreateArticleAction
}

const CreateArticle: React.FC<IProps> = (props) => {
  const [errorText, setErrorText] = useState<string>('');
  const [articleName, setArticleName] = useState<string>('');
  const [articleContent, setArticleContent] = useState<string>('');

  const handleChangeArticleName = (e: ChangeEvent<HTMLFormElement>): void => {
    setArticleName(e.target.value);
  }

  const handleChangeArticleContent = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setArticleContent(e.target.value)
  }

  const resetError = () => { setErrorText('') }

  const handleCreateArticle = (): void => {
    if (articleName === '' && articleContent === '') {
      setErrorText('Введите название статьи и заполните ее')
    }

    else if (articleName === '') {
      setErrorText('Введите название статьи');
    }

    else if (articleContent === '') {
      setErrorText('Заполните статью');
    }

    else {
      props.createArticle(articleName, articleContent);

      resetError();
      setArticleName('');
      setArticleContent('');
    }
  }

  return (
    <div className={styles.wrapper} onMouseLeave={resetError}>
      <h2 className={styles.header}>
        Создание статьи
      </h2>
      <div className={styles.articleName}>
        <Input 
          value={articleName}
          placeholder='Имя статьи'
          onChange={handleChangeArticleName}
        />
      </div>
      <textarea
        value={articleContent}
        placeholder='Содержание статьи'
        className={styles.articleContent}
        onChange={handleChangeArticleContent}
      />
      <div className={styles.button}>
        <span className={styles.error}>
          {errorText}
        </span> 
        <button onClick={handleCreateArticle}>
          Создать статью
        </button>
      </div>
    </div>
  );
}

// class CreateArticle extends Component {

//   state = {
//     errorText: '',
//     articleName: '',
//     articleContent: '',
//   }

//   handleChangeArticleName = (e) => {
//     this.setState({ articleName: e.target.value })
//   }

//   handleChangeArticleContent = (e) => {
//     this.setState({ articleContent: e.target.value })
//   }

//   handleCreateArticle = () => {
//     const { createArticle } = this.props;
//     const { articleName, articleContent } = this.state;

//     if (articleName === '' && articleContent === '') {
//       this.setState({ errorText: 'Введите название статьи и заполните ее' })
//     }

//     else if (articleName === '') {
//       this.setState({ errorText: 'Введите название статьи' })
//     }

//     else if (articleContent === '') {
//       this.setState({ errorText: 'Заполните статью' })
//     }

//     else {
//       createArticle(articleName, articleContent);

//       this.setState({
//         errorText: '',
//         articleName: '',
//         articleContent: '',
//       })
//     }
//   }

//   handleClearError = () => {
//     this.setState({ errorText: '' })
//   }

//   render() {
//     const { articleName, articleContent, errorText } = this.state;

//     return (
//       <div className={styles.wrapper} onMouseLeave={this.handleClearError}>
//         <h2 className={styles.header}>
//           Создание статьи
//         </h2>
//         <div className={styles.articleName}>
//           <Input 
//             value={articleName}
//             placeholder='Имя статьи'
//             onChange={this.handleChangeArticleName}
//           />
//         </div>
//         <textarea
//           value={articleContent}
//           placeholder='Содержание статьи'
//           className={styles.articleContent}
//           onChange={this.handleChangeArticleContent}
//         />
//         <div className={styles.button}>
//           <span className={styles.error}>
//             {errorText}
//           </span> 
//           <button onClick={this.handleCreateArticle}>
//             Создать статью
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = {
  createArticle,
}

export default connect(
  null,
  mapDispatchToProps
)(CreateArticle);
