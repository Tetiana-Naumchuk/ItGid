class Goods {
	constructor(name, amount, image, count) {
		this.name = name
		this.amount = amount
		this.image = image
		this.count = count
	}
	draw() {
		let div = document.createElement('div')

		let n = document.createElement('p')
		n.innerHTML = this.name
		div.append(n)

		let am = document.createElement('p')
		am.innerHTML = this.amount
		div.append(am)

		let img = document.createElement('img')
		img.src = this.image
		div.append(img)

		let c = document.createElement('p')
		c.innerHTML = this.count
		div.append(c)

		return div
	}
}

