class Player extends PIXI.Container {
	constructor() {
		super();
		this.name = "Robert";
		this.wealth = 1000000;
	}

	display() {
		const nameLabel = new PIXI.Text(`Lord ${this.name}`);
		nameLabel.x = 10;
		nameLabel.y = 10;

		const wealthLabel = new PIXI.Text(`$${this.wealth}`);
		wealthLabel.x = 10;
		wealthLabel.y = 40;

		app.stage.addChild(nameLabel);
		app.stage.addChild(wealthLabel);
	}
}