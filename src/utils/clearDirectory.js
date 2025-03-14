import fs from "node:fs";
import createDirectory from "./createDirectory.js";

export const clearDirectory = (path) => {
	try {
		fs.rmSync(path, { recursive: true, force: true })
	} catch (e) {}
	
	createDirectory(path)
}