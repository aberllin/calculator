class Calculator {
    constructor(previousValue, currentValue) {
      this.previousValue = previousValue
      this.currentValue = currentValue
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
    }
  
    compute() {
      
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
     }
 }
  


const numberBtns = document.querySelectorAll('.numbers')
const operationBtns = document.querySelectorAll('.operations')
const eqlBtn = document.querySelector('.eql-btn')
const clearBtn = document.querySelector('.clear-btn')
const deleteBtn = document.querySelector('.delete')

const previousValue = document.querySelector('.previous-value')
const currentValue = document.querySelector('.current-value')

const calculator = new Calculator(previousValue, currentValue)


