const Action = require('../src/Action.js');

class Account{
    constructor(){
        this.actions = [];
        this.header = 'DATE | AMOUNT | BALANCE\n';
    }

    getStatus() {

        let status = this.header;

        // if (!this.actions.length) {
        //     return 'DATE | AMOUNT | BALANCE \n';
        // } else {
        //     return `DATE | AMOUNT | BALANCE \n ${this.getDate()} | ${this.getCash()} | ${this.getCash()}`;
        // }

        this.actions.forEach(action => {
            status += `${action.getDate()} | ${action.getCash()} | ${action.getCurrentCash()}\n`;
        });

        return status;
    }
    depositOrWithdraw(date, cash) {
         // this.cash += cash;
         // this.date = date;

        let currentCash = cash += this.actions.length ? this.actions[this.actions.length - 1].getCurrentCash() : 0;


        this.actions.unshift(new Action(date, cash, currentCash));
    }


    // withdraw(date, cash){
    //     this.cash -= cash;
    //     this.date = date;
    // }
}

module.exports = Account;