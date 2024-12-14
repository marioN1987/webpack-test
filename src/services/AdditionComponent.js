export class AdditionComponent {
    constructor() {
        this.num1Inpt = document.getElementById('num1');
        this.num2Inpt = document.getElementById('num2');
        this.btn = document.getElementById('btn');
        this.result = document.getElementById('result');

        this.btn.addEventListener('click', () => {
            this.addition();
        });
    }

    addition() {
        const sum = +this.num1Inpt.value + +this.num2Inpt.value;
        console.log('--', sum);
    }
}