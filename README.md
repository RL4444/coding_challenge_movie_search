# Movie Search App

---

**Summary**

This project will use React Create App with Typescript and display a list of movies that match a users search term. The user will only have to type to see his results, making the UX more responsive. Each movie found in the list will redirect the user to IMDB's page for that Movie on being clicked.

The Api requests are limited via a setTimeout in the handleChange method of App.tsx. Despite this, the Spinner will show so long as there is text within the searchbar && awaiting the user to stop typing. This is so a user will not feel like the page is unresponsive, even though the api will not be called until the user stops typing. This is also to prevent abusing the OMDB api with unnecessary requests and the user's bandwidth.

---

**To initialize this project and its dependencies**

Run `yarn` in the root of the terminal to download dependencies.

After installing use `yarn start` at the root of the project in the terminal to open the expose the app on `http://localhost:3000`

---

**To use the OMBD Api**

Register as a user at http://www.omdbapi.com/, or use a key previously given.

Create a `.env` file in the root of the project directory as per the `.example.env `

Add your api key. Without the api key the project will not run.

---

**To Run E2E Tests**

End to end tests are ran using cypress - https://cypress.io

From your terminal window in the root of the project directory run `yarn cypress` && in a separate terminal window run in the root of the directory `yarn start` -- cypress only works while the server is running

This should open the cypress app window that will show a testing file called `App-test.spec.js`, which is also found in `./cypress/integration/App-test.spec.js`. Edit this file to add or remove more tests. 

Click on the file `App-test.spec.js` in the cypress app window to begin running tests.
