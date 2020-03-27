This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### React Pokédex Challenge

1. Using create-react-app, or other preferred React boilerplate, create a new React project with a dev server that can be run locally (on http://localhost:3000, for example.)
2. Fetch data from this open source JSON (based on the PokemonGO game): https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
3. Display the list of Pokemon however you like, making sure to show their “name,” “num,” “type,” and “weaknesses.”
4. Make this list searchable via a search box. (External NPM libraries for search are equally as good to use, here, as custom search implementations. Determine what works best for you.)

- For simplicity, just search through the names of the Pokemon, only.

5. Also, make this list filterable via the “type” and “weaknesses” fields.

6. Multiple filters should be able to be applied, and they should narrow the search, instead of expand it. This means that if I choose to filter for type “Grass” and type “Poison,” I should only get Pokemon with both the “Grass” and “Poison” types. This also means that if I choose to filter for type “Fire” and weakness “Ice,” I should only get Pokemon who are both “Fire” type and who have a weakness for “Ice.”

- Note: Any solution to achieve selecting multiple filters is fine. Checkboxes would work. Two dropdown selects would also work, as long as multiple options can be selected within. Or any other solution you can think of or pre-made React component from a library should be fine. You don’t need to win any gold medals in usability or design, here. The main thing I want to see is how you implement the filtering functionality, rather than how well you make it all look or feel.

#### Bonus:

If you have time for it, it’d be nice to see the following implementations. You won’t be negatively assessed if you do not have the next portions. It’s just a chance for us to see more of your code and get a more accurate gauge of your abilities.

7.  Create a generic “Details Page” component for Pokemon, showing a pokemon’s:
   “name”
   “num”
   Rendered “img”
   Make it so the user can actually see the picture, instead of the url
   “type”
   “weaknesses”
   “height”
   “weight”
   “prev_evolution”

#### Bonus:

Provide a link to the Details Page of the other pokemon being referenced
“next_evolution”

#### Bonus:

Provide a link to the Details Page of the other pokemon being referenced

8. Provide a link or button to a pokemon’s Details Page from their listing in your master list. Also provide a Back button from the Details Page to return to the list.
