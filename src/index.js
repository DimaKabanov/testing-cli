import '@babel/polyfill';
import axios from 'axios';

const render = ({ name, temp }) => `Temperature in ${name} ${temp} F`;

const parse = (weatherData) => {
  const { main: { temp }, name } = weatherData;
  return { name, temp };
};

export default async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=623ee6fdfa2383b014a27272039db110`;

  try {
    const { data } = await axios.get(url);
    const parseredData = parse(data);
    return render(parseredData);
  } catch (error) {
    console.log('Error:', `${city} -`, error.response.data.message);
    throw error;
  }
};
