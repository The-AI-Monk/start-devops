// importing packages from GitHub Actions
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // getting input
  const workflowName = core.getInput('workflow-name');
  console.log(`The name of the workflow is ${workflowName}.`);

  // getting time
  const time = (new Date()).toTimeString();
  
  // setting output
  core.setOutput("time", time);
} catch (error) {
  // error handling
  core.setFailed(error.message);
}
