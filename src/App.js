import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Settings from "./components/Settings/Settings";
import Musik from "./components/Musik/Musik";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                {/*<Sidebar state={props.state.dialogsPage} />*/}
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/musik' element={<Musik/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
    // withRouter,
    connect(mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {
   return <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <AppContainer />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;