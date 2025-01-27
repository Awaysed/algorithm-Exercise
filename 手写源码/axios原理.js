class Axios {
  // 主请求方法
  request(config) {
    return new Promise((resolve, reject) => {
      const { url, method = "GET",params={}, data={}, header = {} } = config;
      // get方式请求拼接
      let queryString = ''
      Object.keys(params).forEach(key => {
        queryString += `${key}=${params[key]}&`
      })
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
            resolve(finalResponse);
          }
        } else {
          reject(new Error(`Request failed with status ${xhr.status}`));
        }
      };
      // 发送请求
      const body = JSON.stringify(finalConfig.data);
      xhr.send(body);
    });
  }
}
