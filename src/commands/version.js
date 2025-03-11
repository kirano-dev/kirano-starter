import chalk from "chalk";
import packageConfig from '../../package.json' with { type: 'json' };

export default () => {
	console.log(chalk.green('Kirano Starter Pack version: ') + chalk.yellow(packageConfig.version))
}