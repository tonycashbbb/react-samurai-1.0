import React from 'react'
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import UsersContainer from "./pages/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./pages/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import Spinner from "./components/Spinner/Spinner";
import withSuspense from "./hoc/withSuspense";

const MessagesContainer = React.lazy(() => import("./pages/Messages/MessagesContainer"))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Spinner />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/profile/:id?"} component={ProfileContainer}/>
          <Route path={"/messages"} component={MessagesContainer}/>
          <Route path={"/users"} component={UsersContainer}/>
          <Route path={"/login"} component={Login}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withSuspense,
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
