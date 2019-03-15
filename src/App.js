import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Stepper from './Stepper.js';
import step1white from './Step1@2x-white.png';
import step1blue from './Step1@2x-blue.png';
import step2white from './Step2@2x-white.png';
import step2blue from './Step2@2x-blue.png';
import step3white from './Step3@2x-white.png';
import step3blue from './Step3@2x-blue.png';

class MyApp extends React.Component {
	//let k =ReactDOM.findDOMNode('root')
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render(){
  return (
		<>
    <Router>
		<div>
			<Route exact path = "/" component = {MyPage}/>
			<Route path = "/2" component = {MyPage2}/>
			<Route path = "/3" component = {MyPage3}/>
		</div>		
    </Router>
		</>
	);	
	}
	componentDidMount(){
		let k = document.getElementById('circle')
		console.log(k)
	}
}



function ShowIcon1(active){
	console.log(active)
	if(active)
	{
		return(		
			<img src = {step1white} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)
	}
	else
	{return(		
			<img src = {step1blue} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)}
}

function ShowIcon2(active){
	console.log(active)
	if(active)
	{
		return(		
			<img src = {step2white} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)
	}
	else
	{return(		
			<img src = {step2blue} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)}
}

function ShowIcon3(active){
	console.log(active)
	if(active)
	{
		return(		
			<img src = {step3white} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)
	}
	else
	{return(		
			<img src = {step3blue} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)}
}


function LinkLines(){
	return(
		<div style = {{display:'flex',justifyContent:'center',alignItems: 'center',flexDirection: 'column'}}>
          <li>
            <Link to="/">Step One</Link>
          </li>
          <li>
            <Link to="/2">Step Two</Link>
          </li>
          <li>
            <Link to="/3">Step Three</Link>
          </li>
		</div>
	);
}

class MyPage extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One',render: ShowIcon1}, {title: 'Step Two', render: ShowIcon2}, {title: 'Step Three',render: ShowIcon3 }] } titleFontSize = {20}/>
				<LinkLines/>
      </div>
    );
  }
}
class MyPage2 extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One',render: ShowIcon1}, {title: 'Step Two', render: ShowIcon2}, {title: 'Step Three',render: ShowIcon3}] } titleFontSize = {20} activeStep = {1}/>
				<LinkLines/>
      </div>
    );
  }
}
class MyPage3 extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One',render: ShowIcon1}, {title: 'Step Two', render: ShowIcon2}, {title: 'Step Three',render: ShowIcon3}] } titleFontSize = {20} activeStep = {2}/>
				<LinkLines/>
      </div>
    );
  }
}


export default MyApp;
