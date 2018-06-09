import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import SocialLinks from './components/SocialLinks';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';

class App extends Component {
  state = {
    currentNav: "aboutMe" // either 'aboutMe' or 'contactMe' or 'portfolio'
  }

  handleClickNav = (newState) => {
    this.setState({
      currentNav: newState
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <Name />
          <SocialLinks />
        </div>

        <LeftMenu nav={this.state.currentNav} handleClickNav={this.handleClickNav} />

        <RightMenu nav={this.state.currentNav} />

      </div>
    );
  }
}

export default App;
