const card_number = document.getElementById('card-number');
const btn_verify = document.getElementById('btn-verify');

// Se verifica si la tarjeta cumple o no los requisitos.
btn_verify.addEventListener('click', () => {
    let card_trim = card_number.value.replace(/ /g, '');
    // Se agrega las clases de animate css.
    box.classList.add('animate__faster','animate__animated', 'animate__zoomIn');
    if (card_number.value.length > 0) {
        if (card_number.value.length >= 15) {
            if (validateNumbers(card_trim)) {
                if (verifyCard(card_trim)) {
                    displayMessage('valid', card_trim);
                } else {
                    displayMessage('invalid', card_trim);
                }
            } else {
                displayMessage('numbers', card_trim);
            }
        } else {
            displayMessage('length', card_trim);
        }
    } else {
        displayMessage('empty', card_trim);
    }

});

// Función para el algoritmo de Luhn
const verifyCard = num => {
    /* Obtenemos los números y los separamos en cada posición.  */
    let array = ("" + num).split("").map(Number);

    array.reverse();

    for (let i = 0; i < array.length; i++) {
        // Evaluamos las posiciones impares ya que comenzamos desde el 0.
        if (i % 2 == 1) {
            //Se inserta el doble del número en la posición impar.
            array.splice(i, 1, array[i] * 2);

            if (array[i] >= 10) {
                //Se dividen los dígitos de los números mayores a 10.
                let array_double = ("" + array[i]).split("").map(Number);

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
    array.forEach(el => { total += el; });

    total % 10 == 0 ? total = true : total = false;

    return total;
}


const validateNumbers = num => {
    if (isNaN(num)) {
        return false;
    } else {
        return true;
    };
}

const img = document.getElementById('img');
const main_msg = document.getElementById('main-message');
const message = document.getElementById('message');
const notification = document.getElementById('notification');
const message_close = document.querySelectorAll('.close');

const displayMessage = (resp, card) => {
    notification.classList.remove('hide');
    switch (resp) {
        case 'empty':
            main_msg.innerText = 'Oops, algo salió mal...';
            message.innerText = 'Debe completar el campo.';
            img.setAttribute('src', 'img/error.png');
            break;
        case 'length':
            main_msg.innerText = 'Oops, algo salió mal...';
            message.innerText = 'El número debe tener al menos 15 dígitos.';
            img.setAttribute('src', 'img/error.png');
            break;
        case 'numbers':
            main_msg.innerText = 'Oops, algo salió mal...';
            message.innerText = 'Por favor no ingresar caracteres distintos a números.';
            img.setAttribute('src', 'img/error.png');
            break;
        case 'invalid':
            main_msg.innerText = 'Oops, algo salió mal...';
            message.innerText = `Su tarjeta es inválida, por favor inténtelo de nuevo.`;
            img.setAttribute('src', 'img/error.png');
            break;
        case 'valid':
            let card_show = (card.substring(0, card.length-4)).replace(/[0-9]/g,'*') + card.substring(card.length - 4);
            main_msg.innerText = 'Éxito';
            img.setAttribute('src', 'img/check.png');
            message.innerText = `Su tarjeta ${card_show} es válida, felices compras!`;
            break;
        default:
            break;
    }
}

const box = document.querySelector('div .content');

message_close.forEach(el =>{
    el.addEventListener('click', () => {
        notification.classList.add('hide');
        box.classList.remove('animate__faster','animate__animated', 'animate__zoomIn');
        card_number.value = '';
    });
});


// 4137894711755904;
// 4137894711755904
// 4083952015263
