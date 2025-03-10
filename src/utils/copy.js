import * as fs from "node:fs";
import path from "node:path";

export default function copy(sourceDir, targetDir) {
	const items = fs.readdirSync(sourceDir, { withFileTypes: true });
	
	items.forEach((item) => {
		const sourcePath = path.join(sourceDir, item.name);
		const targetPath = path.join(targetDir, item.name);
		
		const stat = fs.statSync(sourcePath);
		
		if (stat.isDirectory()) {
			if (!fs.existsSync(targetPath)) {
				fs.mkdirSync(targetPath, { recursive: true });
			}
			copy(sourcePath, targetPath);
		} else if (stat.isFile()) {
			fs.copyFileSync(sourcePath, targetPath);
		}
	});
};