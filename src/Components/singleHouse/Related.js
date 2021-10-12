import axios from "axios";
import React ,{ Component } from "react";
import {Link} from 'react-router-dom'
import Footer from "../footer/Footer";




class Related extends Component {
constructor(){
super();
this.state={
  data:false,
}
}

state={};

componentDidMount(){

let url ="https://endpoint.drimsy.com/properties";
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
<h4 className="fw-bolder mb-5">Related Properties</h4>
<div class="row">

   <div className="col-md-3">
       
                                        <Link to={'/product/'+properties[20].id}>
                                        <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={properties[20].thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                    <p>{properties[20].name}</p>
                                      </div>
                                      <div class="card-text">
                                      {properties[20].other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {properties[20].rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                      
                                        </div>
                                        </Link>
                                  </div>
                                  <div className="col-md-3">
       
       <Link to={'/product/'+properties[40].id}>
       <div class="card-sl">
 <div class="card-image">
 <img
src={properties[40].thumbnail} />
 </div>

    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
    <div class="card-heading">
    {properties[40].name}
     </div>
     <div class="card-text">
     {properties[40].other_amenities}
       </div>
     <div class="card-text">
            {properties[40].rent_amount}
              </div>
       <a href="#" class="card-button bg-danger"> Request</a>
     
       </div>
       </Link>
 </div>

 <div className="col-md-3">
       
       <Link to={'/product/'+properties[29].id}>
       <div class="card-sl">
 <div class="card-image">
 <img
src={properties[29].thumbnail} />
 </div>

    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
    <div class="card-heading">
    {properties[29].name}
     </div>
     <div class="card-text">
     {properties[29].other_amenities}
       </div>
     <div class="card-text">
            {properties[29].rent_amount}
              </div>
       <a href="#" class="card-button bg-danger"> Request</a>
     
       </div>
       </Link>
 </div>

 <div className="col-md-3">
       
       <Link to={'/product/'+properties[15].id}>
       <div class="card-sl">
 <div class="card-image">
 <img
src={properties[15].thumbnail} />
 </div>

    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
    <div class="card-heading">
    {properties[15].name}
     </div>
     <div class="card-text">
     {properties[15].other_amenities}
       </div>
     <div class="card-text">
            {properties[15].rent_amount}
              </div>
       <a href="#" class="card-button bg-danger"> Request</a>
     
       </div>
       </Link>
 </div>


 
</div>

        

</div>


: <h1 className="text-danger text-center  loading-text">Please wait..</h1>


}
<Footer/>

    </div>
  }

}

export default Related;


