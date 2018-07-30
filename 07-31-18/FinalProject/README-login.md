# Login Page

A page with one purpose; allow the user to enter in an email address and a password. If the data is invalid, let the user know what information was incorrect so they can try again.

# Basic Technical Goals
* HTML
  * Use a Bootstrap `card` element that is centered on the page to display all of your form elements.
  * Include a fun logo right above your login form
  * Your form could include 2 `<input>`s, one with `type=email` and one with `type=password`
    * The bootstrap docs have a nice template you [can copy](https://getbootstrap.com/docs/4.0/components/forms/) from here.
  * There should also be a a `<input>` with the type of button to act as a submit button
* Under the `card` create another div that is the same width as the card and also centered on the screen. Give this div an id of `errorContainer`. When the login attempt fails, we'll put the error message here.

* JS
  * You may use vanilla Javascript or jQuery for the section. No preference is given
  * If a user is logged in, this page should change the `location.href` to the library page.
  * Immediately in your javascript, save variables that are references to 4 elements:
    1. email field
    2. password field
    3. submit button
    4. errors container div
  * At the very top of your javascript file add the following code snipped:
    ```javascript
        const USERS = [
          {email: "steveg@example.com", 
           password: "PaSsWoRd", 
           birthday: "2000-09-30 00:00:00",
           role: "basic"},
          {email: "hanneM@example.com", 
           password: "hanneRules!", 
           birthday: "1980-04-15 00:00:00",
           role: "basic"},
          {email: "lindaG@example.com", 
           password: "lg014589", 
           birthday: "2012-01-03 00:00:00",
           role: "admin"},
          {email: "nEsposito@example.it", 
           password: "pswd1234", 
           birthday: "1975-03-23 00:00:00",
           role: "advanced"},
          {email: "draganP@example.hr", 
           password: "volimbaku", 
           birthday: "1995-06-06 00:00:00",
           role: "advanced"}]
    ```
    these are the users you'll be using to see if someone entered an email and password correctly.
  * Add a click listener to the submit button that will fire a function called `login()`
  * The login function should see if a user with the entered email (case insensitive) exists in the the `USERS` constant. If a user with that e-mail exists then check to see if the case sensitive password matches the one for that user.
  * After checking both email and password, if there are errors, add an error with appropriate styling to the `#errorContainer` div. If there are no errors, then redirect to the `library.html` page and save the logged in user in `localStorage`
  * Remove the text from both the email and password fields on a bad login attempt