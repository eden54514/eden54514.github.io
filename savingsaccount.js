class SavingsAccount extends Account{

    constructor(balance,interest){
        super(balance);
        this.interest=interest;
    }

    get interest(){

        return this._interest;

    }

    set interest(interest){

        this._interest=interest;
    }

    addInterest(){
        (super.balance*(this._interest)/100)+this._interest;
    }

    toString(){
        return "Account " + this._number + ": balance " + 
        this._balance+ ": interest " + this._interest;
    }

}


class Bank {
    static nextNumber = 1;
  
    constructor() {
      this._accounts = [];
    }
  
    getAccounts() {
      return this._accounts;
    }
  
    addAccount() {
      this._accounts.push(new Account(Bank.nextNumber++));
    }
  
    addSavingsAccount(interest) {
      this._accounts.push(new SavingsAccount(Bank.nextNumber++, interest));
    }
  
    addCheckingAccount(overdraft) {
      this._accounts.push(new CheckingAccount(Bank.nextNumber++, overdraft));
    }
  
    closeAccount(number) {
      this._accounts = this._accounts.filter((x) => x.getNumber() !== number);
    }
  
    accountReport() {
      return this._accounts.reduce(
        (x, y) => x.toString() + "\n" + y.toString(),
        ""
      );
    }
  
    endOfMonth() {
      return this._accounts
        .map((x) => x.endOfMonth())
        .reduce((x, y) => x + "\n" + y, "");
    }
  }