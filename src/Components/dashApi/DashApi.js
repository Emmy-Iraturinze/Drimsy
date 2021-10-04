/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React ,{ Component } from "react";
import {Link} from 'react-router-dom'




class dashApi extends Component {
constructor(){
super();
this.state={
  data:false,
}
}

state={};

componentDidMount(){

let url ="https://endpoint.drimsy.com/properties/ ";
fetch(url,{
method:'GET',
headers:{
  'Accept':'application/json',
  'content-type':'application/json',
}


}).then((result)=>{
  result.json().then((resp)=>{


this.setState({property:resp})
    
  })
})

const config = {
  headers:{
    Authorization:'Bearer' + localStorage.getItem('id')
  }
};

axios.get('user',config).then(

  res =>{

    this.setState({

      user:res.data

    });

  },

  err => {
    console.log(err)
  }
)

}



  render(){

if(this.state.user){

return( 
<h2>Good Afternoon {this.state.user.first_name} {this.state.user.Last_name}</h2>

)

}

    const properties=this.state.property;
console.warn(properties);

    return <div>

{
  properties?



<div>



</div>


: <h1 className="text-danger text-center  loading-text">Please wait..</h1>


}


    </div>
  }

}

export default dashApi;


