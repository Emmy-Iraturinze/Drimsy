import React from 'react'
import './nav.css'
const Navbar = () => {
     return (
          <div>
              <div class="container">
		<section class="content">
			<nav class="sidebar">
				<ul class="menu">
					<li class="selected">
						<div class="icon"> <i class="fa fa-user" aria-hidden="true"></i> </div>
						<div class="text"> Nathan </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-tachometer" aria-hidden="true"></i> </div>
						<div class="text"> Dashboard </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-home" aria-hidden="true"></i> </div>
						<div class="text"> Home </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-pie-chart" aria-hidden="true"></i> </div>
						<div class="text"> Piechart </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-line-chart" aria-hidden="true"></i> </div>
						<div class="text"> Linechart </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-list" aria-hidden="true"></i> </div>
						<div class="text"> List </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-area-chart" aria-hidden="true"></i> </div>
						<div class="text"> Areachart </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-desktop" aria-hidden="true"></i> </div>
						<div class="text"> Desktop </div>
					</li>
					<li>
						<div class="icon"> <i class="fa fa-download" aria-hidden="true"></i> </div>
						<div class="text"> Import </div>
					</li>
				</ul>

					<ul class="settings">
					<li> <i class="fa fa-gear" aria-hidden="true"></i> </li>
					<li> <i class="fa fa-exclamation-triangle"> </i> </li>
					<li> <i class="fa fa-question-circle" aria-hidden="true"></i> </li>
					<li> <i class="fa fa-power-off"> </i> </li>
				</ul>		
			</nav>
			<div class="module-container">
				<section class="module-gist">
				</section>
				<section class="main-view">
				</section>
			</div>
		</section>
	</div>

   
          </div>
     )
}

export default Navbar
