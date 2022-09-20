class checkingaccount extends Account{

    constructor(balance, overDraft){

        super(balance);
        this.overDraft=overDraft;
    }

    get overDraft(){
        return this._overDraft;
    }

    set overDraft(overDraft){
        this._overDraft=overDraft;
    }

    withdraw(overDraft){
        if (overDraft <= 0) {
            throw new RangeError("Withdraw amount has to be greater than overDraft");
        }

    
    }
    
    toString(){
        return "Account " + this._number + ": balance " + 
       this._balance+ ": overDraft " + this._overDraft;
   }

}