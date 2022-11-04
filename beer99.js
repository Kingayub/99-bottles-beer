// function generateSongText() {
//     let output = [];
// for (let i = 99; i > 0; i--) {
//     if (i == 2 || i == 3 || i == 4 || i == 22 || i == 23 || i == 24 || i == 32 || i == 33 || i == 34 || i == 42 || i == 43 || i == 44 || i == 52 || i == 53 || i == 54 || i == 62 || i == 63 || i == 64 || i == 72 || i == 73 || i == 74 || i == 82 || i == 83 || i == 84 || i == 92 || i == 93 || i == 94) {
//         output.push(`${i} бутылки пива на стене, ${i} бутылки пива на стене
// Возьми одну, пусти по кругу, ${i - 1} бутылка пива на стене!`)
//     }
//     else if (i == 1 || i == 21 || i == 31 || i == 41 || i == 51 || i == 61 || i == 71 || i == 81 || i == 91) {
//         output.push(`${i} бутылка пива на стене, ${i} бутылка пива на стене
// Возьми одну, пусти по кругу, нет бутылок пива на стене!`)
//     } else {
//         output.push(`${i} бутылок пива на стене, ${i} бутылок пива на стене
// Возьми одну, пусти по кругу, ${i - 1} бутылок пива на стене!`)
//     }
// }
//     return output.join(' \n');
// }

// console.log(generateSongText())

// // // 
const generateSingleStanza = (number) => {
    if (number > 100) {
        return 'У тебя нет столько пива куда ты лезешь'
    }
    else if ((number == 2 || number == 3 || number == 4 || number == 22 || number == 23 || number == 24 || number == 32 || number == 33 || number == 34 || number == 42 || number == 43 || number == 44 || number == 52 || number == 53 || number == 54 || number == 62 || number == 63 || number == 64 || number == 72 || number == 73 || number == 74 || number == 82 || number == 83 || number == 84 || number == 92 || number == 93 || number == 94)) {
        return `${number} бутылки пива на стене, ${number} бутылки пива на стене
Возьми одну, пусти по кругу, ${number - 1} бутылка пива на стене!`
    }
    else if (number == 1 || number == 21 || number == 31 || number == 41 || number == 51 || number == 61 || number == 71 || number == 81 || number == 91) {
        return `${number} бутылка пива на стене, ${number} бутылка пива на стене
Возьми одну, пусти по кругу, нет бутылок пива на стене!`
    } else {
        return `${number} бутылок пива на стене, ${number} бутылок пива на стене 
Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`
    }
}
// console.log(generateSingleStanza(16))

// Область видимости функции function declaration везде! Возможность использования декларативной функции до объявления- является 'Поднятием'   

// function generateSongText1(sum) {
//     return generateSingleStanza(...arguments)
// }

// console.log(generateSongText1(2))





function generateSongText1() {
    let string = '';
    for (let i = 99; i > 0; i--) {
        string += generateSingleStanza(i) + '\n'
    }
    return string;
}

// console.log(generateSongText1())



// function generateSongText1() {
//     let string = [];
//     for (let i = 99; i > 0; i--) {
//         string.push (generateSingleStanza(i))
//     }
//     return string.join(' \n');
// }

// console.log(generateSongText1())
