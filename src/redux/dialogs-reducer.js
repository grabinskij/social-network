const SEND_MESSAGE= 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Codfrey'},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
    ],
};


const dialogsReducer = (state = initialState, action) =>{
    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;