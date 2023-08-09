# **VanCity Property Pulse**

## **Project Description**
VanCity Property Pulse is a web application that allows users to search, view details, and save listings for properties for sale in Vancouver. The app features a search interface to filter listings by criteria like price and location, displays property details like price and amenities, and lets users save favourite listings. The goal is to provide an easy way to find and compare properties on the market in Vancouver.
<br><br>

## **Project Task Requirements**

**Minimal Requirements:**
<br><br>
✅ 1. Display a list of properties. 
  - As a user, I want to see a list of properties with basic information like address, price, number of bedrooms, etc. so that I can get a quick overview of available listings in Vancouver.

✅ 2. Display property's detailed information such as price and location.
  - As a user, I want to click on a property and see all details like description, photos, map location, etc so I can determine if it meets my criteria.

✅ 3. Implement user interface for searching and filtering through listings.
  - As a user, I want to search listings by location, number of bedrooms, price range etc. so I can narrow down the listings to those matching my criteria.

<br><br>

**Standard Requirements:**

✅ 1. Implement a feature for users to save their favorite properties.
  - As a user, I want the ability to favorite and unfavorite properties by clicking a button and view my favorited listings in a separate section so that I can easily track and access properties I'm interested in.
✅ 2. Incorporate a user authentication system.
  - As a user, I want to easily log in and out of my account so I can keep it personalized.
✅ 3. Provide users with the nearby properties of the selected property.
  - As a user, I want to click a button on a property to view nearby listings so I can see other available options near that location.
✅ 4. Provide users with the nearby properties of their location.
  - As a user, I  
<br><br>

**Stretch Requirements:**
1. Integrate with a map API to display a property's location on a map.
2. User can compare properties' attributes such as price, the number of bedrooms/bathrooms, etc.
3. Walk And Distance Score
<br><br>

**Task Breakdown:**
1. Display a list of properties
    - Set up a React.js application for the client-side interface
    - Create a mock date for a list of properties
    - Create a component that contains a list of properties
    - Create a component that contains a single property as a child component of the listing component
<br><br>
2.  Display property's detailed information such as price and location
    - Set up a React.js application for the client-side interface
    - Get selected property id (pid) from URL ( /properties/:pid ) to retrieve property information 
    - Display property information such as address, price, and image(s)
<br><br>
3. Implement user interface for searching and filtering through listings.
    - Set up a React.js application for the client-side interface.
    - Implement a listings page with a table or list of properties.
    - Add search and filter options for users to refine listings.
    - Pass the search and filter options to the listing component 
    - Re-render the listing page at option submit 
<br><br>


## **Prototypes**
![Main](https://storage.googleapis.com/pukkukim/455%20Main.png)
![Geolocation](https://storage.googleapis.com/pukkukim/455%20Geolocation.png)
![Item](https://storage.googleapis.com/pukkukim/455%20Item.png)


### :gear: Development Workflow


#### Getting Started
* Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed
* Clone this repo to your local machine.
* `npm install` from the `./server` folder, to get the dependencies for the server.
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
