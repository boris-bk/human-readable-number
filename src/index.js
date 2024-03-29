module.exports = function toReadable (number) {
    let number1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let number2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    let string = '';


    switch (number.toString().split('').length) {
        case 3:
            string += number1[Math.trunc(number / 100)] + ' hundred';
        case 2:
            if (number % 100 > 19) {
                if (string !== '') string += ' ';
                string += (number2[(Math.trunc(number / 10)) % 10 - 2]);
            }
            else {
                if (string !== '' && number % 100 !== 0) string += ' ';
                if (number % 100 !== 0) return string + number1[number % 100];
            }
        case 1:
            if ((number.toString().split('').length) === 1) return string + number1[number % 10];
            if (number % 10 > 0 && (number.toString().split('').length) > 1) return string + ' ' + number1[number % 10];
    }
    return string
}