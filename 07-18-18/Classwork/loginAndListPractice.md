## Back to some basics here. We're going to be using two different .js files, two different .html files and one .css file.


###  First html and js files: The login page

So what we're going to do is fairly straight forward. We're going to make a login page with a username and password field. 

* The page should utilize bootstrap for styling
* Have a logo at the top of a login page
* Have labels for each of the input fields
* Have a submit button at the bottom of the field.
* When the submit button is clicked the following should happen:
    1. Verify that the username and password are the same as a variable you create in a .js file.
    2. If the password or username do not match, tell the user that with an error message on the dom.
    3. If they do match, send them to the second page, the list page.

### Second Pages: The informational view

This is the page that is going to list all of the todos for all of the different users. In order to do that we'll need to do the following:

1. Once the document has loaded, pull all the users from [JSON Placeholder](https://jsonplaceholder.typicode.com/users). We did this the other day, but try to do it from scratch.
2. Pull all of the todos from [JSON Placeholder](https://jsonplaceholder.typicode.com/todos) and assign those to a variable. These should be stored but not renderes at the moment.
3. Render all of the users to the page in an easy to read format whether it be a table, or in separate divs or just as links.
    * Each user section should have a button or other element that can be clicked that will show all the todos for that specific user.
4. Attach an event listener to each of the users clickable sections to allow them to view all todos belonging to that user. 
5. Filter the entire array of todos so that only those belonging to the user clicked are visible. 
6. Render those elements to the DOM in a visually clear way.


### Final Thoughts
1. Take a look at everything that would need to be changed for this to be a fully functional production site. 
2. Celebrate your success :boom::fireworks::tada:
