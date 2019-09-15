import classNames from 'classNames/bind';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { deleteArticle, setOpenArticle } from 'actions/articles';
import { IAppState } from 'types';

import styles from './Article.scss';

const cx = classNames.bind(styles);

interface IArticle {
  title: string | number,
  content: string | number,
  id: number,
  articleOpen: number,
  deleteArticle: (id: number) => void,
  setOpenArticle: (id: number) => void
}

const Article: React.FC<IArticle> = (props) => {
  const { title, content, id, articleOpen } = props;
  
  const handleOpenArticle = () => {

    if (id === articleOpen) { props.setOpenArticle(0); }

    else { props.setOpenArticle(id) }
  }

  const handleDeleteArticle = () => { props.deleteArticle(id) }
  

  const className = cx(styles.wrapper, {
    articleOpen: id === articleOpen,
  });

  return (
    <div className={className}>
      <div className={styles.article}>
        <div className={styles.title} onClick={handleOpenArticle}>
          <h2>{title}</h2>
          <div className={styles.arrowWrapper}>
            <div className={styles.arrow}/>
          </div>
        </div>
        {
          articleOpen === id && (
            <Fragment>
              <pre className={styles.content}>{content}</pre>
              <div className={styles.deleteArticle} onClick={handleDeleteArticle}>
                <span>Удалить статью</span>
              </div>
            </Fragment>
          )
        }
      </div>
    </div>
  );
}

// class Article extends Component {

//   static propTypes = {
//     title: PropTypes.any,
//     content: PropTypes.any,
//     id: PropTypes.number.isRequired,
//     articleOpen: PropTypes.number.isRequired,

//     deleteArticle: PropTypes.func.isRequired,
//     setOpenArticle: PropTypes.func.isRequired,
//   }

//   handleOpenArticle = () => {
//     const { id, articleOpen, setOpenArticle } = this.props;

//     if (id === articleOpen) setOpenArticle(0);

//     else setOpenArticle(id)
//   }

//   handleDeleteArticle = () => {
//     const { id, deleteArticle } = this.props;

//     deleteArticle(id)
//   }

//   render() {
//     const { id, title, content, articleOpen } = this.props;

//     const className = cx(styles.wrapper, {
//       articleOpen: id === articleOpen,
//     });

//     return (
//       <div className={className}>
//         <div className={styles.article}>
//           <div className={styles.title} onClick={this.handleOpenArticle}>
//             <h2>{title}</h2>
//             <div className={styles.arrowWrapper}>
//               <div className={styles.arrow}/>
//             </div>
//           </div>
//           {
//             articleOpen === id && (
//               <Fragment>
//                 <pre className={styles.content}>{content}</pre>
//                 <div className={styles.deleteArticle} onClick={this.handleDeleteArticle}>
//                   <span>Удалить статью</span>
//                 </div>
//               </Fragment>
//             )
//           }
//         </div>
//       </div>
//     );
//   }
// };

const mapStateToProps = (state: IAppState) => ({
  ...state.articles
})

const mapDispatchToProps = {
  deleteArticle,
  setOpenArticle,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
