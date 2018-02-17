class Action {

    constructor(date, cash, currentCash){
        this.date = date;
        this.cash = cash;
        this.currentCash = currentCash;
    }

    getCash() {
        return this.cash.toFixed(2);

    }

    getDate() {
        return ((this.date.getDate() < 10) ? '0' : '') + this.date.getDate() + "/" + ((this.date.getMonth() < 9)
            ? '0' : '') + (parseInt(this.date.getMonth())+1) + "/" + this.date.getFullYear();
    }

    getCurrentCash(){
        return this.currentCash.toFixed(2);
    }
};

module.exports = Action;