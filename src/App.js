import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
require('./App.css');


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

class MyPage extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}] } titleFontSize = {20}/>
      </div>
    );
  }
}
class MyPage2 extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}] } titleFontSize = {20} active = {1}/>
      </div>
    );
  }
}
class MyPage3 extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}] } titleFontSize = {20} active = {2}/>
      </div>
    );
  }
}

function Stepper(_ref)
{
	let size = _ref.size,
			titleFontSize = _ref.titleFontSize,
			lineWidth = _ref.lineWidth,	
			active = _ref.active,
			steps = _ref.steps,
			activeColor = _ref.activeColor,
			defaultColor = _ref.defaultColor
	let Panel = {
				display: 'flex',
	}
	let Nothing = {
		width: '200px',
		height: size/2-lineWidth/2,
	}
	let Line = {
		width: '200px',
		height: lineWidth,
		background: activeColor,
	}
	let deLine = {
		width: '200px',
		height: lineWidth,
		background: defaultColor,
	}
	let TextStyle = {
		fontSize: titleFontSize,
		textAlign: 'center',
		width : size
	}	
	let Circle = {
		fontFamily: 'Cambria',
		fontSize: '40px',
		width:  size,
		height:  size,
		lineHeight: `${size}px`,
		textAlign: "center",
		background: activeColor,
		textDecoration: "none",
		color: "white",
		borderRadius: "50%",
	}
	let deCircle = {
		fontFamily: 'Cambria',
		fontSize: '40px',
		width:  size,
		height:  size,
		lineHeight: `${size}px`,
		textAlign: "center",
		background: defaultColor,
		textDecoration: "none",
		color: "white",
		borderRadius: "50%",
	}
	let Row = {
		margin: '10px',
	}
	function SetLine(_ref)
	{
		let active = _ref.active
		return(			
			<div style = {Row}> 
				<div style = {Nothing}/>
				<div style = {active?Line:deLine}/>
			</div>
		)
	}
	function SetLabel(_ref)
	{
		let active = _ref.active
		return(
			<div style = {Row}> 
				<div style = {active?Circle:deCircle}>{_ref.number}</div>
				<div style = {TextStyle}>{_ref.text}</div>
			</div>
		)
	}

 let steplength = steps.length;

 let drawsteps = steps.map(
		function(element,index,array){
			let circletxt = element.title;		
			let isactive = ()=>{return index<active+1};	
			if(index === 0)
				{
					return(
						<div style = {Panel}>
							<SetLabel number = {index + 1} text = {circletxt} active = {isactive()}/>	
							
						</div>
					)
				}	
			else
			{
				return(
					<div style = {Panel}>
						<SetLine active =  {isactive()}/>
						<SetLabel number = {index + 1} text = {circletxt} active =  {isactive()}/>
					</div>
				)
			}
		}
	)

	
	return (
		<div>
			<div style = {Panel}>
					{drawsteps}
			</div>
			<div style = {{display:'flex',justifyContent:'flex-start'}}>
			<ul>
          <li>
            <Link to="/">Step One</Link>
          </li>
          <li>
            <Link to="/2">Step Two</Link>
          </li>
          <li>
            <Link to="/3">Step Three</Link>
          </li>
        </ul>

			</div>
		</div>	
			
	)
}

function boxClick(){
	console.log('click')
}

Stepper.propTypes = {
	size: PropTypes.number,
}

Stepper.defaultProps = {
		size : 80,
		lineWidth: 3,
		active: 0,
		defaultColor:'rgb(175, 180, 184)',
		activeColor:'rgb(96, 174, 219)'
}

export default MyApp;
