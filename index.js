// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What's the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "What's the descrption of your project?",
	},
	{
		type: "list",
		name: "license",
		message: "What's the license for your project?",
		choices: ["MIT", "Apache", "None"],
	},
	{
		type: "input",
		name: "github",
		message: "What's your GitHub username?",
	},
	{
		type: "input",
		name: "email",
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
// function init() {
//     inquirer.prompt(questions)
//}

// Function call to initialize app
//init();
//function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			console.log (answers)
			const ReadmeContent = generateMarkdown(answers); // Call the function to generate markdown
			writeToFile("dist/README.md", ReadmeContent); // Write the generated markdown to a file
		})
		.catch((error) => {
			console.error("Error during Initialization :", error);
		});


