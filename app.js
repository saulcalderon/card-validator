const card_number = document.getElementById('card-number');
const btn_verify = document.getElementById('btn-verify');

btn_verify.addEventListener('click', () => {
    console.log(card_number.value.length);
    
    if (card_number.value.length > 0 ) {
        if (validateNumbers(card_number.value)) {
            verifyCard(parseInt(card_number.value));
        }else{
            console.log('Falso');
        }
    } else {
        console.log('Vacío');
    }
    
});

function verifyCard(num) {
    /* Obtenemos los números y los separamos en cada posición.  */
    let array = ("" + num).split("").map(Number);

    // Colocamos al revés los números del arreglo.
    array.reverse();

    for (let i = 0; i < array.length; i++) {
        // Evaluamos las posiciones impares ya que comenzamos desde el 0.
        if (i % 2 == 1) {

            //Se inserta el doble del número en la posición impar.
            array.splice(i, 1, array[i] * 2);

            //Se evalúa si el doble del número es mayor a 10
            if (array[i] >= 10) {
                //Se dividen los dígitos de los números mayores a 10.
                let array_double = ("" + array[i]).split("").map(Number);
                //Se suman los dígitos.
                let sum_digit;
                array_double.forEach((el) => {
                    sum_digit = ++el;
                });
                //Se insertan los nuevos números en el arreglo original.
                array.splice(i, 1, sum_digit);
            }
        }
    }
    //Se suman los números dentro del arreglo.
    let total = 0;
    array.forEach(el => {
        total += el;
    });
    console.log(total);
}

function validateNumbers(num){
    if (isNaN(num)) {
        return false;
    }else{
        return true;
    };
}

// let num = 4137894711755904;
// //4137894711755904
// //4083952015263




// let num = 4137894711755904 ;
// //4137894711755904
// //4083952015263

// /* Obtenemos los números y los separamos en cada posición.  */
// let array = ("" + num).split("").map(Number);

// // Colocamos al revés los números del arreglo.
// array.reverse();


// for (let i = 1; i <= array.length; i++) {
//   // Evaluamos los números que son pares.
//   if (i % 2 == 0) {

//     array.splice(i - 1, 1, array[i - 1] * 2);

//     if (array[i - 1] >= 10) {

//       let newNum = ("" + array[i - 1]).split("").map(Number);

//       let numw;
//       newNum.forEach((element) => {
//         numw = ++element;
//       });

//       array.splice(i - 1, 1, numw);
//     }
//   }
// }

// let total=0;
// array.forEach(el=> {
//     total += el;
// });
// console.log(total);