import fs from "fs";
import errorExit from "./error-exit.js";

/**
 * Reads the given file and returns the contents.
 * @param {string} file The file
 * @return {Buffer}
 */
export default (file) => {
  try {
    return fs.readFileSync(file);
  } catch (e) {
    if (e.code === "ENOENT") {
      return errorExit(`File not found: ${file}`);
    }

    return errorExit(`${e}\n${e.stack}`);
  }
};
