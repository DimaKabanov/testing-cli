import '@babel/polyfill';
import axios from 'axios';

export default async (city) => {
  const appId = '623ee6fdfa2383b014a27272039db110';
  const location = 'us';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${location}&APPID=${appId}`;
  const { data } = await axios.get(url);
  const { main: { temp } } = data;
  return temp;
};
