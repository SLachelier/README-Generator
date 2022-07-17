// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'The Unlicense'){
    return 'The%20Unlicense';
  } else if (license === 'Boost Software License 1.0'){
    return 'Boost%20Software%20License%201.0';
  } else if (license === 'MIT License'){
    return 'MIT%20License';
  } else if (license === 'Apache License 2.0'){
    return 'Apache%20License%202.0';
  } else if (license === 'Mozilla Public License 2.0'){
    return 'Mozilla%20Public%20License%202.0';
  } else if (license === 'GNU LGPLv3'){
    return 'GNU%20LGPLv3';
  } else if (license === 'GNU GPLv3'){
    return 'GNU%20GPLv3';
  } else if (license === 'GNU AGPLv3'){
    return 'GNU%20AGPLv3';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case "The Unlicense":
      licenseLink = "https://unlicense.org/";
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://opensource.org/licenses/BSL-1.0";
      break;
    case "GNU GPLv3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
      case "MIT License":
        licenseLink = "https://mit-license.org/";
        break;
      case "Mozilla Public License 2.0":
        licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/";
        break;
      case "GNU LGPLv3":
        licenseLink = "https://www.gnu.org/licenses/lgpl-3.0.en.html";
        break;
      case "GNU AGPLv3":
        licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html";
        break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![alt text](https://img.shields.io/badge/LICENSE-${renderLicenseBadge(data.license)}-blue)
  
  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Tests
  ${renderLicenseSection(license)}
  ---
  ## Questions
  If you have any questions, would like to reach me, or view my repositories, please feel free to visit my GitHub profile at: ${data.username}
  Or, alternatively, you can reach me by e-mail at: ${data.email}
  `;
}
module.exports = generateMarkdown;
