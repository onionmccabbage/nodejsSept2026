### Exercise 3

1 hr (until 4:10 inc 15 minute tea break)

* Consume a REST API and show the results, including parameters
* Optionally write tests, inspect the code (debug)
* Optionally use Express (see docs)
* Use any architecture
* Show-and-tell

#### Details
There is an API at https://jsonplaceholder.typicode.com for /users /posts /photos and /todos

For example, get all the posts for a given user, or all the photos for a given album

Write an app to consume any of these

Clearly this is the same as consuming SWAPI, so by all means add these features to your prev project, or else a nrw project

You may choose to explore POST etc. (if that maters to you)

Architecture:
* Aim for modular code, with export and import
* Remember to always handle potential exceptions
* You will be using either Promise.then or else async and await