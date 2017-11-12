import React, {Component} from 'react';
import './App.css';

import NewsPost from './components/newsPost/NewsPost';

class App extends Component {

    state = {
        news: [],
        newsInput: '',
    }

    handleChange = (event) => {

        this.setState({
            newsInput: event.target.value
        })
    }

    handleKeyDown = (event) => {

        if (+event.keyCode === 13) {

            const newPost = {
                id: Math.random() + Math.random(),
                text: this.state.newsInput
            };

            this.setState({
                news: [...this.state.news, newPost],
                newsInput: '',
            });
        }
    }

    render() {
        return (
            <div className="App">
                <input
                    className='todo-input'
                    placeholder='Какие новости?'
                    value={this.state.newsInput}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <div className="todo-container">
                    {this.state.news.map(postObject => {
                        return <NewsPost
                            key={postObject.text + postObject.id}
                            text={postObject.text}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;
