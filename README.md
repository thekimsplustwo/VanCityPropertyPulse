# **VanCity Property Pulse**

## **Project Description**

Our project is aimed at potential homebuyers, real estate investors, and market enthusiasts in the Vancouver area. Our platform will support the activity of tracking real estate listings and price trends within the Vancouver housing market. We plan to store data on real estate listings including properties' addresses, asking prices, selling prices, number of rooms, square footage, etc. Users will be able to search and filter through these listings based on their preferences, save their favorite properties, receive alerts for price changes, and visualize housing price trends via various charts or graphs. Should time permit, we also hope to incorporate a feature predicting future housing price trends and integrate with a map API for a more interactive user experience.
<br><br>

## **Project Task Requirements**

**Minimal Requirements:**
1. Collect and store real estate listing data.
2. Implement user interface for searching and filtering through listings.
3. Display basic property details such as price and location.
<br><br>

**Standard Requirements:**
1. Implement a feature for users to save favorite properties.
2. Display housing price trends over time.
3. Provide alerts for price changes.
4. Incorporate a user authentication system.
<br><br>

**Stretch Requirements:**
1. Predict future housing price trends using machine learning algorithms.
2. Integrate with a map API to display properties on a map.
<br><br>

**Task Breakdown:**
1. Collect and store real estate listing data.
    - Set up a MongoDB database for storing listing data.
    - Use Node.js and Express.js to scrape or consume data from a real estate API.
    - Schedule regular data updates.
2. Implement user interface for searching and filtering through listings.
    - Set up a React.js application for the client-side interface.
    - Implement a listings page with a table or list of properties.
    - Add search and filter options for users to refine listings.
<br><br>

## **Prototypes**
![Main](https://storage.googleapis.com/pukkukim/455%20Main.png)
![Geolocation](https://storage.googleapis.com/pukkukim/455%20Geolocation.png)
![Item](https://storage.googleapis.com/pukkukim/455%20Item.png)


### :gear: Development Workflow


#### Getting Started
* Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed
* Clone this repo to your local machine.
* `npm install` from the ./server folder, to get the dependencies for the server.
* `npm install` from `./client` folder, to get the dependencies for the client.
* Spawn a local node server with `npm run server` and a client with `npm run client`
* `npm start`to run both the server and the client concurrently.
* We use port 3000 for the client and 10010 for the server. If you assign these ports to other apps, change the port.


#### Setting up React App



#### Setting up the Mongo DB



#### Making Changes
1. Create a new feature branch off of the `main` branch and name it with the number of the Issue you'll be working on (e.g. `ISSUE-01`).
2. Make changes and commit your changes to your feature branch with [Conventional Commit Messages](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13) 
3. Once you're satisfied that your changes address the ticket, open a new pull request for your feature branch with the corresponding Issue ticket number and title as the PR title (e.g. ISSUE-61: Implement POST/api/v1/payments) 
4. Fill out [PR template](https://github.com/czhaoca/TheKimsPlusTwo/blob/main/.github/PULL_REQUEST_TEMPLATE.md) when you post a PR
5. Resolve all merge conflicts as needed.
6. Assign other team members to review your PR and be open and available to address feedback.
7. Comment the PR link in the ISSUE ticket.
8. After approval from the reviewer, confirm the PR and merge your feature branch into the `main` branch.
9. While merging your feature branch, always use `squash and merge`.
9. Confirm that your changes are reflected in the `main` branch, and then delete your feature branch.

#### Little Things to Note
1. Follow [Conventional Commit Messages](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13) 
2. Use ISSUE number as branch name. (Ex. ISSUE-61)
3. Use ISSUE number + title as a PR title (Ex. SNAK-61-Implement POST/api/v1/payments)
4. Fill out [PR template](https://github.com/czhaoca/TheKimsPlusTwo/blob/main/.github/PULL_REQUEST_TEMPLATE.md) when you post a PR

#### Branches
| Branch | Description |
|--------|-------------|
| `main` | anything & everything |
| `TICKET-NUMBER` | feature, user story, bugs, fixes (e.g. `ISSUE-50`) |
