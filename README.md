# eat-transactions

An amazing web application that shows a way to process a payment regarding the Ethereum blockchain

### How to set everything up (assuming that you have Node installed - Yarn is optional)

- Open your terminal `:)`
- Clone the repository
  - `git clone https://github.com/nelsonsilvadev/eat-transactions.git`
- Enter to the repository directory
  - `cd eat-transactions`
- Install all the dependencies
  - `yarn install` or `npm install`
- Get your Etherscan API Token (optional)
  - [https://etherscan.io/apis](https://etherscan.io/apis)
- Set your token in the `.env` file (optional)
  - `REACT_APP_API_TOKEN=""`
- To start everything up
  - `yarn start` or `npm run start`
- To run the tests
  - `yarn test` or `npm run test`
- Open your browser and feed me some yummy _transactionaly_ goodies
  - [http://localhost:3000/](http://localhost:3000/)

### Random thoughts

- Etherscan API already checks for `0x`, so, the request to get the transaction data by hash works with or without `0x`;
- Not including external requests in unit testing (ex. Not making an actual request ~ but checking if the status code is different from `200`);
- Best way (without using third party services) to check transaction confirmations will be using web3;
- For the future, checking out the transaction receipt status for this kind of things is important;
- `axios` would also be a good dependency for the web application regarding HTTP requests;
- Can't miss the importance of an CI workflow.

### Reminder

- Be careful, don't eat too many transactions (I'm already getting fat with all this tests).
