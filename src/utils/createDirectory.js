import fs from "node:fs";

export default (name) => {
	try {
		fs.mkdirSync(name);
	} catch (err) {
		console.error(`Директория ${name} уже существует`);
	}
}