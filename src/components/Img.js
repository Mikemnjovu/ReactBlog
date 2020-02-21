import React, {Component} from 'react';
import pic from "./assets/pic.jpg";


class Img extends Component{
	render(){
		return(
		<div className="img">
			<img src={pic} alt="logo"></img>
		</div>
	);
	}


}

export default Img;