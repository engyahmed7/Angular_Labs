class Account{
    constructor(public Acc_no=0, public Balance=0){
    }

    debitAmount(){

    }
    creditAmount(){

    }
    getBalance(){
        
    }
};

interface IAccount{
    Date_of_opening: Date;

    addCustomer();
    removeCustomer();
}

class SavingAccount extends Account implements IAccount{
    Min_Balance: number;
    Date_of_opening: Date;
    addCustomer() {
        // throw new Error("Method not implemented.");
    }
    removeCustomer() {
        // throw new Error("Method not implemented.");
    }
    
}

class CurrentAccount extends Account implements IAccount{
    interest_rate: number;
    Date_of_opening: Date;
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
