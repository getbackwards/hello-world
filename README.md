# Front End Developer assessment

To install this project clone the repo:

`git clone https://github.com/getbackwards/hello-world.git`

The project uses [yarn](https://classic.yarnpkg.com/en/docs/install/) as a package manager, you will need to install it if you do not have it.
See the end of this `README` for availble scripts.

---

## HTML/CSS knowledge check

In a file named `​README.md​`, ​ please **​give a brief description of the Box Model​** in your own words. Feel free to illustrate with examples from your experience.

_The box model is a set of rules that affects how HTML elements are laid out on screen. It mostly concerns the way block and inline level elements interact with each other and whether properties such as border and padding are added to or are contained within the dimensions of an element._

---

## JS exercise

```javascript
const sales = [
  { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
  {
    itemSold: 'Trainers',
    price: 159.95,
    dateSold: '2018-03-02',
    id: 't_acds1',
  },
  {
    itemSold: 'Cricket bat',
    price: 204.97,
    dateSold: '2018-04-05',
    id: 'j_456',
  },
  {
    itemSold: 'Rugby ball',
    price: 30.0,
    dateSold: '2017-04-22',
    id: 't_acds3',
  },
  {
    itemSold: 'Hockey stick',
    price: 54.95,
    dateSold: '2017-03-19',
    id: 'j_999',
  },
];
```

Using the above object, complete the following tasks in the same ​README.md​ file as the CSS/HTML
questions:

1. Return the sum of the price of all properties as a single value.

```javascript
const roundAccurately = (number, decimalPlaces) =>
  Number(Math.round(number + 'e' + decimalPlaces) + 'e-' + decimalPlaces);

const priceTotal = sales.reduce(function (prev, cur) {
  return prev + cur.price;
}, 0);

console.log('Sum of all price values is: $' + roundAccurately(priceTotal, 2)); // Sum of all prices: 469.86
```

2. Return the items which were sold in 2017.

```javascript
const searchYears = (text) =>
  sales.filter(({ dateSold }) => dateSold.includes(text));

const yearsSearched = searchYears('2017');

for (let i = 0; i < yearsSearched.length; i++) {
  console.log(yearsSearched[i].itemSold);
}
```

3. Return an array of all of the itemsSold properties as strings, sorted alphabetically

```javascript
const itemsSoldPropsSorted = sales.map((a) => a.itemSold).sort();

console.log(`itemSold properties are: ${itemsSoldPropsSorted.join(', ')}`);
```

4. Using id as an argument, return the sale which matches the id.

```javascript
function searchSales(id) {
  for (let i = 0; i < sales.length; i++) {
    if (sales[i].id === id) {
      return sales[i];
    }
  }
}

console.log(`Searched sale details: ${JSON.stringify(searchSales('j_999'))}`);
```

---

## Replicate layout

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
