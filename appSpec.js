const expect = require("chai").expect;

const Account = require("../src/Account.js");

describe('Account', function () {

    it('setAccount', function () {
        let account = new Account();
        expect(account.getStatus()).equal('DATE | AMOUNT | BALANCE\n');
    });

    it('getFirstDeposit', function () {
        let account = new Account(),
            date = new Date(2014, 03, 01);
        account.depositOrWithdraw(date, 1000);

        expect(account.getStatus()).equal('DATE | AMOUNT | BALANCE\n01/04/2014 | 1000.00 | 1000.00');
    });

    it('getFirstWithdraw', function () {
        let account = new Account(),
            date1 = new Date(2014, 03, 01),
            date2 = new Date(2014, 03, 02);
        account.depositOrWithdraw(date1, 1000);
        account.depositOrWithdraw(date2, -100);

        expect(account.getStatus()).equal('DATE | AMOUNT | BALANCE\n01/04/2014 | 1000.00 | 1000.00\n02/04/2014 | -100.00 | 900.00');
    });
});