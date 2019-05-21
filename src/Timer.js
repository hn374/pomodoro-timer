import React from 'react';
import './Timer.css';

class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			seconds: 0,
			minutes: 0,
			hours: 0
		};

		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.clear = this.clear.bind(this);
	}

	tick() {
		this.setState(state => ({
			seconds: state.seconds + 1,
		}));
	}

	start() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	stop() {
		clearTimeout(this.interval);
	}

	clear() {
		this.setState(state => ({
			seconds: 0,
			minutes: 0,
			hours: 0
		}));
	}

	timeFormat(timeInSeconds) {
		var date = new Date(null);
		date.setSeconds(timeInSeconds);
		var timeString = date.toISOString().substr(11, 8);
		return timeString;
	}

	render() {
		return <div>
			<div className="Time">{ this.timeFormat(this.state.seconds) }</div>
			<div className="Button-Container">
				<button onClick={this.start} className="myButton">Start</button>
				<button onClick={this.stop} className="myButton Stop">Stop</button>
				<button onClick={this.clear} className="myButton">Clear</button>
			</div>
		</div>;
	}
}

export default Timer
