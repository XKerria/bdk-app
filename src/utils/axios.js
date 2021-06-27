import Axios from 'axios'

const axios = Axios.create()

axios.defaults.adapter = function( config ) {
  return new Promise( ( resolve , reject ) => {
      let settle = require('axios/lib/core/settle');
      let buildURL = require('axios/lib/helpers/buildURL');
      uni.request({
          method : config.method.toUpperCase(),
          url : config.baseURL + buildURL( config.url , config.params , config.paramsSerializer ),
          header : config.headers,
          data : config.data,
          dataType : config.dataType,
          responseType : config.responseType,
          sslVerify : config.sslVerify,
          complete : function complete( response ) {
              response = {
                  data : response.data,
                  status : response.statusCode,
                  errMsg : response.errMsg,
                  header : response.header,
                  config : config
              };
          settle( resolve , reject , response );
          },
      });
  })
}

export default axios
