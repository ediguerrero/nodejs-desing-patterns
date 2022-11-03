const Payment = require("./Payment");
const Chase = require("./Chase");
const Bancolombia = require("./Bancolombia");


function initialData(bankNumber) {
    var list = implementBanks();
    console.log("List: ", list);
    const payment = new Payment();
    var bank = list.find(x => {
        return x.validateBank(bankNumber);
    });

    if (bank != null) {
        payment.pay(bank);

    }
    else {
        console.log("not found")
    }


}

function implementBanks() {
    var chase1 = new Chase(5000, "234234828", "chase");
    var bancolombia = new Bancolombia(5555, "534535", "bancolombia");
    return [chase1, bancolombia];
}





initialData(3);



