class Player extends PIXI.Container {
	constructor() {
		super();
		this.name = "Robert";
		this.cash = 1000000;
		this.buildings = [];

		reactor.addEventListener('try purchase building', (building) => {
			this.tryPurchaseBuilding(building);
		});
		reactor.addEventListener("advance month", () => {
			// console.log("new month!");
		});
	}

	display() {
		const nameLabel = new PIXI.Text(`Lord ${this.name}`);
		nameLabel.x = 10;
		nameLabel.y = 10;

		const cashLabel = new PIXI.Text(`$${this.cash}`);
		cashLabel.x = 10;
		cashLabel.y = 40;

		app.stage.addChild(nameLabel);
		app.stage.addChild(cashLabel);
	}

	tryPurchaseBuilding(building) {

		if (this.cash >= building.value) {
			this.buildings.push(building);
			this.cash -= building.value;
			reactor.dispatchEvent('purchase building', building);
		} else {
			console.log("Not enough cash!");
		}
	}
}