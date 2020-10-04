// function to generate markdown for README
function generateMarkdown(data) {
    return `
    ## ${data.title}
    ${data.license}

    ## Description:
    ${data.description}

    ## Table of Contents:
    * .[Installation](#installation)
    * .[Usage](#usage)
    * .[License](#license)
    * .[Contributing](#contributing)
    * .[Tests](#tests)

    ## Installation:
    ${data.installation}

    ## Usage:
    ${data.usage}

    ## License:

    ## Contributing:
    ${data.guidelines}

    ## Tests:
    ${data.test}

    ## Questions:
    If you have any questions, feel free to look up ${data.username} at .[https://github.com/${data.username}/]
    or email at ${data.email}
  `;
}
  
module.exports = generateMarkdown;