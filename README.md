DT581B - Preparation - Lab 1
=====================================


## THE PURPOSE OF THIS LAB
Get familiar with one of the biggest and fastest growing technologies today: Node.js and some of its
common tools.

HKR                   |  Mobile Platforms
:-------------------------:|:-------------------------:
![hkr](https://github.com/iloveyii/mobile-platforms-dt581b/blob/master/public/images/hkr.png)  |  ![DT581B](https://github.com/iloveyii/mobile-platforms-dt581b/blob/master/public/images/dt581b.png)
![mongo](https://github.com/iloveyii/mobile-platforms-dt581b/blob/master/public/images/mongodb.png)  |  ![express](https://github.com/iloveyii/mobile-platforms-dt581b/blob/master/public/images/expressjs.png)
![react](https://github.com/iloveyii/mobile-platforms-dt581b/blob/master/public/images/reactjs.png)  |  ![node](https://github.com/iloveyii/mobile-platforms-dt581b/blob/master/public/images/nodejs.png)
  

[DEMO TASK 3](https://hkr-iot-lab1.firebaseapp.com/)

[DEMO TASK 5](https://task5-2098b.firebaseapp.com/)

## INSTALL NODE.JS WITH TOOLS
Install the following on your computer:
   * Node.js
   * Babel, Webpack, Nodemon
   * A local database server (MSSQL, MySQL, MongoDb, or any other of your choice)
Read how the different tools work and try them out and install them in one small project.
You are free to install other tools as well, but you may NOT pick a complete bundle that has all of
these in one module. For this lab, you must install these components separately in this project
(although you should install “Nodemon” globally). 

## NODE.JS
   After you installed Node.js, create a simple project that you can extend a bit so that you can
   experiment with the tools above in the same project. Use the HTTP component as shown in the
   lecture to be able to display something in a browser. Be ready to explain some of the fundamental
   concepts of Node.js during the lab, e.g. how you install a new module, what the “package.json” file is
   used for, etc.
   
## BABEL
Use Babel to compile your Node.js syntax into backwards compatible Javascript code. Use some ES6
syntax so you can clearly see code changes after Babel has processed it. Be ready to give an example
and explain how it works during the actual lab.

Also do some modifications into the “.babelrc” file. Then do the corresponding setting in your
project’s package.json instead.

## WEBPACK
Use webpack to have all your dependencies and code bundled into one Javascript file. Create at least
one extra JavaScript file that exports some functionality that you will use in your main app file and
be ready to show on the lab how this is bundled with Webpack.

## NODEMON
After you have installed Nodemon, start your project with “nodemon” instead of “node” and verify
that changing a Node.js source file will also be reflected in the browser without restarting the server
(but you might have to reload the page in the browser!)
  
## DATABASE PREPARATION
Install a database server on your local machine (if you have WAMP, you already have it!). 
Add a table with some column and value. When you choose type of database server, think that you
might want to connect to it from Node.js later...
Examples: MySQL, https://mariadb.org/, MongoDB, or WAMP that includes the MySQL.

# INSTALLATION
We will use Ubuntu as operating system for all installations below.

## NODE
   * Install curl
   ` sudo apt install curl`
   * Install Node Version Manager (NVM) 
   ` curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash `
   * Source profile ` source ~/.bashrc `
   * Install node v10 ` nvm install 10`
   * Set as default ` nvm use 10 `
   * If you want to use latest npm ` npm install npm@latest -g `

## NODEMON
   * `npm i -g nodemon`
   
## BABEL
   * `npm i --save-dev babel`
   * create `.babelrc` file and add the following
   
## WEBPACK
   * Webpack is a static module bundler which bundles all js files into a single bundle.js file.
   * Install `npm i --save-dev webpack`
   * Install cli to run webpack `npm i --save-dev webpack-cli`
   * Additionally we can also install webpack dev server and html plugin to serve html pages for development purpose
    `npm i --save-dev webpack-dev-server html-webpack-plugin`
   * Create a `webpack-config.js` file and add the following
```javascript
    const path = require('path');
    module.exports = {
        entry : './src/js/index.js', // Location of main js file
        output : { // Where the bundle file should be saved
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.js'
        },
        devServer: {
            contentBase: './dist' // Content path   
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html', // Create this file in output.path
                template: './src/index.html' // From this template
            })
        ]
    }

```
   
## DATABASE - MongoDB
   * `sudo apt update`
   * `sudo apt install -y mongodb`
   * To check the status if mongodb is running
     `sudo systemctl status mongodb`
   * To verify the connectivity to the server run the following command, you should see ok:1.
    `mongo --eval 'db.runCommand({connectionStatus: 1})' `
   * The following are useful commands for the mongodb service
        * Check status `sudo systemctl status mongodb`
        * Start service `sudo systemctl start mongodb`
        * Stop service `sudo systemctl stop mongodb`
        * Restart service `sudo systemctl restart mongodb`
        * To make the service auto start with OS `sudo systemctl enable mongodb`
        * To disable auto start with OS `sudo systemctl disable mongodb`
   * If you are using firewall (ufw) and want to enable mongodb (port 27017)
        * `sudo ufw allow 27017`
        * Check status `sudo ufw status`
