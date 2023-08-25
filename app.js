// დავალება 1

let ladder = {
    step: 0,
    up() {
        this.step++
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
    },
};

ladder.up().up().down().showStep();

//დავალება 2

function Calculator() {
   this.read = function() {
    this.number1 = +prompt('Enter first number');
    this.number2 = +prompt('Enter second number');
   };

   this.sum = function() {
    return this.number1 + this.number2;
   };

   this.mul = function() {
    return this.number1 * this.number2;
   };
}

let calculatoerInstance = new Calculator();

calculatoerInstance.read();
calculatoerInstance.sum();
calculatoerInstance.mul();

//დავალება 3

function checkSpam(sentence) {

    if(
    sentence.toLowerCase().contains('viagra') || 
    sentence.toLowerCase().contains('xxx')
    ) {
     return true;
}
     return false;
}
checkSpam('buy ViaGra now');

// დავალება 4

function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.substring(0, maxlength) + '...';
    } else {
        return str;
    }
}