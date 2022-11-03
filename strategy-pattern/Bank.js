class Bank{
    constructor(amount, account, name){
        this.amount = amount;
        this.account = account;
        this.name = name;
    }

    pay(){

        return this.processPayment();
    }

    refound (){
        return this.processRefound();
    }

    validate(codeBank){
        return  this.validateBank(codeBank);
    }
    
}

module.exports = Bank;