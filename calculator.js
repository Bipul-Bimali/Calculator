class calculate{
  constructor(first_num, second_one){
    this.first_num=first_num;
    this.second_one=second_one;
    this.clear();
  }
  text()/* this region is for output value*/{
   
  }
  numbermagic(num)/*this is where numbers do magic*/{
    if ( num === '.' && this.second.includes('.')) return; 
    this.second = this.second + num.toString();
  }
  clear()/*this region is for clear button*/{
      this.second = ' '
      this.first = ''
      this.symb = ''
  }
  delete()/*this region is for delete button*/{
     this.second = this.second.toString().slice(0 ,-1)
     
  }
  operator(symbol)/*this region is for operators*/{
    if (this.first != '' && this.second != ''){
      this.calculation();
      this.symb = symbol;
    return;
    }
    if (this.first != ''){
      this.symb = symbol;
      return ;
    }
   this.first = this.second
   this.second = '';
   this.symb = symbol
  }
  equal(){
    this.symb = ''
  }
  calculation()/*this is where the magic happens*/{
    let a = parseFloat(this.first);
    let b = parseFloat(this.second);
    switch (this.symb) {
      case "+":
        this.first = a+b;
        this.display()
        this.second = ''
        break;
        case "-":
          this.first = a-b;
          this.display()
          this.second = ''
          break;
          case "*":
        this.first = a*b;
        this.display()
        this.second = ''
        break;
        case "/":
        this.first = a/b;
        this.display()
        this.second = ''
        break;
      default:
        break;
    }
/*   if (this.symb == '+'){
    this.first = a+b;
    this.display()
    this.second = ''
   }
   if (this.symb == '-'){
    this.first = a-b;
    this.display()
    this.second = ''
   }
   if (this.symb == '*'){
    this.first = a*b;
    this.display()
    this.second = ''
   }
   if (this.symb == '/'){
    this.first = a/b;
    this.display()
    this.second = ''
   }*/
  }
  find(func){
    if (first_num.innerText==''){
     var va = parseFloat(this.second)
    }
    else{
    var va = parseFloat(first_num.innerText)
    }
    switch (func){
      case "2":
        this.first = Math.pow(va , 2);
        this.display();
        this.second ='';
        this.symb ='';
        break;
      case "√":
        this.first = Math.sqrt(va);
        this.display();
        this.second = '';
        this.symb='';
        break;
      case "!":
        for (let i = va-1;i>0; i--) {
          va = va * i;
        }
        this.first = va;
        this.display();
        this.second='';
        this.symb = '';
        break;
        default:

        break;
    }
  }
  display()/*this is what you see*/{
    this.second_one.innerText= this.second;
    this.first_num.innerText = this.first.toString() + this.symb.toString()
   
  }
}
const numbers =  document.querySelectorAll('[data-number]');/*NUMBERS are a string */
const operators =  document.querySelectorAll('[data-operand]');//this loooks for operator
const first_num =  document.querySelector('[data-first]');//this does first disp segment
const second_one =  document.querySelector('[data-second]');//this does second disp
const ac = document.querySelector('[data-a]');
const deleteButton= document.querySelector('[data-d]');
const equal = document.querySelector('[data-e]');
const up = document.querySelectorAll('[data-up]');
const say = document.querySelector('[data-say]');
const calculator = new calculate(first_num, second_one); 
numbers.forEach(button  =>{
  button.addEventListener('click', () => {
   calculator.numbermagic(button.innerText)
   calculator.display()
    })
 })
up.forEach(button =>{
  button.addEventListener('click',() =>{
    calculator.calculation()
    calculator.find(button.innerText)
    calculator.display()
  })
})
operators.forEach(button =>  {
  button.addEventListener('click', () => {
    calculator.operator(button.innerText)
    calculator.display()
  })
})


deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.display()
})


equal.addEventListener('click', button => {
  calculator.calculation()
  calculator.equal()
  calculator.display()
})


ac.addEventListener('click', button => {
  calculator.clear()
  calculator.display()
})

