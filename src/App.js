import React from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page.component';
import {Routes,Route} from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


const HatsPage = ()=>(
  <div>
    <h1>Hats page</h1>
  </div>
)



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser : ''
    }
  }

    unSubscribeFromAuth = null;
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    // this.setState({currentUser:user},()=>console.log(user));
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot=>{
        
        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
        }},()=>console.log(snapshot.data()));
      });
    }else{
      this.setState({currentUser:userAuth},()=>console.log(userAuth));
    }
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render(){

    const {currentUser} = this.state;
    return(
      <div>
        <Header currentUser = {currentUser} />
        <Routes>
    
          <Route path='/' element = {<HomePage />} />
          <Route path ='/shop' element = {<ShopPage />} />
          <Route path='/shop/hats' element = {<HatsPage />} /> 
          <Route path ='/signin' element={<SignInAndSignUpPage />} />
    
          </Routes>
      </div>
    )
  }
  
} 

export default App;