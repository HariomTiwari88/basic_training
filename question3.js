function Calcu() {
    this.a = 0;
    this.b = 0;
    
    this.read = () => {
        this.a = parseFloat(prompt("Enter the first number a:"));
        this.b = parseFloat(prompt("Enter the second number b:"));
    };

    this.sum = () => this.a + this.b;
    this.mul = () => this.a * this.b;
}

let calc = new Calcu();
calc.read();
console.log("Sum:", calc.sum());
console.log("Product:", calc.mul());
