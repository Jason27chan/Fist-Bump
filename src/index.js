import React from 'react'
import { render } from 'react-DOM'
import { hello, goodbye } from './lib'

render(
	<div> 
		{hello}
		{goodbye}
	</div>,
	document.getElementById('information-container')
)