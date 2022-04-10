const obj1 = {
    user : "Sara Connor",
    getUser : function () {
        return this.user;
    }
}

const obj2 = {
    user : "Jonh Connor"
}

// console.log(obj1.getUser());
const f1 = obj1.getUser;
console.log(f1());

const f2 = f1.bind(obj1);
console.log(f2());

const f3 = f1.bind(obj2);
console.log(f3());

// применяем
const button = {
    type : 'button',
    text : 'Кнопочка',
    render : function () {
        const b = document.createElement(this.type);
        b.textContent = this.text;
        return b;
    }
};
// document.querySelector('.out').append(button.render());

const renderElement = button.render;
// console.log(renderElement);
const renderP = renderElement.bind({type : 'p', text : 'Жги создавай гоняй гусей'});
document.querySelector('.out').append(renderP());

// применение 2
function getWidth(){
    console.log(this.offsetWidth);
}
const getWidth2 = getWidth.bind(document.querySelector('.test-2'))
document.querySelector('.test-1').onclick = getWidth2;