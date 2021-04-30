# Pinterest-ish

You've heard of Pinterest, but now you can experience Pinterest-ish! This knock-off version of the ubiquitous social media site allows you to find all the same inspiration in creating vision boards that the original does!

## Requirements
* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* SASS and Bootstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD


### Part 1: ERDs and Authentication
* Create an ERD for pinterest (do this in studygroup)
* Clone this repo
* Create a setup branch
* Do all the stuff needed when setting up the project. Reference the webpack instructions if needed. These include making the updates to the `.env` file
  * Create a new firebase project, database, and enable google authentication, etc.
* Create an authentication branch and add a navbar with logout button, and place the google login button somewhere for you to test
  * **Note: There are components that you can use to get started and style later. We just want you to get your auth setup by yourself.**
* When your user is **logged out** they should see the navbar with only a brand.  And an h1 on the page that says PINTEREST (make a `home` component for this)
* When your user is logged in they should see a navbar with a brand and a logout button and an H1 on the page that says Boards (make a `boards` component for this)


#### User Stories
* When the user logs in, they can see all the boards that belong to the user.

* When the user clicks on a board, they will see a single board view that shows all pins for that board.

* The user can then switch back to see all their boards from the single board view.

* The user can delete a pin from one of the user's boards.

* The user can delete one of the user's boards.

* The user can delete one of the user's boards and all pins on that board will be deleted as well.

* The user can create a new pin.

* The user can create a new board.

* The user can change which board a pin belongs to.


