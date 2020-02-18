import axios from 'axios';

const baseUrl = () => 'http://localhost:8000';

export const requestAll = (url: string): Promise<any> => {
  return axios.get(baseUrl() + `/${url}`).then(res => res.data);
}

export const requestOne = (url: string): Promise<any> => {
  return axios.get(baseUrl() + `/${url}`).then(res => res.data);
}

export const insertOne = (url: string, body: any): Promise<any> => {
  return axios.post(baseUrl() + `/${url}`, body).then(res => res.data);
}

export const deleteOne = (url: string): Promise<any> => {
  return axios.delete(baseUrl() + `/${url}`);
}

export const editOne = (url: string, body: any): Promise<any> => {
  return axios.patch(baseUrl() + `/${url}`, body);
}
