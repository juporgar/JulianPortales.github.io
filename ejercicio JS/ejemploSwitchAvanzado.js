let a = Math.random() * 100;
console.log(a);

switch (true) {
    case (a < 5):
        console.log('es menor que 5');

        break;
    case (a < 70):
        console.log('es mayor o igual a 5 y menor de 70');

        break;

    default:
        console.log('es mayor de 69');

        break;
}