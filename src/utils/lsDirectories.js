import path from "node:path";
import fs from "node:fs";

export const lsDirectories = (srcPath) => {
	return fs.readdirSync(srcPath)
		.map(file => path.join(srcPath, file))
		.filter(stat => fs.statSync(stat).isDirectory());
}