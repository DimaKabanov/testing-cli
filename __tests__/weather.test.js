import '@babel/polyfill';
import { promises as fs } from 'fs';
import nock from 'nock';
import weather from '../src';

describe('Get weather data by city name', () => {
  test('Correct weather for London', async () => {
    const testWeatherDataPath = '__tests__/__fixtures__/weather.json';
    const weatherData = await fs.readFile(testWeatherDataPath, { encoding: 'utf8' });
    const host = 'http://api.openweathermap.org/';
    const url = 'data/2.5/weather?q=London,us&APPID=623ee6fdfa2383b014a27272039db110';
    nock(host)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(`/${url}`)
      .reply(200, weatherData);

    const actual = await weather('London');
    const expected = 'Temperature in London 280.2 F';
    expect(actual).toBe(expected);
  });
});
