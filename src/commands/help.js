import figlet from "figlet";
import chalk from "chalk";

export default () => {
	figlet("KIRANO", {
		horizontalLayout: 'fitted',
	}, function (err, data) {
		if (err) {
			console.log("Something went wrong...");
			console.dir(err);
			return;
		}
		
		console.log('')
		console.log(chalk.magenta.bgBlack(data));
		console.log(chalk.white.bgBlack('              Starter Pack                '));
		console.log(chalk.white.bgBlack('                                          '));
		console.log('')
		console.log('Доступные команды:')
		console.log('')
		console.log('- ' + chalk.yellow('create:vue'))
		console.log('- ' + chalk.yellow('create:nuxt'))
	})
}