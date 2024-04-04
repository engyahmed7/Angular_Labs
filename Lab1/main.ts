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

class SavingAccount extends Account implements IAccount {
    constructor(Acc_no = 1, Balance = 0, public Min_balance = 100) {
      super(Acc_no, Balance);
    }
    Date_of_opening: Date;
    addCustomer() {}
    removeCustomer() {}
  }

class CurrentAccount extends Account implements IAccount {
    constructor(Acc_no = 1, Balance = 0, public Interest_rate = 10) {
      super(Acc_no, Balance);
    }
    Date_of_opening: Date;
    addCustomer() {}
  
    removeCustomer() {}
  }




let saving = new SavingAccount();
let current = new CurrentAccount();
saving.addCustomer();
current.addCustomer();
saving.removeCustomer();
current.removeCustomer();
