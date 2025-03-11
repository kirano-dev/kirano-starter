import help from "./help.js";
import unknownCommand from "./unknownCommand.js";
import create from "./create.js";
import version from "./version.js";

export default {
	help,
	unknownCommand,
	create,
	'-v': version,
	'--v': version,
	'version': version,
}