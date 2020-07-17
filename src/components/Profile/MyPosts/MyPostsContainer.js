
import {addPostActionCreator} from "../../../redux/profile-reducer";
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

        addPost: (newPostText) => {
            debugger
            dispatch(addPostActionCreator(newPostText));
        }
    }
}
const MyPostsContainer =connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;