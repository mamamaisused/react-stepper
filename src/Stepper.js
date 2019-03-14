import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Stepper(_ref)
{
	let size = _ref.size,
		titleFontSize = _ref.titleFontSize,
		lineWidth = _ref.lineWidth,	
		active = _ref.activeStep,
		steps = _ref.steps,
		activeColor = _ref.activeColor,
		defaultColor = _ref.defaultColor,
		defaultBorderWidth = _ref.defaultBorderWidth,
		circleFontSize = _ref.circleFontSize
	let Panel = {
		display: 'flex',
		justifyContent:'center' ,
		alignItems: 'flex-start',
	}
	let linelength = defaultBorderWidth*20;
	let Nothing = {
		width: linelength,
		height: size/2-lineWidth/2,
	}
	let Line = {
		width: linelength,
		height: lineWidth,
		background: activeColor,
		borderRadius: '3px',
	}
	let deLine = {
		width: linelength,
		height: lineWidth,
		background: defaultColor,
		borderRadius: '3px',
	}
	let TextStyle = {
		fontSize: titleFontSize,
		textAlign: 'center',		
		color: 'gray',
	}	
	let Circle = {
		fontSize: circleFontSize,
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
		fontSize: circleFontSize,
		width:  size,
		height:  size,
		lineHeight: `${size}px`,
		textAlign: "center",
		background: defaultColor,
		textDecoration: "none",
		color: 'gray',
		borderRadius: "50%",
	}
	let Column = {
		margin: '2px',
		display:'flex',
		justifyContent:'center' ,
		flexDirection: 'column',
		alignItems: 'center',
	}
	function SetLine(_ref)
	{
		let active = _ref.active
		return(			
			<div style = {Column}> 
				<div style = {Nothing}/>
				<div style = {active?Line:deLine}/>
			</div>
		)
	}
	function SetLabel(_ref)
	{
		let active = _ref.active
		return(
			<div style = {Column}> 
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
			<div style = {Panel}>
					{drawsteps}
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
		lineWidth: 4,
		active: 0,
		activeStep :0,
		defaultColor:'rgb(175, 180, 184)',
		activeColor:'rgb(96, 174, 219)',
		titleFontSize :20,
		defaultBorderWidth: 10,
		circleFontSize : 40,
}

export default Stepper;
