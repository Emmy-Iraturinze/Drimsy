import React from 'react'
import './Switcher.css'
import './switcher.scss'
import { Link } from 'react-router-dom'
const Switcher = () => {
     return (
          <div>
               <div class="center">
                    <form>
                         <div className="row">
                              <div className="col">
                              {/* <li class="text-white " title="Subscribe"data-bs-toggle="modal" data-bs-target="#exampleModal"><Link  to="/dashboard"><img className="text-white" src="https://img-premium.flaticon.com/png/128/4032/premium/4032999.png?token=exp=1633358634~hmac=2ffaedbff12e803de31db3ed7fb5eb53"/></Link></li> */}
                              </div>
                              <div className="col">
                              <input type="checkbox" name=""  data-toggle="tooltip" data-placement="right" title="Here you can switch as Tenant or Landlord to experience The best you deserve!"/>
  <h1> T/L</h1>                              </div>

                         </div>
                   


                    </form>
              
</div>
          </div>
     )
}

export default Switcher
