/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AuthApi from './AuthApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Rentals from './Components/rentals-landlord/Rentals';
import PaymentForm from './Components/PaymentForm/PaymentForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import AddProperty from './Components/rentals-landlord/Add_property/AddProperty';
import RentalsTenant from './Components/rentalsTenant/RentalsTenant';
import AddTenant from './Components/AddTenant/AddTenant';
import Footer from './Components/footer/Footer';
import Public from './Components/Public/Public';
import SignIn from './Components/Login/SignIn';
import TenantDetails from './Components/TenantDetails/TenantDetails';
import PaymentstatusTenant from './Components/PaymentstatusTentant/PaymenystatusTenant';


function App() {
  



const [auth,setAuth] = React.useState(false);

const readCookie = () =>{

const user = Cookies.get("user")

if (user){
  setAuth(true);

}
}

React.useEffect(()=> {

  readCookie();

},[])
  return (
    <div className="App">
      <AuthApi.Provider value={{auth,setAuth}}>
      <Router>

<Routes/>
</Router>
      </AuthApi.Provider>


    </div>
  );
}


// login



//Dashboard


//routes

const Routes = ()=> {

  const Auth = React.useContext(AuthApi)
  return(
    <div class="bg-dark">
     
      <Switch>
  
 <ProtectedRoute path="/dashboard" auth={ Auth.auth} component={Dashboard}/>


<ProtectedLogin  path="/signIn"  auth={ Auth.auth}  component={SignIn}/>
<ProtectedLogin  path="/Signup"  auth={ Auth.auth}  component={SignUp}/>



<Route path="/rentals">
  <Rentals/>
</Route>

{/* <Route path="/">
  <Public/>
</Route> */}

<Route path="/add-tenant">
  <AddTenant/>
</Route>
<Route path="/tenant-details">
  <TenantDetails/>
</Route>
<Route path="/pay-rent">
  <PaymentForm/>
</Route>
<Route path="/rentals2">
  <RentalsTenant/>
</Route>
<Route exact path="/rental-pay">
    <PaymentForm/>
</Route>
<Route path="/add-prop">
  <AddProperty/>
</Route>
<Route path="/status-tenant">
 <PaymentstatusTenant/>
</Route>

</Switch>


    </div>

  );
}


const ProtectedRoute = ({auth,component:Component,...rest}) =>{

   return(
    <Route
    {...rest}

    render ={()=>auth?(

      <Component/>
    ):
    (

      <Redirect to="/signIn"/>
    )
  
  }
    
     
    
    />

    
   );
}


const ProtectedLogin = ({auth,component:Component,...rest}) =>{

  return(
   <Route
   {...rest}

   render ={()=>!auth?(

<Component/>

  
   ):
   (

     <Redirect to="/dashboard"/>
   )
 
 }
   
    
   
   />

   
  );
}

export default App;