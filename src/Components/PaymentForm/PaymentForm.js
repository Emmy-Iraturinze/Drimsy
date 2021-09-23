/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import './PaymentForm.css';   
import axios from 'axios';
import Header from '../Header/Header';

class PaymentForm extends React.Component{


  handleSubmit = e =>{
    e.preventDefault();
    
      const data = {

        property_id:"",
  tenant_id:"",
  month_from:this.monthFrom,
  month_to: this.monthTo,
  document_link:this.documentLink,
  paid_amount:this.paidAmount,
  rent_amount:this.rentAmount
      }

   axios.post('https://endpoint.drimsy.com/payments',data)

   .then(res =>{
        console.log(res)
   })
     .catch(err =>{

         console.log(err)
     })
    
      };


  render(){

    return(

      <div class="bg-dark">
        <Header/>
        <div class="card mt-50 mb-50">
    <div class="card-title mx-auto"> Payment Form </div>
    <div class="nav">
        <ul class="mx-auto">
            <li><a href="#">Payment status</a></li>
            <li class="active"><a href="#">Payment</a></li>
        </ul>
    </div>
    <form onClick={this.handleSubmit}> <span id="card-header">Saved cards:</span>
        <div class="row row-1">
            <div class="col-2"><img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /></div>
            <div class="col-7"> <input type="text" placeholder="**** **** **** 3193"/> </div>
            <div class="col-3 d-flex justify-content-center"> <a href="#">Remove card</a> </div>
        </div>
        <div class="row row-1">
            <div class="col-2"><img class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" /></div>
            <div class="col-7"> <input type="text" placeholder="**** **** **** 4296"/> </div>
            <div class="col-3 d-flex justify-content-center"> <a href="#">Remove card</a> </div>
        </div> <span id="card-header">Payment Details:</span>
        <div class="row-1">
            <div class="row row-2"> <span id="card-inner">Rent Amount</span> </div>
            <div class="row row-2"> <input type="text" placeholder="Rwf 100,000"/> </div>
        </div>
        <div class="row-1">
            <div class="row row-2"> <span id="card-inner">Amount paid</span> </div>
            <div class="row row-2"> <input type="text" placeholder="Rwf 100,000"/> </div>
        </div>
        <div class="row three">
        
            <div class="col-2 p-2">
              <p class="text-muted">Date from:</p>
               <input type="date" placeholder="Exp. date"onChange={e => this.monthFrom = e.target.value}/> 
               
               </div>
            
            <div class="col-2 p-2"> 
            <p class="text-muted">To:</p>
            <input type="date" placeholder="Exp. date"onChange={e => this.monthTo = e.target.value}/> 
            </div>
           
        </div> 
        <div class="row-1">
            <div class="row row-2"> <span id="card-inner">Payment Proof</span> </div>
          
            <div className="form-group mt-5">

                    <input type="file"  onChange={this.uploadMultipleFiles} multiple />
                </div>
           
        </div>
      
        
        <button class="btn btn-success w-100">Pay</button>
    </form>
</div>
 



      </div>
    );
  }
}






export default PaymentForm;