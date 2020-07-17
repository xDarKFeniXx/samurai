import React from 'react';
import s from './Myposts.module.scss'
import PostItem from "./post-item";
import {Field, reduxForm} from "redux-form";


let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component="textarea" />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <PostItem message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();



    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div >
            <h3>My posts</h3>
            <div>
                {/*<div>*/}
                {/*    <textarea onChange={onPostChange} ref={newPostElement}*/}
                {/*              value={newPostText} />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={ onAddPost }>Add post</button>*/}
                {/*</div>*/}
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div >
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;