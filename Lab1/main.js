class Account {
    constructor(Acc_no = 0, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
    }
    creditAmount() {
    }
    getBalance() {
    }
}
;
class SavingAccount extends Account {
    addCustomer() {
        // throw new Error("Method not implemented.");
    }
    removeCustomer() {
        // throw new Error("Method not implemented.");
    }
}
class CurrentAccount extends Account {
    addCustomer() {
        // throw new Error("Method not implemented.");
    }
    removeCustomer() {
        // throw new Error("Method not implemented.");
    }
}
let saving = new SavingAccount();
let current = new CurrentAccount();
saving.addCustomer();
current.addCustomer();
saving.removeCustomer();
current.removeCustomer();
