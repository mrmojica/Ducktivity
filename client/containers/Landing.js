var React = require('react');
var ReactDOM = require('react-dom');
var TaskBoard = require('./TaskBoard');
var Overview = require('./Overview');
// var Input = require('./UserInput');


var Landing = function(){

	return (
		<div id="landing">
			<TaskBoard />
			<Overview/>
		</div>

		)




};


module.exports = Landing;
