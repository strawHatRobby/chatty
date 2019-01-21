import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { orangeTheme, avatar } from './stylesheets/theme1';
import { words } from './steps/words';
import { coachSteps } from './steps/coachSteps'
import LottieControl from './components/lottie'

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
          <div></div>
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
          <ChatBot steps={coachSteps} floating={true} botAvatar={'https://et.tv/2CNhf3i'}
            avatarStyle={avatar}
            cache={false}
            opened={this.state.opened}
            toggleFloating={toggleFloating(this.state.opened)}
            enableMobileAutoFocus={true}
            recognitionEnable={true}
            botDelay={2000}
          />

        </header>
      </div>
    );
  }
}

export default App;
