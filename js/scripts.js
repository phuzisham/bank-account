function BankAccount(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

BankAccount.prototype.updateBalance = function (amount1, amount2) {
  if (amount1 && amount2) {
    this.balance = this.balance + amount1;
    this.balance = this.balance - amount2;
  }  else if (amount1) {
    this.balance = this.balance + amount1;
  }  else if (amount2) {
    this.balance = this.balance - amount2;
  }
};

$(document).ready(function() {
  $("form#initBankForm").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var initialDeposit = parseInt($("#initialDeposit").val());

    var newBankAccount = new BankAccount(name, initialDeposit);

    $("#nameBank").text(newBankAccount.name);
    $("#balance").text(newBankAccount.balance.toFixed(2));

    $(".well h3").show();

    $("#name").val('');
    $("#initialDeposit").val('');

    $("form#bankForm").submit(function(event){
      event.preventDefault();
      var deposit = parseInt($("#deposit").val());
      var withdrawl = parseInt($("#withdrawl").val());
      newBankAccount.updateBalance(deposit, withdrawl);

      $("#balance").text(newBankAccount.balance.toFixed(2));

      $("#deposit").val('');
      $("#withdrawl").val('');
    });
  });
});
