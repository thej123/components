import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import AprrovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <AprrovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div></AprrovalCard>
            <AprrovalCard>
                <CommentDetail
                author='Sam' 
                timeAgo='Today at 4:45PM' 
                content='Nice blog post'
                avatar={faker.image.image()}
                />
            </AprrovalCard>
            <AprrovalCard>
                <CommentDetail
                author='Alex' 
                timeAgo='Today at 2:30PM' 
                content='I like the subject'
                avatar={faker.image.image()}
                />
            </AprrovalCard>
            <AprrovalCard>
                <CommentDetail
                author='Janes' 
                timeAgo='Yesterday at 4:45PM' 
                content='I like the writing'
                avatar={faker.image.image()}
                />
            </AprrovalCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)