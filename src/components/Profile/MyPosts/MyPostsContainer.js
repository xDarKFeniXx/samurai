
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../state";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//     let addPost = () => {
//
//         props.store.dispatch(addPostActionCreator());
//
//     }
//
//     let onPostChange = (text) => {
//
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }
//
//     return (
//         <MyPosts
//             addPost={addPost}
//             updateNewPostText={onPostChange}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//         />
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer =connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;