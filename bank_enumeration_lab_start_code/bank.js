var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function (name) {
  const account = this.accounts.filter(function (account) {
    return account.name === name;
  })
  return account[0];
}

Bank.prototype.largestAccount = function () {
  const highestValue = this.accounts.reduce(function(accumulator, account) {
    return Math.max(accumulator, account.value);
  }, 0)
  const highestValueAccount = this.accounts.filter(function(account) {
    return account.value === highestValue;
  })
  return highestValueAccount[0];
}

Bank.prototype.payInterest = function () {
  const addedInterest = this.accounts.map(function (account) {
    account.value *= 1.1;
    return account;
  })
  this.accounts = addedInterest;
}

module.exports = Bank;
