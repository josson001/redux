/*
* @Author: ww
* @Date:   2018-08-10 14:42:39
* @Last Modified by:   ww
* @Last M/*
* @Author: ww
* @Date:   2018-08-10 14:40:26
* @Last Modified by:   ww
* @Last Modified time: 2018-08-10 15:47:52
*/
import React ,{Component}  from "react";
// import "./Child.css";
var ccss= {
	color:"blue",
	fontSize : 40
} 
class Child extends Component{
	render(){
		return (
			<div>
				<p style={ccss}>我是你的儿子</p>
			</div>
			)
	}
}
export default Child;