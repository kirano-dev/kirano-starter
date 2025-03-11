import chalk from "chalk";
import * as readline from "node:readline";
import createDirectory from "../utils/createDirectory.js";
import copy from "../utils/copy.js";
import path from "node:path";

const createProject = (template, name) => {
	if(createDirectory(name)) {
		copy(
			path.join(import.meta.dirname, `../templates/${template}`),
			name
		)
		
		console.log(`Проект ${name} создан, следующие шаги:`)
		console.log(chalk.yellow(`cd ${name}`))
		console.log(chalk.yellow(`npm i`))
		console.log(chalk.yellow(`npm run dev`))
	}
}

export default (args) => {
	const templates = [ 'vue', 'nuxt' ]
	const template = args[0].split(':').slice(1)[0]
	
	if(!template) {
		console.log('Необходимо выбрать шаблон. Для справки - ' + chalk.yellow('kirano help'))
		return
	} else if (!templates.includes(template)) {
		console.log('Неверный шаблон. Для справки - ' + chalk.yellow('kirano help'))
		return
	}
	
	const projectName = args[1];
	
	if(!projectName) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		})
		
		rl.question('Название проекта: ', (name) => {
			createProject(template, name)
			rl.close()
		})
	} else createProject(template, projectName)
}