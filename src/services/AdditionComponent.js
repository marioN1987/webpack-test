export class AdditionComponent {
    constructor() {
        this.num1Inpt = document.getElementById('num1');
        this.num2Inpt = document.getElementById('num2');
        this.btn = document.getElementById('btn');
        this.result = document.getElementById('result');
    }

    showResult(res) {
        this.result.innerHTML = res;
    }

    getResult(input) {
        return input.reduce((total, currentVal) => total + currentVal,0);
    }

    getInputs() {
        return [this.num1Inpt.value, this.num2Inpt.value];
    }

    clickEvent(clickMethod) {
        this.btn.addEventListener('click', clickMethod);
    }
}