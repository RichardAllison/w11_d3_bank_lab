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

module.exports = Bank;
