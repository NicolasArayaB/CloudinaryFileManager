# WebApp boilerplate with React JS

### Styles
As simple as I could, using React-Bootstrap for basic structure.

### Components
On `./src/js/components` you can find Login, Register, Upload, Uploaded and scrolToTop components.

💡Note: There is an example using the Context API inside `views/demo.js`;

### Pages (Components)
On `./src/js/pages` you can find a Home page, where Login or Register components are render and a Files page, where Upload and Uploaded components are render. Both views are imported from `./src/js/layout.jsx` where React-Router manage them.

### Context
This app comes with a centralized general Context API. The file `./src/js/store/flux.js` has the structure for the store and the actions to call the API.

React Context [docs](https://reactjs.org/docs/context.html)

You can consume from any component using the useContext hook to get the `store` and `actions` from the Context.

### Database
This app uses PostgresSQL as database engine and use SQLAlchemy toolkit. 

### Manual Installation:

1. Make sure you have Python 3.8, Pipenv and a database engine PostgreSQL
2. You have to create a DATABASE_URL variable,  make sure you replace the values with your database information:
| postgres://username:password@localhost:5432/example

3. Migrate the migrations: `$ pipenv run migrate`
4. Run the migrations: `$ pipenv run upgrade`
5. Run the application: `$ pipenv run start`
6. Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.
7. Run the application: `$ npm start`


