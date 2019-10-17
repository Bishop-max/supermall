import axios from 'axios'

export function request(config){
	//1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/v1',
    timeout:5000
  })
	//2.axios拦截器
  //2.1请求拦截的作用
	instance.interceptors.request.use(config =>{
    //config发送请求成功时返回
		// console.log(config)

    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求((比如登录(token)))，必须携带一些特殊信息

    //拦截config之后要返回config，否则后面内部发送请求就没有config了
    return config
	},
	err =>{
    //err发送请求失败时返回
		console.log(err)
	})

  //2.2响应拦截
  instance.interceptors.response.use(res =>{
    // console.log(res)
    //拦截响应后要返回响应数据
    return res.data
  },
  err =>{
    console.log(err)
  })
  //3.发送真正的网络请求
  return instance(config)
}
