//ATM exercise
let menuChoice = 0;
let balance = 0;
let bankBalance = 0;
let withdrawal = 0;
let spendingBalance = 0;
let spendB = 0;
let spentMoney = 0;
function accountBalance() {
  let x = +prompt("Please input the amount you want to put into your bank balance");
  balance = balance + x;
  return balance;
}
function withdrawnAmount() {
  let y = +prompt("Please input the amount you want to withdraw");
  return y;
}
function spendBalance() {
  spendB = spendB - spentMoney;
  return spendB;
}
function spentAmount() {
  let z = +prompt("Please input the amount you have spent");
  return z;
}

while (menuChoice !== "5") {
    menuChoice = prompt(
    "Please type in your choice: 1 for bank balance, 2 for withdrawal, 3 for spending balance, 4 for spent amount, 5 for end banking"
  );
  if (menuChoice === "1") {
    bankBalance = accountBalance();
    console.log(`your balance is $${bankBalance}`);
  } else if (menuChoice === "2") {
    let withdrawal = withdrawnAmount();
    balance = balance - withdrawal;
    spendB = spendB + withdrawal;
    console.log(`your withdrawn amount is $${withdrawal}`);
    console.log(`your spending balance is $${spendB}`);
    console.log(`your bank balance left is $${balance}`);
  } else if (menuChoice === "3") {
    spendingBalance = spendBalance();
    console.log(`your spending balance is $${spendingBalance}`);
  } else if (menuChoice === "4") {
    spentMoney = spentAmount()
    console.log(`you spent $${spentMoney}`);
  }
}
console.log(`Your current bank balance is $${bankBalance}, spending balance is $${spendingBalance}. Thank you for working with us and see you next time!`);
