/*
* @Author: ww
* @Date:   2018-08-10 14:40:26
* @Last Modified by:   ww
* @Last Modified time: 2018-08-13 13:04:21
*/
import React ,{Component}  from "react";
// import "./Father.css";
var Fcss= {
	color:"red",
	fontSize : 60
} 
class Father extends Component{
	render(){
		return (
			<div>
				<p style={Fcss}>{React.store.getState().name}</p>
			</div>
			)
	}
}
export default Father;