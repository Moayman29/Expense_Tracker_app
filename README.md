
# Expense Tracker App

An app to track and monitor expenses and income. 


## Main App Components

The app is composed of four different screens:
 - Overview
 - Report 
 - Budget 
 - New transaction
 
## Instructions to use

### Overview screen

The home page of the app is the overview page. 
It consists of three sectors: 
- First there is balance details displaying total expenses, total income and total balance.
- At the bottom there is a table displaying transactions and their date, category, amount and payment method from left to right respectively. 
- Between these sectors there is a section with input fields that allow the user to filter the table of transactions by date, category, amount or payment method.

There is a navbar at the top of the page that is fixed with all pages it has three links for each page except **New Transaction** page. 

At the bottom right part of the screen there is a floating button with the label "*Add New Transaction*", when this button is clicked it opens the **New Transaction** page. 

### New Transaction screen 

This screen lets the user create a new transaction. It has two buttons at the upper section so that the user can choose between adding an expense or an income transaction. 

By default when the page is loaded a form for adding a new expense transaction is displayed at the lower section of the page. In order to add a new income transaction the user should click the income button at the upper right section and income form will be displayed at the lower section of the page. 

Each form of the two types consists of four input fields: 

- **Amount:** enables the user to enter the amount for the transaction to be created. 
- **Category:** allows the user to choose between a set of categories specified for each type. 
- **Payment Method:** enables the user to choose the payment method that this transaction was done by.
- **Date:** enables the user to choose a date for the transaction, that must not be in future.

### Report screen 

This screen is responsible for displaying a report for each of expenses and income. It has two buttons at the upper section so that the user can choose between displaying expenses or income report. 

By default when the page is loaded a report for expenses is displayed at the lower section of the page. In order to display income report the user should click the income button at the upper right section and income report will be displayed at the lower section of the page. 

Each report for the two types consists of two parts: 

- At the right part there is a doughnut chart displaying each category and its total amount. 
- At the left part there are three list-tiles displaying the top three categories of the chosen type (expense/income) in a decending order according to their amount. 

### Budget screen 

This screen enables the user to set a budget for a specific category to track their expenses for a period of time. It has a single button at the right of the upper section with the label "*Add New Budget*", upon clicking that button it displays a dialog with a form for creating a new budget. 

This form consists of five input fields: 

- **Budget Name:** enables the user to set a name for the budget with maximum twenty characters. 
- **Amount:** enables the user to enter the amount for the budget to be created.
- **Budget For:** enables the user to choose an expense category for the budget to be created. 
- **Date From:** enables the user to set a starting date for the period of time of that budget. 
- **Date To:** enables the user to set an end date for the period of time of that budget that is not later than the starting date.

Upon submitting the form a new budget is created and added to the lower section of the page which is responsible for displaying all the budgets created by the user in a list-tiles manner. 

Each budget-tile displays from left to right respectively:
- **Budget name**
- **Budget amount**
- **Budget for(category)**
- A number in percentage showing how much of the budget has been spent in comparison to the amount set by the user within range from 0 to 100% with its background color changing according to the percentage (0-69%:green, 70-89:yellow, 90-99:red & 100: dark red). 
- A button with label "*Delete*" that enables the user from deleting that budget.
at the bottom of the tile there is a progress bar displaying the percentage of the amount spent in comparison to the amount set.