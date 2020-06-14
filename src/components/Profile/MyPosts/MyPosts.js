import React from 'react';
import s from './Myposts.module.scss'
import PostItem from "./post-item";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../state";


const MyPosts = (props) => {
    const {posts, newPostText}=props;

    let postsElements =
        posts.map( p => <PostItem message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();



    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
        // const actionAddPost = {type: "ADD-POST"};
        // dispatch(actionAddPost);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div >
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div >
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;