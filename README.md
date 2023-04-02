# Mango Data API Repository

This repository contains the API for the Mango Data project. The API is built with Node.js and Express, and it's hosted on Heroku. The API is designed to serve data from the Mango Data database to clients without a frontend in this repository.

## Getting Started

Follow these steps to set up the development environment:

1. Install [Node.js](https://nodejs.org/en/download/) if you haven't already.
2. Clone the repository: `git clone https://github.com/your-username/mango-data-api.git`
3. Navigate to the project directory: `cd mango-data-api`
4. Install the required dependencies using npm: `npm install`

## Running the API Locally

To run the API locally, use the following command: npm start:dev - this will run the server and apply the noedmon listener as you make changes.


This will start the Express server on a predefined port (e.g., 3000). You can access the API endpoints via `http://localhost:3000`.

## Development Workflow

1. **Work in feature branches**: Create a new branch for each feature or bug fix. This helps keep your work organized and makes it easier to integrate changes with the main branch.

2. **Commit and push changes**: Commit your changes regularly and push them to your feature branch on GitHub:

3. **Create a pull request**: When your feature or bug fix is complete, create a pull request on GitHub to merge your changes into the main branch. This allows other team members to review your code and provide feedback before it's merged.

4. **Merge and deploy**: Once your changes are approved, merge the pull request into the main branch. The Heroku pipeline will automatically deploy your changes to the appropriate environment.

## Testing

Write tests for your API endpoints using a testing library like [Jest](https://jestjs.io/) or [Mocha](https://mochajs.org/). To run tests, use the following command: npm test


Make sure to write tests for new features and update existing tests when modifying the API.

## Environment Variables

Store sensitive information, such as API keys and database credentials, in environment variables. Use the [dotenv](https://www.npmjs.com/package/dotenv) package to load environment variables from a `.env` file in your local development environment. **Do not** commit the `.env` file to the repository.

Configure the Heroku environment variables through the Heroku Dashboard or Heroku CLI.

## Documentation

Document your API endpoints using a tool like [Swagger](https://swagger.io/) or [Postman](https://www.postman.com/). Share the documentation with your team to ensure everyone is familiar with the API's functionality.

Feel free to contribute and improve this README as the project evolves.



