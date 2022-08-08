module.exports = function toReadable(number) {
    let number1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let number2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    let string = '';


    switch (number.toString().split('').length) {
        case 3:
            string += Math.trunc(number / 100) + ' hundred';
            if (number % 100 > 19) {
                string += (number2[Math.trunc(number / 10) - Math.trunc(number / 100)]) + '' + number1[number % 10];
            }
            else {
                string += (number2[Math.trunc(number / 10) - Math.trunc(number / 100)]) + '' + number1[number % 100];
            }
        case 2:
            if (number % 100 > 19) {
                string += (number2[Math.trunc(number / 10) - Math.trunc(number / 100)]) + '' + number1[number % 10];
            }
            else {
                string += (number2[Math.trunc(number / 10) - Math.trunc(number / 100)]) + '' + number1[number % 100];
            }
        case 1:
            string += number1[number]
    }
    return string;
}

toReadable(1); // Will return 'one'
toReadable(997); //will return 'nine hundred ninety seven'