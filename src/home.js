import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import EasyTable from 'easy-table';
import userrecon from './userRecon.js';
import mailfinder from './mailFinder.js';
import useragent from './userAgent.js';
import instaRecon from './instaRecon.js';
import whois from './whoIs.js';
import IPlookup from './ipLookup.js';
import dnsLookup from './dnsLookup.js';
import portScanner from './portScanner.js';
import headerLookup from './headerLookup.js';
import urlExpander from './urlExpander.js';

import { sleep, input } from './common.js';

const takeOption = async () => {
  var option = await input('Your Option ');

  if (option == '1' || option == '01') {
    userrecon(null, true);
  } else if (option == '2' || option == '02') {
    mailfinder(null, true);
  } else if (option == '3' || option == '03') {
    useragent(null, true);
  } else if (option == '4' || option == '04') {
    whois(null, true);
  } else if (option == '5' || option == '05') {
    instaRecon(null, true);
  } else if (option == '6' || option == '06') {
    IPlookup(null, true);
  } else if (option == '7' || option == '07') {
    portScanner(null, true);
  } else if (option == '8' || option == '08') {
    domainAge(null, true);
  } else if (option == '9' || option == '09') {
    headerLookup(null, true);
  } else if (option == '10') {
    dnsLookup(null, true);
  } else if (option == '12') {
    urlExpander(null, true);
  } else if (option == 'exit' || option == '00' || option == '0') {
    console.log('bye!'.cyan);
  } else {
    takeOption();
  }
};

const home = async (animationDelay = 2000, i = 1) => {
  console.clear();
  chalkAnimation.neon(
    `
    _____        __                         
   |_   _|      / _|                        
     | |  _ __ | |_ ___   ___   ___ _______ 
     | | | '_ \\|  _/ _ \\ / _ \\ / _ \\_  / _ \\
    _| |_| | | | || (_) | (_) | (_) / /  __/
   |_____|_| |_|_| \\___/ \\___/ \\___/___\\___|`,
    '2',
  );

  await sleep(animationDelay);
  // console.log(chalk.hex('#FFA500')('\t     A OSINT based tool\n\n'));
  console.log('\n\n');
  await sleep(500);

  var optionsData = [
    ['User Recon', 'username reconnaissance'],
    ['Mail Finder ', 'find email with specific name'],
    ['Useragent', 'find browser info'],
    ['Whoislookup', "find doamin's whois info"],
    ['InstaRecon', 'find Instagram users info'],
    ['IP Lookup', 'find IP info'],
    ['Ports Scan', 'find open ports'],
    ['Domain Age', 'find website Age'],
    ['Header Info', 'find website headers'],
    ['DNS Lookup', 'domain name system lookup'],
    ['Git Recon', 'find github user info'],
    ['Expand Url', 'long url of shorten urls'],
  ];

  var table = new EasyTable();

  optionsData.forEach((details, index) => {
    table.cell(
      chalk.whiteBright('No'),
      chalk.cyan(index < 9 ? '0' + (index + 1) : index + 1),
    );
    table.cell(chalk.whiteBright('Name'), details[0]);
    table.cell(chalk.whiteBright('Description'), chalk.gray(details[1]));
    table.newRow();
  });

  table.newRow();
  table.cell(chalk.whiteBright('No'), chalk.cyan('00'));
  table.cell(chalk.whiteBright('Name'), 'exit');
  table.cell(
    chalk.whiteBright('Description'),
    chalk.gray('close and exit from tool'),
  );
  table.newRow();

  console.log(table.toString());

  takeOption();
};

export default home;
