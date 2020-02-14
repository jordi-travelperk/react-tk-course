import axios from 'axios';

const baseUrl = () => 'http://localhost:8000';

export const requestAll = (url: string, queryParams: any): Promise<any> => {
  return axios.get(baseUrl() + `/${url}`).then(res => res.data);
}

export const requestOne = (url: string): Promise<any> => {
  return axios.get(baseUrl() + `/${url}`).then(res => res.data);
}
