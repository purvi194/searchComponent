# To run the project
   - Clone the project
   - Run npm install
   - Create a .env file in the root directory, add the apikey for the api in the format REACT_APP_API_KEY='{your_api_key}'.
   - Run npm start

# Tradeoffs
    - While initial analysis of the API provided, it was observed that the API does not respont well to single/double character search. The results returned are too many and the API is unable to mathc string and return result. Also there was no spicified way in the documentation to limit the number of results to be returned.
    - The search starts when the user enters more than two letters.