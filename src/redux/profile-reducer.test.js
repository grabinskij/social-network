import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state ={
    posts: [
        {id: 1, post: 'How are your', likesCount: '5'},
        {id: 2, post: 'How are you doing', likesCount: 23},
    ]
};

test('new post should be incremented', () => {
    // 1. test data
        let action = addPostActionCreator("ItIsCool");
        //2. action
        let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe (3);
});
test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("ItIsCool");
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[2].post).toBe ("ItIsCool");
});

test("after deleting length of post should be decrement", () => {
    // 1. test data
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe (1);
});
test("after deleting length shouldn't be decrement if id is incorrect", () => {
    // 1. test data
    let action = deletePost(10000);
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe (2);
});
