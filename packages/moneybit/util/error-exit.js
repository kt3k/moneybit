import chalk from "chalk";
import cliName from "./cli-name.js";

/**
 * Shows error messages and exits the program.
 * @param {string} msg The message
 */
export default (msg) => {
  console.log(chalk.red(msg));
  console.log(`See ${chalk.cyan(`${cliName} -h`)} for more info`);
  process.exit(1);
};
