import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import AprrovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <AprrovalCard>
                <CommentDetail
                author='Sam' 
                timeAgo='Today at 4:45PM' 
                content='Nice blog post'
                avatar={faker.image.image()}
                />
            </AprrovalCard>
            <CommentDetail
             author='Alex' 
             timeAgo='Today at 2:30PM' 
             content='I like the subject'
             avatar={faker.image.image()}
            />
            <CommentDetail
             author='Janes' 
             timeAgo='Yesterday at 4:45PM' 
             content='I like the writing'
             avatar={faker.image.image()}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)