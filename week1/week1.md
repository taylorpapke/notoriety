HTML, CSS and JS refresher
How to run the code:

Open the browser of your choice
Open index.html
Observe
Week 1 Assignment

Part 1 - Modifying elements with Javascript

It is important that we understand how JavaScript works in the browser. To complete this assignment, make the following changes.

In main.css add a class with a different background color.
In button.js complete the function changeColor with code that will switch the class of the div element that getElementById returns.
Part 2 - Making network requests

We also need to understand how code running in the browser can communicate with services and APIs. To do this, we'll make a call to an open API and update the site we're developing.

Sign up for an account with Rapid API and follow the instructions here to get a key for the Words API.
Use the Random api endpoint to get a random word. In the replaceWord function add your api key and host values to the request headers.
Complete the handler function indicated by the comment in code. The callback that runs after the network call completes will print out the response to the console. Use the developer tools on your browser to observe that raw response
The response.json() call will convert the network response to a JavaScript object. Use that object to popuplate the span element in index.html with the id 'wordable'