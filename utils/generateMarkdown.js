// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === "None") {
		return "";
	} else {
		return `![license badge](https://img.shields.io/badge/License-${license}-red)`;
	}
	// 	if (license) return (license);
	//    if ((license))isEmpty('');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license === "None") {
		return "";
	} else {
		return "- [License](#license)";
	}

	// 	if (license) return (license);
	//    {
	// 			if ((license))isEmpty('');
	// 		}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license === "None") {
		return "";
	} else {
		return `## License\n\nThis project is licensed under the ${license} license.`;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
${renderLicenseLink(data.license)}
## Description 
${data.description}

## Installation

## Questions
Follow me on [Github](https://github.com/${data.github}) or E-mail me at ${data.email}
${renderLicenseSection(data.license)}
 
`;
}
export default generateMarkdown;
