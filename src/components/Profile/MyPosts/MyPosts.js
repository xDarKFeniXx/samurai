import React from 'react';
import s from './Myposts.module.scss'
import PostItem from "./post-item";


const MyPosts = (props) => {
    const {posts, newPostText}=props;

    let postsElements =
        posts.map( p => <PostItem message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();



    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div >
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;