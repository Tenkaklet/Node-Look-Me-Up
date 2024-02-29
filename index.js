#!/usr/bin/env node

import { program } from 'commander';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { checkPhoneNumber } from './commands/phone/index.mjs';

// Initialize dotenv
dotenv.config();

// check if process.env.API_KEY is present
if (!process.env.API_KEY) {
  console.log(chalk.red('API_KEY not found. Please add it to your .env file.'));
  process.exit(1);
}
program.version('1.0.0').description('Check the phone number of anyone.');

program
  .command('phone')
  .description('Get the information of a phone number')
  .action(checkPhoneNumber);

program.parse(process.argv);