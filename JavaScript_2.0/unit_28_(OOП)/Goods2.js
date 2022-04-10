
class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count)
        this.sale = sale
    }
    draw() {
        let div2 = super.draw()

        if (this.sale) {
            let s = document.createElement('p')
            s.textContent = 'sale'
            div2.append(s)
        }
        return div2
    }
}