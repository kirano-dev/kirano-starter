import fs from "node:fs";

export default (name) => {
	try {
		fs.mkdirSync(name);
		
		return true
	} catch (err) {
		console.error(`Директория ${name} уже существует`);
	}
	
	return false
}