import React, { Component } from 'react'
import './App.css'
// import CurrencyDisplay from './Components/CurrencyDisplay' alternatively we can use the CurrencyDisplay component rather than inline JSX. We would need to pass an amount and currency prop
import Currency from './components/CurrencyConverter';

class App extends Component {
	render() {
		return (
			<>
				{/* <h2>Render Props</h2> */}
				<Currency
					render={(currencyData, amount) => (
						<p>
							US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
							{currencyData.symbol}
							{(amount * currencyData.rate).toFixed(2)}
						</p>
					)}
				/>
			</>
		)
	}
}

export default App
