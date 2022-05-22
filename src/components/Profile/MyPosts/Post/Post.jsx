import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>  
            <img src="https://i.pinimg.com/236x/99/f9/71/99f9711d3850b59eebdcd77318390dff.jpg" alt="" />
            <p>{ props.message }, { props.likesCount }</p>
        </div>
    )
}

export default Post;