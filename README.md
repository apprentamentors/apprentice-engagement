## Apprentice Engagement Dashboard

Welcome guys!

### Running the App Locally
1. Set the slack API token in a `.env` file (ask me for the token)
2. `yarn install` - install dependencies (if you don't have yarn, `npm install -g yarn`)
3. `yarn start` - this starts the development server on port 3000. Nodemon for automatic restarts on server changes, hot reloading in the browser

### Deploying the App
1. Right now we're set up for a heroku-based deployment - check out the `Procfile` to see what is invoked
2. Add the heroku remote - `git remote add heroku https://git.heroku.com/apprentice-engagement.git`
3. Log into heroku - `heroku login`
    - We should create a Heroku account we all have access to, currently it's on my account so you'd login with my login details (I can share)
4. Deploy the app - `git push heroku master`
5. App will be live on [the web](http://apprentice-engagement.herokuapp.com/).

### Developing
This app uses Express.js as a server framework, with React bootstrapped by [Create React App](https://github.com/facebookincubator/create-react-app) on the frontend.

#### The server (`server/` directory)
* `apis/` - all the different API libraries and an interface for working with them - you'll see `slack.js` here already
    - Future API thoughts, Trello, Github, maybe more?
* `bin/` - contains the binary for running the server, shouldn't need to do much work in here
* `config/` - contains some hardcoded data the app might need to know about. Right now, we list the apprentice usernames in here
* `public/` - statically served files, images, etc. Shouldn't need to write JS/CSS manually, do that in `client/`
* `routes/` - route handlers, right now there's only one (`/`). I'd imagine this is going to become a fat route handler, where we collect all the data we want to know about apprentices, and then use all that data to bootstrap our react app.
* `views/`  - server side views: since we have React on the frontend, each view should really only contain asset tags (`script`, `link`, etc.) and a mount point (my personal convention is the mount point `#content`)
* `app.js` - the server's entry point - we can register route handlers, global configuration, and server middleware here


#### The client (`client/` directory)
You'll notice this is essentially its own app, with its own `package.json`. Not to be concerned, the top-level `package.json` handles the inner app as well.

* `config/` - config for testing (CRA comes with [Jest](https://github.com/facebook/jest)) and webpack configurations. I don't imagine we'll need to work much in here, unless we want to supercharge Webpack.
* `public/` - the assets generated by Webpack. These will be served by Webpack automatically during development.
* `scripts/` - Scripts to run, build, and test the app. These come with CRA, and work pretty well as is.
* `src/` - the good stuff! Where all of our actual application code lives. `src/index.js` in the app's entry point, and `src/app/` contains all the React Components and whatnot./





