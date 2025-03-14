import {lsDirectories} from "./utils/lsDirectories.js";
import JSZip from "jszip";
import {clearDirectory} from "./utils/clearDirectory.js";
import {addFilesToZip} from "./utils/addFilesToZip.js";
import fs from "node:fs";

const src = 'src/templates'
const dest = 'src/templates-zip'

clearDirectory(dest);

const templates = lsDirectories(src);

templates.forEach(_path => {
	const zip = new JSZip();

	addFilesToZip(zip, _path);

	zip.generateAsync({type:"blob"}).then(function(content) {
		content.arrayBuffer().then(buffer => {
			fs.writeFileSync(`${dest}/${_path.split('/').at(-1)}.zip`, Buffer.from(buffer))
		})
	});
})