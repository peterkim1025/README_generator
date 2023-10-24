function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)";
    case "BSD 3":
      return "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203-blue.svg)](https://opensource.org/licenses/BSD-3)";
    default:
      return "";
  }
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.projectName}

${licenseBadge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.dependencies}
\`\`\`

## Usage

${data.repoKnowledge}

## License

This project is licensed under the ${data.license} license. See the license section for more information.

## Contribution

${data.repoContribution}

## Tests

To run tests, please run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, please contact me directly at ${data.email}. You can also find more of my work at [${data.userName}](https://github.com/${data.userName}).
`;
}

module.exports = { generateMarkdown };
