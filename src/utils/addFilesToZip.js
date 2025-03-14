import fs from "node:fs";
import path from "node:path";

const exclude = [
	'.gitkeep'
]

export const addFilesToZip = (zip, folderPath, zipFolder = null) => {
	const files = fs.readdirSync(folderPath);

	files.forEach(file => {
		const fullPath = path.join(folderPath, file);
		const stat = fs.statSync(fullPath);
		
		if (stat.isDirectory()) {
			const folderInZip = (zipFolder ?? zip).folder(file);
			addFilesToZip(zip, fullPath, folderInZip);
		} else if (!exclude.includes(file)) {
			const fileContent = fs.readFileSync(fullPath);
			(zipFolder ?? zip).file(file, fileContent);
		}
	});
}