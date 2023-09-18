# FontEnd
This is a basic WEB UI frontend for the application <code>https://github.com/pipspritam/JavaRESTAPI.git</code> <br>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.


## Requirements
* JDK 20 (java)
* Mongodb
* Spring Boot support in Visual Studio Code
* Angular
* Node.JS

## How to run the application
* Initially clone the backend application.
* Clone the backend project: <code> git clone https://github.com/pipspritam/JavaRESTAPI.git </code>
* Run the backend application.
* Clone this project: <code> git clone https://github.com/pipspritam/serverInfoFontEnd.git </code>
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.


## Sample Outputs
## 1. Home Page
<img src="./screenshot/index.png"><br>

## 2. Add New Server
<p> Fill all the required field to add new server info in the database</p>
<img src="./screenshot/addServer.png"><br>

### Case 1: Data Added Successfully
<img src="./screenshot/addServerDone.png"><br>
### Case 2: Data Already Exist
<img src="./screenshot/addServerAlready.png"><br>
### Case 3: Data Field Is Missing
<img src="./screenshot/addServerFillAll.png"><br>

## 3. Get All Servers
<p>Retrieve all the serverInfo from database</p>
<img src="./screenshot/getServers.png"><br>


## 4. Get Server By ID
<p>Retrieve a particuler serverInfo by ID</p>
<img src="./screenshot/getServerId.png"><br>

### Case 1: ServerInfo with given ID is present in database
<img src="./screenshot/getServerIdFound.png"><br>
### Case 2: ServerInfo with given ID is not present in database
<img src="./screenshot/getServerIdNoResult.png"><br>


## 5. Get Server By Name
<p>Retrieve one or more serverInfo by Name</p>
<img src="./screenshot/getServerName.png"><br>

### Case 1: ServerInfo with given name is present in database
<img src="./screenshot/getServerNameFound.png"><br>
### Case 2: ServerInfo with given name is not present in database
<img src="./screenshot/getServerNameNoResult.png"><br>


## 6. Delete Server By ID
<p>Delete a particuler serverInfo by ID</p>
<img src="./screenshot/delete.png"><br>

### Case 1: ServerInfo with given ID deleted from database
<img src="./screenshot/deleteServer.png"><br>
### Case 2: ServerInfo with given ID for deletion is not present in database
<img src="./screenshot/deleteNoServer.png"><br>




