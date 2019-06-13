class Clock extends PIXI.Container {

	constructor(x, y) {
		super();
		this.position.x = x;
		this.position.y = y;

		this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		this.prevMonthIndex = 0;
		this.monthIndex = 0;
		this.timer = 0;

		this.label = new PIXI.Text(this.currentMonth());
		this.label.x = this.position.x;
		this.label.y = this.position.y;
	}

	currentMonth() {
		return this.months[this.monthIndex];
	}

	step(delta) {
		if (this.timer < 11) {
			this.timer += delta * 0.01;
			this.monthIndex = Math.floor(this.timer);
			if (this.prevMonthIndex !== this.monthIndex) {
				reactor.dispatchEvent("advance month");
				this.prevMonthIndex = this.monthIndex;
			}
			this.label.text = this.currentMonth();
		} else {
			this.timer = 0;
		}
	}
}