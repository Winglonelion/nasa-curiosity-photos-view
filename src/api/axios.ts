import {Axios} from 'axios';

const AxiosClient = new Axios();

AxiosClient.defaults.baseURL = 'https://api.nasa.gov';

export default AxiosClient;
