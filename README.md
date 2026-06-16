# Node-JS
## THIS is an example of a markdown file which is used for just text and helps to explain your code

### Title
If the user sets the module type on package.json to CommonJS they will need to use the import like this on any js file

Example `const express = require('express')` 

Else if the user set the type to Module like `"type": "module",` they will need to use the import like this on any js file.

`import express from 'express'`


### Setting up MongoDB
Start by creating a new project, then a new cluster. Once in your Cluster, click ;'connect' and select the option 'Drivers'. When the pop up appears you want to then select Mongoose as the driver and copy the string to add to your code. This string will be added to the .env file. In this file, start by writing in MONGO_URI="" and then paste the code in the " section. Lastly, you will need to add your databse user's password into the link eg
to start- mongodb+srv://isbelf:<db_password>@cluster0.wgdt8nf.mongodb.net/?appName=Cluster0

eg- mongodb+srv://isbelf:dbUser12Hw56bh@cluster0.wgdt8nf.mongodb.net/?appName=Cluster0

*If you have forgotten your password. Easiest way to find this is to follow the steps above to view the string, at the bottom of this pop up will be a link to view 'Access your Databse Users' which will show your password too. 

### Checking the terminal
To get a new terminal, select terminal at the top of the dashboard and click new. From there start by finding what folder you're in.

use 'cd' to go into a folder

use 'ls' to list the folders/content

use 'cd ..' to go back one folder

use 'npm run dev' OR 'npm run start' to check your code (this runs the server)

use 'npm i APP' to install a application eg 'npm i cors'

click control and C to clear the terminal

use pwd to find the file on VSC you're currently in

### functions in code
. () - is a fake function

.${} - means we can all on variables

. when referring to something in {} you don't use = rather :

.try- try this code

.catch- if anything fails, please do this (this is a failsafe)

.req- is the request. So the payload you're receiving in case the user is sending you dtat

.res- the response you will send from your route

.JSON.stringify- converts the content to JSON (when used in console.log it will essentially convert from an 'object' into a string. This then visually prints this out for us in the log and is just for our)

.body- is the information inputted


### Definitions & learnings
. Git is open-source, distributed version control sustem used by command line

. GitHub| Bitbucket| GitLab- are cloud infrastrcuture companies using git.

. Gitignore file- are files we ignore and don't commit. This is to protect data. This is linked to .env where we store our environment variables

. .env file- is a plain text configuration file used to store environment variables as simple key-value pairs

. express- Express.js is a fast, minimalist, and unopinionated web framework for Node.js that simplifies building server-side applications and APIs

. Cors (cross origin resource sharing)- a secure way to connect between 2 apps (eg UI and backend)

.URI- is any endpoint where is reachable.

.URL- is the main http or https

    [URL (Uniform Resource Locator) is a specific type of URI (Uniform Resource Identifier) that identifies a resource by its location and provides the means to access it, whereas a URI is a broader term that identifies a resource by name, location, or both]

.routes- is a collective folder where you can create individual files for pathways relating to actions or functionailites of the app. It is the files under the routes folder that are associated with those exact actions or functionailites (such as create or POST, read or GET, update or PUT/PATCH, Delete)

.Node JS- is a type of API and where you can create custom routes. It is the middle man, completing requests via the UI and the database
    . helps you test the code (Post, get, put requests)
    . be sure to go to the terminal and input 'npm run dev' for my node.js server to be 'on'
    . the terminal must also be running whilst you use thunder client to send a request

.MonoDB- is a database

.JSON (JavaScript Object Notation)- is a lightweight, text-based data interchange format used to store and transmit structured data between servers and clients

.payload- is the actual data or code being transmitted or delivered by a system, separate from the overhead (headers, metadata, or transport mechanisms) required to move it

.to update a task- all that is needed is ID and Title.
    .PATCH- used to update an aspect and don't need to rewrite entire properties details
    .PUT- is to essentially resubmit or redo the entire property so must write our every aspect of it

.nodemon is used in 'package.json' so you don't have to kill the terminal and restart it manually, it essentially runs these actions automatically

.main things to pay attention when using thunderClient
    1. Method: GET, POST, PUT, PATCH
    2. URL subpath: what's after the http://localhost:3000/
    3. Depending on the method you need to send a body