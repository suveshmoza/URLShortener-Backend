# URL Shortener
This is a URL shortener web application built using Node.js, Express.js and MongoDB.

## Description
The URL Shortener is a web application that allows users to shorten long URLs into a shorter, more manageable format. This can be useful in situations where long URLs are difficult to share, such as in social media posts or email messages. The web application uses a combination of Node.js, Express.js and MongoDB to store the shortened URLs and their corresponding long URLs.

## Installation
1. Clone the repository  

```bash 
git@github.com:suveshmoza/URLShortener-Backend.git
```

2. Install dependencies 

``` bash 
cd URLShortener-Backend
npm install
```

3. Set up environment variables

The following environment variables need to be set:

- <b>MONGO_URL</b>: The URI of your MongoDB database
- <b>PORT</b>: The port number that the server will listen on
You can set these environment variables by creating a .env file in the root directory of the project and adding the following lines:


Replace the MONGODB_URI value with the URI of your MongoDB database, and the PORT value with the port number that you want to use.

4. Start the server

```bash
npm start
```
## Endpoints

- ### POST `/shortUrls`
This endpoint creates a new shortened URL. It expects a JSON object containing the fullUrl of the original URL.

- ### GET `/:shortUrl`
This endpoint redirects the user to the original URL associated with the provided shortUrl. It also increments the clicks counter of the associated ShortUrl object in the database.
 
 If the provided shortUrl is not found in the database, the endpoint returns a 404 status code.

## Credits
This web application was created by Suvesh Moza.
