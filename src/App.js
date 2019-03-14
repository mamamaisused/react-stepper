import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
//require('./App.css');


function MyApp() {
  return (
    <Router>
		<div>
			<Route path = "/" component = {MyPage}/>
		</div>
    </Router>
  );
}

class MyPage extends React.Component {
  render() {
    return (
      <div className="App">
				<Stepper  titleFontSize = {20}/>
      </div>
    );
  }
}

function Stepper(_ref)
{
	let size = _ref.size,
			titleFontSize = _ref.titleFontSize
	function SetLine({position})
	{
		return(
			<div className = 'Line'/>
		)
	}
	let TextStyle = {
		fontSize: titleFontSize,
		textAlign: 'center',
		width : _ref.size
	}	
	let Circle = {
		fontFamily: 'Cambria',
		fontSize: '40px',
		width:  _ref.size,
		height:  _ref.size,
		lineHeight: `${_ref.size}px`,
		textAlign: "center",
		background: "rgb(96, 174, 219)",
		textDecoration: "none",
		color: "white",
		borderRadius: "50%",
	}
	let Row = {
		margin: '10px',
	}
	return (
		<div className = 'Panel'>
			<div style = {Row}> 
				<div style = {Circle}>1</div>
				<div style = {TextStyle}>Step 1</div>
			</div>
			<div className = 'Row'> 
				<div className = 'Nothing'/>
				<SetLine/>
			</div>
		</div>
		
	)
}

Stepper.propTypes = {
	size: PropTypes.number,
}

Stepper.defaultProps = {
		size : 80,
}

export default MyApp;
