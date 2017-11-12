import React, {Component} from 'react';
import './NewsPost.css';

import Comment from '../comment/Comment';

class NewsPost extends Component {

    state = {
        comments: [],
        commentInput: ''
    }

    handleChange = (event) => {

        this.setState({
            commentInput: event.target.value
        })
    }

    handleKeyDown = (event) => {

        if (+event.keyCode === 13) {

            const newComment = {
                id: Math.random() + Math.random(),
                text: this.state.commentInput
            };

            this.setState({
                comments: [...this.state.comments, newComment],
                commentInput: '',
            });
        }
    }

    handleDelete = (commentId) => {

        const deletedCommentId = this.state.comments.findIndex(commentObject => commentObject.id === commentId);

        if(deletedCommentId.toString()){

            const newCommentsArray = [...this.state.comments];
            newCommentsArray.splice(deletedCommentId, 1);

            this.setState({
                comments: newCommentsArray
            })
        }
    }

    render() {

        const {text} = this.props;

        return (
            <div className='news-post'>
                <p>{text}</p>
                {this.state.comments.map(commentObject => {

                    return <Comment
                        key={commentObject.text + commentObject.id}
                        id={commentObject.id}
                        text={commentObject.text}
                        onDelete={this.handleDelete}
                    />
                })}
                <input className='comment-input'
                       placeholder='Прокоментируем?'
                       value={this.state.commentInput}
                       onChange={this.handleChange}
                       onKeyDown={this.handleKeyDown}/>
            </div>
        );

    }
}

export default NewsPost;