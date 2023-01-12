# Notes Delivery Service

Note Taker is an application that can be used to write and save notes. A user can open the application, and click on the link to the notes page. On load of the notes page, the user can see previous notes (if applicable) in the left-hand collumn. Then the user can create a new note by adding the note's title and text. Pressing the "save" icon will store your note to the json file, and the application will display your saved note on the left hand collumn of the page.

Users can access their previous notes by clicking on any of the notes in the left hand collumn, and the note will display on the right-hand collumn. If the user wants to create another note while viewing a past note, clicking the "+" icon at the top of the screen will present fields for a new note. Users can delete previous notes by clicking the "delete" button on notes in the left-hand collumn. The application uses an Express.js back end, and will save and retrieve note data from a JSON file.

For this challenge, the application’s front end has already been created. Our job was to build the back end, connect the two, and deploy the entire app to Heroku.

[Click to view the deployed application!](https://immense-waters-79428.herokuapp.com/)

## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/95142863/158084703-01983353-25fd-4894-a95f-421abc0c196a.png)

## Installation

Note: This project requires [Node.js](https://nodejs.org/en/). Here is a resource to get started: [How to Install NodeJS](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

Check that node is installed

```bash
node -v
```

Clone the repo

```bash
git clone https://github.com/dieterichelizabeth/notes-delivery-service.git
```

Install npm packages

```bash
npm i
```

Invoke the application by running-

```bash
npm start
```

## Lessons Learned

To complete this project, I created a server with Express.js and wrote get routes for displaying the index.html(\*) file as well as notes.html(/notes), then built the create, read, and delete routes located in the notes.js file of the routes folder. [fs.writeFileSync](https://nodejs.dev/learn/the-nodejs-fs-module) is used to store and retrieve notes for the client.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Technologies Used

Built with Node.js, Express.js, and the [UUID](https://www.npmjs.com/package/uuid) package.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Documentation

- [Express Documentation](https://expressjs.com/en/4x/api.html#app.post.method)
- [uuid npm Documentation](https://www.npmjs.com/package/uuid)

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
