const program = require("commander");
const createProjectActions = require("./actions");

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("create a new project")
    .action(createProjectActions);
};

module.exports = createCommands;
