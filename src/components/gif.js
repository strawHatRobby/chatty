import React, { Component } from 'react';
import Sound from 'react-sound';
// import "./baloon.css"

class Gif extends Component {
  constructor(props){
    super(props);
    this.state = {        
    }
  }

  render(){
    return (
      <div>
        {/* <div class="balloon-container">
  <div class="baloons">

    <div><span>L</span></div>
    <div><span>E</span></div>
    <div><span>V</span></div>
    <div><span>E</span></div>
    <div><span>L</span></div>
    <div><span> </span></div>


  </div>

</div> */}
        <audio autoPlay>
        <source src="https://s3.ap-south-1.amazonaws.com/robsacloudbucket/chatty/crowdCheer.mp3" type="audio/mpeg" >
			</source>
        </audio>
          <img width="90%" src={this.props.url}/>
      </div>
    )
  }

}

export default Gif;