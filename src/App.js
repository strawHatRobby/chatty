import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { orangeTheme, avatar } from './stylesheets/theme1';
import { words } from './steps/words';
import { coachSteps } from './steps/coachSteps';
import LottieControl from './components/lottie'

const BOTAVATAR = "http://wac.450f.edgecastcdn.net/80450F/kool1079.com/files/2014/08/coach-angry-630x419.jpg"
const theme = {
  fontFamily: 'Roboto',
  headerBgColor: '#EC05FF',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#CE03DE',
  background: '#fff',
  botFontColor: '#fff',
  userBubbleColor: '#F0F0FB',
  userFontColor: '#000',
};

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
    const endHandler = () => {
      alert("That's all folks");

    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ThemeProvider theme={theme}>
          <ChatBot steps={coachSteps} floating={true} botAvatar={BOTAVATAR}
            avatarStyle={avatar}
            cache={false}
            headerTitle={'Angrez.life'}
            opened={this.state.opened}
            toggleFloating={toggleFloating(this.state.opened)}
            enableMobileAutoFocus={true}
            recognitionEnable={true}
            hideHeader={true}
            bubbleOptionStyle={{backgroundColor:'#F81EB5', border:'1.5px',borderColor:'#FF0000'}}
            botDelay={2000}
            customStyle={{backgroundColor:'#000', width: '100', height: '150', borderRadius: '100/2',padding:'0'}}
          />
          </ThemeProvider>

        </header>
      </div>
    );
  }
}

export default App;
