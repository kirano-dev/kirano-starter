import * as fs from "node:fs";

export default function copy(sourceDir, targetDir) {
	fs.cpSync(sourceDir, targetDir, {recursive: true});
};