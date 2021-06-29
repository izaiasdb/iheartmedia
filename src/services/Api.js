import apisauce from 'apisauce';
//import { getToken, logout, getUnidadesAcesso } from './authenticationService';
import { get } from 'lodash'

const create = () => {
  const baseURL = "http://localhost:3001/api";
  const api = apisauce.create({ baseURL, timeout: 120000 });
  const { axiosInstance : { interceptors: { request, response } } } = api

  request.use(
    (config) => {
      return config
    },
    (error) => Promise.reject(error)
  )

  response.use(
    (config) => config,
    (error) => {
      console.log(error)
      let retorno = error && error.response ? {
        motivo : error.response.data.message || error.response.data.apierror.debugMessage || error.response.data.apierror.message, 
        submotivo : error.response.data.apierror ? error.response.data.apierror.subErrors : []
      } : {motivo: "Ocorreu um erro ao tentar conectar ao servidor."};
      
      const status = get(error, 'response.data.status', "")

      if(status === 500 || status === 511) {
        logout();
        window.location.href = "http://localhost:8081/"
      } else if(status === 403) {
        retorno.motivo = "Acesso negado!";
      }
      
      return Promise.reject(error);
    }
  )

  const Song = {
    search: () => api.get('/getSongs'),
  }  
    

  return {
    Song,
  }
}

export default {
  create
}
