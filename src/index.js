#!/usr/bin/env node

import commands from './commands/index.js'

const args = process.argv.slice(2);
const command = args[0].split(':')[0];

if(!command) commands.help()
else if(!commands[command]) commands.unknownCommand()
else commands[command](args)