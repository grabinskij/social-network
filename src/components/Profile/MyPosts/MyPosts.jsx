import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p, i) => <Post key={i} message={p.post} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();



    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlocks}>
            <h3>My posts></h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

function AddNewPostForm(props){
    return (
    <form onSubmit={props.handleSubmit}>
        <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]}/>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;