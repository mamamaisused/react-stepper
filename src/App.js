import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stepper from './Stepper.js';



function MyApp() {
  return (
    <Router>
		<div>
			<Route exact path = "/" component = {MyPage}/>
			<Route path = "/2" component = {MyPage2}/>
			<Route path = "/3" component = {MyPage3}/>
		</div>		
    </Router>
  );
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
				<Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}] } titleFontSize = {20}/>
				<LinkLines/>
      </div>
    );
  }
}
class MyPage2 extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}] } titleFontSize = {20} activeStep = {1}/>
				<LinkLines/>
      </div>
    );
  }
}
class MyPage3 extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}] } titleFontSize = {20} activeStep = {2}/>
				<LinkLines/>
      </div>
    );
  }
}


export default MyApp;
