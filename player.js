class Player extends PIXI.Container {
	constructor() {
		super();
		this.name = "Robert";
		this.cash = 1000000;
		this.buildings = [];

		ev.addEventListener('try purchase building', this.tryPurchaseBuilding)
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

	tryPurchaseBuilding(e) {
		console.log(this); // `this`` is the event target, not the player
		
		if (this.cash >= e.detail.building.value) {
			buildings.pop(e.detail.building);
			this.cash -= e.detail.building.value;
			ev.dispatchEvent(purchaseBuildingEvent(e.detail.building));
		} else {
			console.log("Not enough cash!");
		}
	}
}