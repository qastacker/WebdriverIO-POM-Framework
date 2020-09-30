# WebdriverIO-POM-Framework

In this framework consist of how to implement Page Object Model in WebDriverIO
1) To start, we have to know how to initially check if npm and node is intalled or not
  i) Install Node JS
  ii) Install NPM
  iii) To check node version in terminal use 
      node -v
  iv) To check npm version use 
      npm -v
2) After installing node and npm, create a workspace in ur VSCode 
    eg : WDIO_POM_Framework
3) Then below are the commands used for inatalling webdriverIO

    a) npm init    //initialize the npm installation 
    
    b) npm install webdriverio --save-dev
    
    c) npm install @wdio/cli
    
    d) npx wdio config
    
    e) npm install chai --save-dev
    
    f) npm install chai-webdriverio --save-dev
    
    e) npm install local-runner --save-dev
    
    f) npm install @wdio/selenium-standalone-service --save-dev //To install selenium-standalone-service
    
4) Add this line in your package.json file, if you getting any error like: browser is not defined or no tests found.
      "scripts": {
      "test": "./node_modules/.bin/wdio ./wdio.conf.js"
       },
       
5) Add this in wdio config under before Suite
      beforeTest: function (test, context) {
        const chai = require('chai')
        const chaiWebdriver = require('chai-webdriverio').default
        chai.use(chaiWebdriver(browser))

        global.assert = chai.assert
        global.should = chai.should
        global.expect = chai.expect
    },
 
