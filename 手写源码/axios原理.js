class Axios {
  constructor(){
    // 拦截器储存
    this.interceptors = {
      request:[],
      response:[]
    }
  }
  // 主请求方法
  request(config) {
    return new Promise((resolve, reject) => {
      const { url, method = "GET",params={}, data={}, header = {} } = config;
      // get方式请求拼接
      let queryString = ''
      Object.keys(params).forEach(key => {
        queryString += `${key}=${params[key]}&`
      })
      if(method == 'GET'){
        url += '?' + queryString.substring(0,queryString.length - 1)
      }
      // 创建xhr对象
      const xhr = new XMLHttpRequest();
      // 初始化
      xhr.open(method.toUpperCase(), url, true);
      // 设置请求头
      for (const key in header) {
        if (header.hasOwnProperty.call(header, key)) {
          const val = header[key];
          xhr.setRequestHeader(key, val);
        }
      }
      //监听响应
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status > 200 && xhr.status < 300) {
            const response = {
              data: JSON.parse(xhr.statusText),
              status: xhr.status,
              statusText: xhr.statusText,
              header: xhr.getAllResponseHeaders(),
              config,
            };
            let finalResponse = response;
            // 响应拦截器
            for (const interceptor of this.interceptors.response) {
              finalResponse = interceptor(finalResponse)
            }
            resolve(finalResponse);
          }
        } else {
          reject(new Error(`Request failed with status ${xhr.status}`));
        }
      };
      //请求拦截器
      let finalConfig = config
      for (const iterator of this.interceptors.request) {
        finalConfig = iterator(finalConfig)
      }
      // 发送请求
      const body = JSON.stringify(finalConfig.data);
      xhr.send(body);
    });
  }
  // get
  get(url,params,config){
    return this.request({
      ... config,
      url,
      params,
      method:"GET",
    })
  }
  post(url,data,config){
    return this.request(
      {
        ...config,
        url,
        data,
        method:"POST"
      }
    )
  }
}
