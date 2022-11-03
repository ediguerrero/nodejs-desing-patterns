const Bank = require ("./Bank");

class Bancolombia extends Bank {

    processPayment(){
        console.log(`payment data amount  ${this.amount}  by ${this.account} procesado por Bancolombia`);
    
    }
    
    processRefound(){
        console.log(`refound amount ${this.amount} to ${this.account}  by Bancolombia`);
    }

    validateBank(codeBank){
        return codeBank == 1;
        }
    }
    module.exports = Bancolombia;
