// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

//  let obj = new Goods('Tetiana', 10, `<img src = './img/1.png'>`, 5)
//  console.log(obj)

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

let goods = new Goods('scull', 45, 'img/1.png', 10)
document.querySelector('.out-3').append(goods.draw())

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new Goods('pumpkin', 50, 'img/2.png', 5)
document.querySelector('.out-4').append(goods2.draw())

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

let sales = new Goods2('spider', 35, 'img/3.png', 15, true)
document.querySelector('.out-5').append(sales.draw())

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods2('jar', 65, 'img/4.png', 5, false)
document.querySelector('.out-6').append(goods3.draw())

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

let obj = new Valid('tati.n@gmail.com', 'hjfhgjhgy')
obj.validate()
console.log(obj.validate())

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let obj2 = new Valid('tati.n@gmail.com', 'hjfjh')
obj2.validate()
console.log(obj2.validate())

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let obj3 = new Valid('tati.n@gmail.com', 'hj36gfj')
obj3.validate()
console.log(obj3.validate())

//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

let valid = new Valid2('', 'dlof', 'email empty', 'min length 6')
valid.validate()
console.log(valid)
console.log(valid.validate())

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = new Valid2('', 'fhgjvdgsdn', 'email empty', 'min length 6')
valid2.validate()
console.log(valid2)
console.log(valid2.validate())

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid3 = new Valid2('maria@gmail.com', '14587558', 'email empty', 'min length 6')
valid3.validate()
console.log(valid3)
console.log(valid3.validate())
