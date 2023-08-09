# **VanCity Property Pulse**

## **Project Description**
VanCity Property Pulse is a web application that allows potential home buyers to search, view details, and save listings for properties for sale in Vancouver. The app features a search interface to filter listings by criteria like price and location, displays property details like price and amenities, and lets them save favourite listings. The goal is to provide an easy way to find and compare properties on the market in Vancouver.
<br><br>

## **Project Task Requirements**

### Minimal Requirements
✅ **1. Display a list of properties**
- As a potential home buyer, I want to see a list of properties with basic information like address, price, number of bedrooms, etc. so that I can get a quick overview of available listings in Vancouver.

✅ **2. Display property's detailed information such as price and location**
- As a potential home buyer, I want to click on a property and see all details like description, photos, map location, etc so I can determine if it meets my criteria.

✅ **3. Implement user interface for searching and filtering through listings**
- As a potential home buyer, I want to search listings by location, number of bedrooms, price range etc. so I can narrow down the listings to those matching my criteria.
<br><br>

### Standard Requirements 

✅ **1. Implement a feature for users to save their favorite properties**
- As a potential home buyer, I want the ability to favorite and unfavorite properties by clicking a button and view my favorited listings in a separate section so that I can easily track and access properties I'm interested in.
    
✅ **2. Incorporate a user authentication system**
- As a potential home buyer, I want to easily log in and out of my account so I can keep it personalized.
    
✅ **3. Provide users with the nearby properties of the selected property**
- As a potential home buyer, I want to view nearby listings of a selected property so I can see other available options near that location.
    
✅ **4. Provide users with the nearby properties of their location**
- As a potential home buyer, I want to get the list of properties nearby my location based on my profile setting so that I can have a better judgment on the vicinity.
    
✅ **5. Implement a feature for users to compare properties' attributes such as price, the number of bedrooms/bathrooms, etc**
- As a potential home buyer, I want to be able to compare the prices, number of bedrooms, number of bathrooms, square footage, and other attributes of different properties so that I can easily see which homes match my criteria and preferences.

✅ **6. Share properties through Social Network Sites** 
- As a potential home buyer, I want to be able to share property information that I am interested in with my friends so that I can make informed decisions on my target property and get more involvement from my friends.
<br><br>

### Stretch Requirements ### 
✅ **1. Implement an interactive Chatbot to allow users to quickly navigate to appropriate pages and content through an intuitive conversational interface**
- As a home buyer, I want to interact with a chatbot that asks me qualifying questions and provides custom links so that I can easily find relevant information.

✅ **2. Integrate with a map API to display a property's location on a map**
- As a home buyer, I want to be able to compare the prices, number of bedrooms, number of bathrooms, square footage, and other attributes of different properties so that I can easily see which homes match my criteria and preferences.

⚠️ **3. Visualize properties' locations on a single map**
- As a home buyer, I want to view listed properties plotted on an interactive map so that I can easily see where each home is located relative to amenities, landmarks, and boundaries.
<br>** progress: building on coordinators of properties(latitude, longitude) to be rendered, need to communicate with the listing API.

✅ **4. Compare prices of properties in the selected area**
- As a home buyer, I want to view and compare the listing prices of properties in my desired neighborhoods so I can understand the market and price ranges in those areas.

⚠️ **5. Walk And Distance Score**
- As a home buyer, I want to see walk scores and distance to amenities like schools, parks, and shopping for properties I'm considering so that I can evaluate accessibility and convenience when making a decision.
<br>** progress: cross-site iframe issue on the deployed application.
 
❌ **6. Implement AI Chatbot with NLP model to interact with users in natural language**
- As a home buyer, I want to interact with a smart chatbot that understands natural language so I can get customized assistance through intuitive conversational exchanges.
<br>** progress: accumulating training data for NLP models to allow algorithms to meet the requirements.
<br><br>

**Task Breakdown:**
1. Display a list of properties
    - Set up a React.js application for the client-side interface
    - Create a mock date for a list of properties
    - Create a component that contains a list of properties
    - Create a component that contains a single property as a child component of the listing component
2.  Display property's detailed information such as price and location
    - Set up a React.js application for the client-side interface
    - Get selected property id (pid) from URL ( /properties/:pid ) to retrieve property information 
    - Display property information such as address, price, and image(s)
3. Implement user interface for searching and filtering through listings.
    - Set up a React.js application for the client-side interface.
    - Implement a listings page with a table or list of properties.
    - Add search and filter options for users to refine listings.
    - Pass the search and filter options to the listing component 
    - Re-render the listing page at option submit 
<br><br>

## CPSC 455 Technology Usage

**[UNIT 1] HTML, CSS, JS**
- HTML was used as the backbone of the React (jsx) structure, incorporating attributes, event listeners, images, and iframes to define the fundamental layout. Styled-components was implemented to enhance the CSS functionality, providing with better styling isolation of React components and cleaner code structures. JavaScript was leveraged to infuse the application with dynamic features, responsiveness, and asynchronous functionality.

**[UNIT 2] React & Redux**
- React, in conjunction with redux and selectors, was employed to handle both the state and UI of our application. Redux facilitates the creation of asynchronous actions and API communication, while state elements are preserved and chosen through the use of redux slices and selectors. Additionally, Redux Persist was employed to ensure consistent state management, even across browser sessions.

**[UNIT 3] Node & Express**
- We employed Express as the backbone of our backend framework, responsible for the intricate task of managing routes, handling requests and responses, and seamlessly integrating with various custom and predefined middleware functions. Building upon this foundation, we implemented RESTful APIs through Node.js, further refining our backend operations. API calls were directed to services operated by Node.js, and we introduced social login functionality using OAuth2.0, facilitated through JWT and bcrypt. Additionally, we've configured CORS to adeptly manage cross-origin requests, ensuring compatibility and security across different domains.

**[UNIT 4] MongoDB**
- Our application’s data persistence capabilities were significantly enhanced through the use of MongoDB, a non-relational database system. Together with Mongoose, an Object Document Mapper (ODM), we mapped and structured the data, allowing us to effectively store and manage various information such as user profiles, as well as property and location information.

**[UNIT 5] Builds and Deployment**
- We deployed our application on Oracle Cloud Infrastructure, provisioned a Ubuntu Virtual Machine instance to host our website. We configured it with nginx for port management (reverse proxy) and PM2 for Node.js process management. In addition, we incorporated the GitHub Action Workflow for automated frontend tests through Playwright.
<br><br>

## Above and Beyond
1. Oracle Cloud was selected over render.com after careful consideration of our specific needs and priorities. Oracle Cloud offered a more comprehensive suite of services, including advanced security measures, scalable resources, and robust support for various development environments. While render.com provides a straightforward and agile deployment process, we found that Oracle Cloud's broader range of functionalities aligned more closely with our goals for responsiveness and security. The decision to use Oracle Cloud also stemmed from its proven reliability, cost effectiveness, and flexibility in configuration, all of which were vital in our pursuit of building a responsive and secure website.
2. To augment observability and monitoring across our deployed instances, we integrated DataDog tracer into our VM instance. This powerful tool offers real-time server performance insights, alerting us if any abnormal latencies occur. It also helps in identifying errors and ensures that the synthetic testing confirms the site's accessibility and proper functioning across various platforms, devices, and geographic locations. By combining these tools and services, we've created a robust, secure, and efficient infrastructure tailored to our specific needs.
3. Our domain name was registered and managed by Cloudflare, which allowed us to use the same domain for the client and the server; their CDN service was instrumental in bolstering our application's scalability and security. To enhance the website's security in line with Google Auth's standards, we utilized CertBot to issue our SSL certificates, with an auto-renewal feature every 90 days, and integrated GitHub Actions for vulnerability scanning with CodeQL.
<br><br>

## Next Steps
- To provide walk scores and distances to local facilities, we plan to resolve the current cross-site frame issues using Cross-Origin Resource Sharing (CORS) policies and third-party distance measurement APIs. Our goal of implementing a smart AI chatbot with Natural Language Processing (NLP) needs to be progressed by accumulating more real estate dialogues for training, or potentially utilizing pre-trained models like GPT-4. These efforts align with our commitment to enhance the application's interactivity, accessibility, and intelligent user interaction.
<br><br>

## Contributions
### **Jieun Kim**
Jieun was a key figure in the project, driving the initial brainstorming and setting up the frontend and backend. She developed a significant portion of the project, including property details, API flow, and database connections, while also deploying the app and assisting the team. Her technical proficiency, leadership, and collaborative nature were evident in her balanced skill set and support for other team members.
<br><br>
### **Chohyeon (Elly) Kim**
Elly played a hands-on role in the project's various stages, working on frontend tasks like the navigation bar, Search Input/Filter, and integrating features like MapBox and SNS sharing. She also improved the detailed page with added functionality and dedicatedly fixed bugs and enhanced the user interface. Her work on core functions and styling greatly improved the project's overall quality.
<br><br>
### **Ji Young Kim**
Ji Young's technical contributions include implementing the User Profile page, working on both the client and the server sides to connect the user page. In addition to enhancing the User Profile page, Ji Young introduced features like Google Auth login and pagination; she also implemented the interactive Chat Bot through Microsoft Power Platform.
<br><br>
### **Chao Zhao**
Chao contributed to the team's project through a balanced blend of organizational tasks and hands-on technical development. Initially, he researched for potential APIs and data sources, and throughout the project, Chao's practical skills shone in the implementation of the functionality of comparing the properties, among others. Notably, his expertise played a crucial role in overcoming deployment challenges, leading to the successful deployment of the website, reflecting his knack for practical and timely solutions.
<br><br>
### **Christina Su**
Christina's contributions to design mock-ups and feedback on visual aspects showcased her attention to detail. Throughout various iterations, she worked on key components such as the Detailed Page and enhancing the Compare page for easier property comparisons. Additionally, she contributed to the team by crafting meeting minutes and creating PowerPoint slides for our presentations.
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
<br><br>

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
