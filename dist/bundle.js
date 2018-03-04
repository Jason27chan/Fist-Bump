'use strict';

// const { createElement } = React
// const { render } = ReactDOM
// import { App } from './App.js'
// import React from 'react'
// import { App } from '.components/InformationList'

// window.React = React


ReactDOM.render(
// <App />,
React.createElement(
	'h1',
	null,
	' Hello Worl'
), document.getElementById('information-container'));
