# Savings

## Purpose
I wanted a way to visualise on what and how much we're spending during the month and get an up to date reminder of how much money we've saved.

## MVP Features
- See visual feedback of money saved
- See visual feedback of money spent
- Add a transaction (in or out) and specify a reason
- See list of transactions
- Edit or delete a transaction

## Post MVP features
- Have multiple accounts
- See previous month's details
- Input budget details and see what you're overspending on

## Tech stack
- React Native
- Redux
- Firebase

-----------------------
### App state
```js
{
  "account": {
    // Income for the month
    "budget": 6600,

    "currentMonth": {
      "monthName": "August",
      "amountSaved": 1000, // computed from 'save' transactions
      "amountSpent": 650,  // computed from 'spend' transactions
      
      "transactions": {
        "ahsdgf87678": {
          "type": "spend",
          "reason": "Groceries",
          "amount": 150.95
        },
        "987tihfgkjh": {
          "type": "spend",
          "reason": "Take out",
          "amount": 32.56
        },
        "8734ytkjwg8": {
          "type": "save",
          "reason": "Take out",
          "amount": 32.56
        },
      }
    }
  }
}
```
