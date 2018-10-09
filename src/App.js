import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { orangeTheme, avatar } from './stylesheets/theme1';
import { words } from './steps/words';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
      opened: true,
    }
  }
  render() {
    const steps=[
      {
        id: '1',
        message: 'You can add custom components',
        trigger: '2',
      },
      {
        id: '2',
        component: (

            <img height="120%" width="70%" src="https://media.giphy.com/media/5xxnEC4NF0x0c/giphy-downsized.gif"/>

        ),
        end: true,
      },
    ]
    const toggleFloating = (value) => {
      return !this.state.opened;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ChatBot steps={words} floating={true} botAvatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLgPp7ucZFKu1QH6C2ZqbZI3K4xeWtcM3QxmPciSIzmi2IH62tw'}
            avatarStyle={avatar}
            opened={this.state.opened}
            toggleFloating={toggleFloating(this.state.opened)}
            enableMobileAutoFocus={true}
          />

        </header>
      </div>
    );
  }
}

export default App;
