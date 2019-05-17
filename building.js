class Building extends PIXI.Container {
	constructor(x, y, value, unitCount) {
		super();
		this.position.x = x;
		this.position.y = y;
		this.value = value;

		this.units = [];
		for (let i = 0; i < unitCount; i ++) {
			this.units.push(new Unit(0, 0, 2));
		}
	}

	render() {

		let label = `Building \nValue: $${this.value}`;
		for (let i = 0; i < this.units.length; i ++) {
			label += `\nUnit ${i+1}: ${this.units[i].bedrooms} bedrooms`;
		}

		const name = new PIXI.Text(label);
		name.x = this.position.x;
		name.y = this.position.y;
		app.stage.addChild(name);
	}
}