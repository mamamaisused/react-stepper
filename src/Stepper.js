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
		circleFontSize = _ref.circleFontSize,
		backgroundColor = _ref.backgroundColor,
		render = _ref.render
	let Panel = {
		display: 'flex',
		justifyContent:'center' ,
		alignItems: 'flex-start',
		width:'100%',
		background: backgroundColor
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
		width:size,
		fontSize: titleFontSize,
		textAlign: 'center',		
		overflow:'visible',
		whiteSpace:'nowrap',
		display:'flex',
		justifyContent:'center',
		color:defaultColor
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
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		overflow:'hidden',
	}
	let deCircle = {
		fontSize: circleFontSize,
		width:  size,
		height:  size,
		lineHeight: `${size}px`,
		textAlign: "center",
		background: defaultColor,
		textDecoration: "none",
		color: activeColor,
		borderRadius: "50%",
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
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
		let active = _ref.active;
		let contentRender = _ref.imgfunc;
		//console.log(contentRender)
		if (contentRender(active) === undefined)
		{
			contentRender = (active)=>{return _ref.number}
		}		
		return(
			<div style = {Column}> 
				<div id = 'circle' style = {active?Circle:deCircle}>{contentRender(active)}</div>
				<div style = {TextStyle}>{_ref.text}</div>
			</div>
		)		
	}
	SetLabel.defaultProps = {
		imgfunc:(active)=>{}
	}

 let steplength = steps.length;

 let drawsteps = steps.map(
		function(element,index,array){
			let circletxt = element.title;		
			let isactive = ()=>{return index<active+1};	
			if(index === 0)
				{
					//console.log(element.render)
					return(
						<div style = {{display:'flex',alignItems: 'flex-start'}}>
							<SetLabel number = {index + 1} text = {circletxt} active = {isactive()} imgfunc = {element.render}/>								
						</div>
					)
				}	
			else
			{
				return(
					<div style = {{display:'flex',alignItems: 'flex-start'}}>
						<SetLine active =  {isactive()}/>
						<SetLabel number = {index + 1} text = {circletxt} active =  {isactive()} imgfunc = {element.render}/>
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
	render: PropTypes.func
}

Stepper.defaultProps = {
		size : 80,
		lineWidth: 2,
		active: 0,
		activeStep :0,
		defaultColor:'white',
		activeColor:'rgb(78, 186, 204)',
		titleFontSize :20,
		defaultBorderWidth: 10,
		circleFontSize : 40,
		render:()=>{},
}

export default Stepper;
