import axios from 'axios';

export async function post(url: string, data: any) {
  const rep = await axios.post(url, data);
  return rep.data;
}
