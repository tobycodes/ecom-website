import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/ShopPage/shop.component';
import Navigation from './components/Navigation/navigation.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import SignInPage from './pages/SignInPage/signinpage.component';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ 
          currentUser: userAuth
        })
      }
      
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Navigation currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInPage}>
            {currentUser ? <Redirect to='/shop' /> : <SignInPage />}
          </Route>
        </Switch>
      </div>
    );
  }
  
}

export default App;
