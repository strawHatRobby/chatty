import React, { Component } from 'react';

class Gif extends Component {
  constructor(props){
    super(props);
    this.state = {        
    }
  }

  render(){
    return (
      <div>
          <img width="80%" src={this.props.url}/>
      </div>
    )
  }

}

export default Gif;