const Bank = require ("./Bank");

class Chase extends Bank {
processPayment(){
    console.log(`payment data amount  ${this.amount}  by ${this.account} procesado por chase`);

}

processRefound(){
    console.log(`refound amount ${this.amount} to ${this.account}  by chase`);
}

validateBank(codeBank){
return codeBank == 0;
}
}
module.exports = Chase;