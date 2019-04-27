import React from 'react';
import logo from './logo.svg';
import './App.css';
import duplicateCount from './calculate';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: ['']
		};
	}

	onChange = (e, index) => {
		const { values } = this.state;
		values[index] = e.target.value;
		this.setState({ values })
	}

	addItems = () => {
		const { values } = this.state;
		this.setState({
			value: values.push('')
		})
	}

	calculate = () => {
		const { values } = this.state;
		let transformedValues = values.map(value => value.split(","));
		const duplicateValue = duplicateCount(transformedValues);
		alert(duplicateValue);
	}



	render() {
		const elements = this.state.values.map((value, index) =>
			<div className='cards'>
				<div className='card-headings'>
					Item
				</div>
				<input type='text'
					placeholder='Please enter the string with ,'
					className='form-input'
					value={value} key={index}
					onChange={(e) => this.onChange(e, index)} />
			</div>
		);
		return (<React.Fragment>
			<div className="headings flex">
				{elements}
			</div>
			<div className='footer'>
				<button className='btn btn-primary' title="Add" onClick={this.addItems}>
					<i className='icon icon--Add' />Add
				</button>
				<button className='btn btn-secondary' title="Calculate" onClick={this.calculate}>
					<i className='icon icon--Calculator' /> Calcuate
				</button>
			</div>
		</React.Fragment>)
	}
}
export default App;
