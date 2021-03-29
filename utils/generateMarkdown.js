// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers, userInfo) {

  // Generate Table of Contents conditionally based on userAnswers
  let tableOfContents = `## Table of Contents`;

  if (userAnswers.installation !== '') { tableOfContents += `
  * [Installation](#installation)` };

  if (userAnswers.usage !== '') { tableOfContents += `
  * [Usage](#usage)` };

  if (userAnswers.contributing !== '') { tableOfContents += `
  * [Contributing](#contributing)` };

  if (userAnswers.tests !== '') { tableOfContents += `
  * [Tests](#tests)` };

//Top/license
let MarkdownSec = 
`# ${userAnswers.title}

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userAnswers.username}/${userAnswers.repo}?style=flat&logo=appveyor) 
![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userAnswers.username}/${userAnswers.repo}?style=flat&logo=appveyor)
![Badge for GitHub license]()

## Description 

*The what, why, and how:* 

${userAnswers.description}

`

// Table of Contents
MarkdownSec += tableOfContents;

// License section
MarkdownSec += `
* [License](#license)`;


// Installation 
if (userAnswers.installation !== '') {

  MarkdownSec +=
`

## Installation

*Steps required to install project and how to get the development environment running:*

${userAnswers.installation}`
};


// Usage
if (userAnswers.usage !== '') {

  MarkdownSec +=

`

## Usage 

*Instructions and examples for use:*

${userAnswers.usage}`
};


// Contributing
if (userAnswers.contributing !== '') {
`

## Contributing

*If you would like to contribute it, you can follow these guidelines for how to do so.*

${userAnswers.contributing}`
};


// Test
if (userAnswers.tests !== '') {

  MarkdownSec +=
`

## Tests

*Tests for application and how to run them:*

${userAnswers.tests}`
};


// License
MarkdownSec +=
`

## License

${userAnswers.license}
`;


// Developer/questions
let DevSec = 
`

## Questions?

![Developer Profile Picture](${userInfo.avatar_url}) 

If you have any questions you can chat me up with the information below:

GitHub: [@${userInfo.login}](${userInfo.url})
`;

if (userAnswers.contact !== null) {

  DevSec +=
`

Contact info: ${userAnswers.contact}

`};

MarkdownSec += DevSec;

// Return markdown
return MarkdownSec;

}

module.exports = generateMarkdown;
