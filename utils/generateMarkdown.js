// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "None") {
    return `![Github License]((https://img.shields.io/badge/license-${license}-yellowgreen.svg))`
  }
  return ``
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${answers.version}

${answers.intro}

## Table of contents

    * [Motivation](#what-was-your-motivation?)
    * [User Story](#user-story)
    * [Acceptance Criteria](#acceptance-criteria)
    * [Dependencies Installation](#dependencies-installation)
    * [License/s required](#license/s-required)
    * [Test/s to run commands](#test/s-to-run-commands)
    * [Technologies used](#technologies-used)
    * [Deployed URL](#deployed-url)
    * [Wireframe/branching tree](#wireframe/branching-tree)
    * [Screenshot landing page](#screenshot-landing-page)

## What was your motivation?
    \`\`\`
    ${answers.motivation}
    \`\`\`

## User Story :scroll:
    \`\`\`
    ${answers.userStory}
    \`\`\`

## Acceptance Criteria
    \`\`\`
    ${answers.acceptCriteria}
    \`\`\`

## Dependencies installation
    \`\`\`
    To install dependencies, run these commands: ${answers.dependencies}
    \`\`\`

## License/s required
    \`\`\`
    ${renderLicenseBadge(answers.license)}
    \`\`\`

## Test/s to run commands
    \`\`\`
    ${answers.test}
    \`\`\`

## Technologies used
    \`\`\`
    The following technologies are used: ${answers.tech}
    \`\`\`

## Deployed URL
    \`\`\`
    Click the link to visit the deployed webpage: ${answers.deployedLink}
    \`\`\`

## Wireframe/branching tree
![Wireframe](${answers.wireframe})

## Screenshot landing page
![Landing Page](${answers.screenshot})

---
© 2021 [${answers.name}](${answers.github}) Confidential and Proprietary. All Rights Reserved`;
}

module.exports = generateMarkdown;