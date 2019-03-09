#!/usr/bin/env node

import commander from 'commander';
import weather from '..';

commander
  .version('0.0.1')
  .arguments('<city>')
  .description('Get weather by city')
  .action(async (city) => {
    try {
      const currentWeather = await weather(city);
      console.log(currentWeather);
    } catch (error) {
      console.log('Error:', `${city} -`, error.response.data.message);
    }
  });

commander.parse(process.argv);
