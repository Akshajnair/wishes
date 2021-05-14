# Wishes

It's a dynamic birthday wishing website.
it collect birtday wishes whom u wish to share to they can add as many wishes with their account.
On the opening day it compile and show it in the form of dynamic circles 


## Getting Started

Live version is available at https://wishes-full-stack.herokuapp.com/ feel free to fill up my database cause till now i havent :p

## ScreenShots
### Cover Page
![Cover Page](https://raw.githubusercontent.com/Akshajnair/wishes/master/Screenshots/cover.png)

### Cover Page
![Wish](https://raw.githubusercontent.com/Akshajnair/wishes/master/Screenshots/wish.png)

### Cover Page
![WishCreate](https://raw.githubusercontent.com/Akshajnair/wishes/master/Screenshots/Wish_create.png)

### Installing

If you are installing production version on Heroku or any other platform Just add key in settings 

EXAMPLE:

```
KEY= ATLAS_URI   VALUE = mongodb+srv://tictactoe:<password>@akshaj.wnrzz.mongodb.net/test?retryWrites=true&w=majority
KEY= AWSACCESSKEYID   VALUE= YOURAWSACCESSKEYID
KEY= AWSSECRETKEY   VALUE= YOURAWSSECRETKEY
KEY= TINIFYKEY   VALUE= TINIFYKEY
```

and If you are in developing build use .env file

and change the URL value to "localhost" in the Dbcon.js file

## Running the tests

Explain how to run the automated tests for this system

## Launching in Developing ENV
To Start React Host, Open BASH in client folder and type following Command
```
npm start
```
To Start Backend Server, open another BASH in root folder and type following Command
```
nodemon server.js
```

## Deployment

npm build

## Authors

* **Akshaj Nair** - *React and Backend* - [akshajnair](https://github.com/Akshajnair)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
