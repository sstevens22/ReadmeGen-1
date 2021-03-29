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
}

module.exports = generateMarkdown;
