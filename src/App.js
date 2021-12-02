import React from 'react';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
 class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      name:'Hello, THis is me',
    }
  }


  handleClick = (e) =>{
    this.setState({name:'Hello, This is my first React Program!!!'})
  }


  render(){
    return (
      <div>
        <HomePage />
      </div>
    );
  }

}

export default App;
