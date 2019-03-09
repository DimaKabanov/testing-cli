import '@babel/polyfill';
import axios from 'axios';

export default async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=623ee6fdfa2383b014a27272039db110`;
  try {
    const { data } = await axios.get(url);
    const { main: { temp } } = data;
    return temp;
  } catch (error) {
    throw error;
  }
};
