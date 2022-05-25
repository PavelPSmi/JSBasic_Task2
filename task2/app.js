//ЗАДАЧА 1
//пример 1
let a = 1;
b = 1, c, d; //тут с и d присваивается 1
c = ++a;// если а = 1, то оператором ++ мы добавляем +1 к результату. 
//в Итоге получаем а=2. Раз а = с то получаем ответ 2, меняя значение переменной у "с"
alert(c); // ответ: 2


//пример 2
//с предыдущего примера d=1;b=1
d = b++;//в b++ вычисляется как b+1(в итоге b=2), но возвращается старое значение из-за того,что ++ стоит после переменной.
//в итоге раз b=1, а d=b, то d=1
alert(d); //ответ: 1


//пример 3
// с примера 1 мы берем а=2 и с=2
c = 2 + ++a;// как и в 1ом примере, к "а" за счет ++ добавляем +1.Результат а=3
//2+3=5 значит "с" переменная меняет свое значение с 2 на 5
alert(c); //ответ: 5


//пример 4
//с примера 2 берем значение d=1, b=2
//с примера 3 берем значение а=3
d = 2 + b++;
alert(d); //ответ: 4
//как и в примере 2, ++ дает +1 к результату. В итоге b=3, но возвращается старое значение b=2 в уравнение
//d=2+(b=2)
alert(a); //3
//как написал выше, переменная а=3 взята из примера 3
alert(b); //3
//b++ дает b=3

//ЗАДАЧА 2

let aa = 2;//обьявлена переменная и присвоено значение 2/поменял переменную, чтобы JS не ругался
let x = 1 + (aa *= 2);
//a *= 2 это формула сокращенного умножения. аa=аa*2
//в итоге 2*2=4. переменной "аa" присваивается 4
//итог: х=1+4=5

//ЗАДАЧА 3

let oneNumber = +prompt('Enter your first number');
let twoNumber = +prompt('Enter your second number');
console.log(Math.round(oneNumber));
console.log(Math.round(twoNumber));
if (oneNumber >= 0 && twoNumber >= 0) {
    console.log(Math.round(oneNumber - twoNumber));
} else if (oneNumber < 0 && twoNumber < 0) {
    console.log(Math.round(oneNumber * twoNumber));
} else (oneNumber >= 0 && twoNumber <= 0 || oneNumber <= 0 && twoNumber >= 0)
    console.log(Math.round(oneNumber + twoNumber));

//ЗАДАЧА 4

    let oneNumberTask4 = +prompt('Enter your first number');
    let twoNumberTask4 = +prompt('Enter your second number');
function fold() {
    alert(Math.round(oneNumberTask4 + twoNumberTask4));
    return;
}
fold();
function subtract() {
    alert(Math.round(oneNumberTask4 - twoNumberTask4));
    return;
}
subtract();
function multiply() {
    alert(Math.round(oneNumberTask4 * twoNumberTask4));
    return;
}
multiply();
function share() {
    alert(Math.round(oneNumberTask4 / twoNumberTask4));
    return;
}
share();
//ЗАДАЧА 5
let operation = prompt("+,-,*,/");
let arg1 = +prompt('Enter your first number');
let arg2 = +prompt('Enter your second number');
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            fold(arg1, arg2) 
                return age1 + age2;
        case "-":
            return subtract(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        case "/":
            return share(arg1, arg2);
    }
}    