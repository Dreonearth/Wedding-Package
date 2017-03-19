import React, { Component } from 'react';
import pay from './pay2.jpg';

export class ShowInfo extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	      	bool:false
	    };
	    this.handleConfirm = this.handleConfirm.bind(this);
  	}
	handleConfirm = () =>{
      	this.setState({
        	bool:true
      	});
	}
  render() {
  	let{morningPackage,afternoonPackage,eveningPackage,fullDayPackage,assistantImage} = this.props;
  	if (this.state.bool) {
  		assistantImage = (<img src={pay} alt="AssistantImage"/>)
  	}
    return (
      	<div className="container App-textBackground">
      		<div className="row">
  	      		<div className="col-md-6">
  		        	<p style={{textAlign:"left"}}>
  			        	<b>Wedding Engagement morning (6.00am-12.00am)</b> <br />
  						2 photographer  - <u>{morningPackage}</u> THB<br />
  						** Include : 4-12 x 1000w Sportlight<br /><br />
  						 
  						<b>Wedding Engagement & Reception afternoon (6.00am-3.00pm)</b><br />
  						2 photographer and 1 ast.photographer - <u>{afternoonPackage}</u> THB<br />
  						** Include : 4-12 x 1000w Sportlight<br /><br />
  						 
  						<b>Wedding Reception evening (3.00pm-10.00pm)</b> <br />
  						3 photographer and 1 ast.photographer - <u>{eveningPackage}</u> THB <br />
  						** Include : 4-12 x 1000w Sportlightand 1 assistant photographer<br /><br />
  						 
  						<b>Wedding Engagement & Reception Fullday(6.00am-12.00am & 3.00pm-10.00pm)</b><br />
  						- Moring ceremony 2 photographer & 1 assistant photographer<br />
  						- Wedding Reception 3 photographer and 1 ast.photographer - <u>{fullDayPackage}</u> THB<br />
  						** Include : 4-12 x 1000w Sportlightand 1 assistant photographer<br /><br />
  		    		</p>
  		    		<button onClick={this.handleConfirm} className="btn btn-primary">Purchase >></button>
  		        </div>
  	  	        <div className="col-md-6">	
  	  	        	{assistantImage}
  	  	   	  	</div>
      	    </div>
      	</div>
    );
  }
}

