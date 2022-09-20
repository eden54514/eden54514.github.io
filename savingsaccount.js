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


class Bank{

    constructor(){
        
    }

    addAccount(){
        return 
    }

}