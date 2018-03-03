// const { createElement } = React
// const { render } = ReactDOM
// import { App } from './App.js'
import React from 'react'
import { InformationList } from '.components/InformationList'

window.React = React


ReactDOM.render(
	<App />,
	document.getElementById('information-container')
)