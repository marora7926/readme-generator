// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "None") {
    return `![Github License]((https://img.shields.io/badge/license-${license}-success.svg))`
  }
  return ``
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "None") {
    return (
      `## License/s required :white_check_mark:
      \`\`\`
      This work has been licensed under the ${answers.license}
      \`\`\``
    )}
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${answers.version}
  ${renderLicenseBadge(answers.license)}
  
${answers.intro}

## Table of contents :point_down:

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

## What was your motivation? :thumbsup:
    \`\`\`
    ${answers.motivation}
    \`\`\`

## User Story :scroll:
    \`\`\`
    ${answers.userStory}
    \`\`\`

## Acceptance Criteria :book:
    \`\`\`
    ${answers.acceptCriteria}
    \`\`\`

## Dependencies installation :white_check_mark:
    \`\`\`
    To install dependencies, run these commands: ${answers.dependencies}
    \`\`\`
    
${renderLicenseSection(answers.license)}

## Test/s to run commands :white_check_mark:
    \`\`\`
    ${answers.test}
    \`\`\`

## Technologies used :computer:
    \`\`\`
    The following technologies are used: ${answers.tech}
    \`\`\`

## Deployed URL :link:
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