
import React from 'react';

import axios from 'axios';

class SingleHouse extends React.Component
{
//Declare state varible to store request data
    constructor(props) {
        super(props)
          this.state = {
           
            productdetails:[]
                  }
          }
    componentDidMount()
    {
        //Get Product ID from URL
        var productid = window.location.pathname;
        productid = productid.split("product/");
        const fd = new FormData();
        fd.append('productid', productid[1]);
        axios.post('https://endpoint.drimsy.com/properties', fd
          ).then(res=>
          {
    
            //Storing product detail in state array object
            this.setState({productdetails: res.data[0]});
           
          
          }
          );
    }
  render()
  {
    return (
       <div className="mt-3 mb-3">
           <p>Page Under Maintenance</p>
         <h1>{this.state.productdetails.name}</h1>
         <img class="d-block img-fluid" src={this.state.productdetails.thumbnail} />
         <h5 className="mt-3 mb-3">{this.state.productdetails.rent_amount}</h5><br/>
        
         <p className="mt-3 mb-3">{this.state.productdetails.bedrooms}</p>
         <p className="mt-3 mb-3">{this.state.productdetails.bathrooms}</p>
       </div>
    )
  }
}
export default SingleHouse;