# resume_generator_with_AdobeAPI
This project uses Adobe document generation API for creating resume with document templates and JSON data

steps to execute:
1. download project
2. open terminal
3. install nodejs ($ sudo apt install nodejs) - v18.16.1
4. install npm ($ sudo apt install nodejs npm)
5. install nodejs SDK ($npm install --save @adobe/pdfservices-node-sdk)
6. install express($ npm install express)
7. install fs($ npm install fs)
8. run command ($ node index.js)
 output: Server is running on port 3000
  open chrome and check link "http://localhost:3000/" for server at port 3000

working: USER can enter all the details in HTML form (name,email,adreess, education,experience,skills,etc,) and create a json file 
with later helps in create resume with API
and then user can enter local host local of document template and json FILE and click on generate resume and a resume in pdf 
format will be downloaded.


project struture:
-Input_Document_Files: contains the resume word file templates.
-Input_JSON_Files: contains the sample details of user in JSON format
-PDFServicesSDK-Node.jsSamples: contain nodejs SDK files
-handleAPIRequest.js: this file handles the API Request for Adobe Document generation API  which sends document file and json data to API
and return a PDF as reponse.
-index.html : contain the html code for main webpage
-index.js : is the main/starter JS file of node project.
-package.json: contains the project info and package versions.
-package-lock.json: contains the fixed version of packages and addtional locked info.
-pdfservices-api-credentials.json : contains the credentials for API call
-processForm.js : html linked JS file which handle functionality what to do when click on submit
-styles: is the styling file for formatting contents.

