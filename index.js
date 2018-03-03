// const { createElement } = React
// const { render } = ReactDOM

const button = React.createElement(
	'button',
	{id:'postButton', className: 'btn btn-primary'},
	'Bump'
)

ReactDOM.render(
	button,
	document.getElementById('react-container')
)