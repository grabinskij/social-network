import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem  name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message  message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    // if (!props.isAuth) return <Navigate to={'/login'} />;

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>

    )
}
const maxLength50 = maxLengthCreator(50);

function AddMessageForm(props){
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLength50]}
                   name="newMessageBody" placeholder="Enter your message"/>
        </div>
        <div><button>Send</button></div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);



export default Dialogs;