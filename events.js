// Event system
const MyEventTarget = function() {

    const target = document.createTextNode(null);

    this.addEventListener = target.addEventListener.bind(target);
    this.removeEventListener = target.removeEventListener.bind(target);
    this.dispatchEvent = target.dispatchEvent.bind(target);
}

const ev = new MyEventTarget();

// Custom events
const tryPurchaseBuildingEvent = function(building) {
	return new CustomEvent('try purchase building', {
		detail: {
			building: building
		}
	});
}

const purchaseBuildingEvent = function(building) {
	return new CustomEvent('purchase building', {
		detail: {
			building: building
		}
	});
}
