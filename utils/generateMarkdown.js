// Function that returns a license badge based on which license is passed in (in the header section of the readme file)
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-success.svg)`
  }
  return ``
}

// Function that returns the license link for content of tables
function renderLicenseLink(license) {
  if (license !== "None") {
    return (`* [License](#license)`)
  }
  return ``
}

// Function that returns the license section of README main section
function renderLicenseSection(license) {
if (license !== "None") {
return (
`## License/s required :white_check_mark:
\`\`\`
This work has been licensed under the ${license}
\`\`\``
)}
return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${answers.version}

${renderLicenseBadge(answers.license)}

\`\`\`
${answers.intro}
\`\`\`

## Table of contents :point_down:

* [What was your motivation?](#what-was-your-motivation-thumbsup)
* [User Story](#user-story-scroll)
* [Acceptance Criteria](#acceptance-criteria-book)
* [Dependencies installation](#dependencies-installation-white_check_mark)
${renderLicenseLink(answers.license)}
* [Test/s to run commands](#tests-to-run-commands-white_check_mark)
* [Technologies used](#technologies-used-computer)
* [Contact me](#contact-me-link)
* [Deployed URL](#deployed-url-link)
* [Wireframe/branching tree](#wireframebranching-tree)
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
**${answers.test}**
\`\`\`


## Technologies used :computer:
\`\`\`
The following technologies are used: ${answers.tech}
\`\`\`


## Contact me :link:

* Link to my GitHub profile: [${answers.name} profile](https://github.com/${answers.gUsername})

* Visit my GitHub repo: [Repo](https://github.com/${answers.gUsername}/${answers.title})

* Reach me with additional questions: ${answers.email} 


## Deployed URL :link:

Click the link to visit the deployed webpage: https://${answers.gUsername}.github.io/${answers.title}/


## Wireframe/branching tree

![Wireframe](/assets/images/wireframe-${answers.title}.png)


## Screenshot landing page

![Landing Page](/assets/images/${answers.title}-landing-page.png)

---
© 2021 [${answers.name}](https://github.com/${answers.gUsername}) Confidential and Proprietary. All Rights Reserved`;
}

module.exports = generateMarkdown;