class Event {

	constructor(name) {
		this.name = name;
		this.callbacks = [];
	}

	registerCallback(callback) {
		this.callbacks.push(callback);
	}
}

class Reactor {

	constructor() {
		this.events = {};
	}

	registerEvent(eventName) {
		const event = new Event(eventName);
		this.events[eventName] = event;
	}

	dispatchEvent(eventName, eventArgs) {
		this.events[eventName].callbacks.forEach(function(callback) {
			callback(eventArgs);
		});
	}

	addEventListener(eventName, callback) {
		this.events[eventName].registerCallback(callback);
	}
}

const reactor = new Reactor();
reactor.registerEvent('advance month');
reactor.registerEvent('try purchase building');
reactor.registerEvent('purchase building');
