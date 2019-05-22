const BuildingState = {
	FOR_SALE: 0,
	OWNED: 1,
};

class Building extends PIXI.Container {
	constructor(x, y, value, unitCount) {
		super();
		this.position.x = x;
		this.position.y = y;
		this.value = value;
		this.state = BuildingState.FOR_SALE;

		this.units = [];
		for (let i = 0; i < unitCount; i ++) {
			this.units.push(new Unit(0, 0, 2));
		}

		ev.addEventListener('purchase building', this.purchaseBuilding);
	}

	render() {

		let label = `Building \nValue: $${this.value}`;
		for (let i = 0; i < this.units.length; i ++) {
			label += `\nUnit ${i+1}: ${this.units[i].bedrooms} bedrooms`;
		}

		const details = new PIXI.Text(label);
		details.x = this.position.x;
		details.y = this.position.y;
		app.stage.addChild(details);

		const purchaseButton = new PIXI.Text("Purchase");
		purchaseButton.x = this.position.x;
		purchaseButton.y = this.position.y + 120;
		purchaseButton.interactive = true;
		purchaseButton.on("click", () => {
			ev.dispatchEvent(tryPurchaseBuildingEvent(this));
		});
		app.stage.addChild(purchaseButton);
	}

	purchaseBuilding(e) {
		if (e.detail.building === this) {
			this.state = BuildingState.OWNED;
		}
	}
}