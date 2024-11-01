// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "Title",
		message: "What's the title of your project?",
	},
	{
		type: "input",
		name: "Description",
		message: "What's the descrption of your project?",
	},
	{
		type: "list",
		name: "license",
		message: "What's the license for your project?",
		choices: ["choice 1", "choice 2", "choice 3"],
	},
	{
		type: "input",
		name: "GitHub username",
		message: "What's your GitHub username?",
	},
	{
		type: "input",
		name: "E-mail",
		message: "What's your E-mail address?",
	},
];

// TODO: Create a function to write README file END
//function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			console.error("Error, files were corrupted!:", err);
			return;
		}
		console.log(`README file has been created successfully: ${fileName}`);
	});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
//init();
//function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			const ReadmeContent = generateMarkdown(answers); // Call the function to generate markdown
			writeToFile("README.md", ReadmeContent); // Write the generated markdown to a file
		})
		.catch((error) => {
			console.error("Error during Initialization :", error);
		});


