# NextHub Search

[![time tracker](https://wakatime.com/badge/github/sergiogomes/react-next-hub-search.svg)](https://wakatime.com/badge/github/sergiogomes/react-next-hub-search)

An app that re-implements a portion of **GitHub's Search feature**, the user search, using their public API.
The app should NOT require users of the application to provide GitHub permissions.
Use <https://github.com/search> as a reference for functionality, but feel free to change style, behavior, and features as
you see fit and time permitting.

As a user,

- I can search for users and see a paginated list of results
- I can navigate through the next and previous pages of the paginated results
- I see the total count of search results
- I see notable information for each search result, such as the description, star/follower count, profile pictures, etc.
- I can select a search result and be taken to the applicable page on github.com API

The app should utilize GitHub's public API

## Commands

Creation

```sh
npx create-next-app react-next-hub-search
```

Running

```sh
npm run dev
```

Packages

```sh
npm install --save-dev @babel/core
npm install --save-dev jest
npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json
npm install --save-dev babel-jest
```

## Bootstrap

BootstrapCDN for styling at <https://getbootstrap.com/docs/4.5/getting-started/introduction/>

## Jest

Using Jest for testing.
Configuration Documentation: <https://jestjs.io/docs/configuration.html>
