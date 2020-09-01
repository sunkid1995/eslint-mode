const inquirer = require("inquirer");
const { writeFileSync } = require("fs");

const eslintReact = require('./config/eslint.react.json');

const configFiles = {
	react: eslintReact,
};

(async () => {
	const { framework } = await inquirer.prompt([
		{
			type: 'list',
			message: 'Pick a framework.',
			name: 'framework',
			choices: Object.keys(configFiles),
		}
	]);

	const cwd = process.cwd();

	await writeFileSync(`${cwd}/eslint.json`, JSON.stringify(configFiles[framework], null, 2));

	console.log('Successfully!');
})();
