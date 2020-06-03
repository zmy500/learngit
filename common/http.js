import urlConfig from './config.js'
  let token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0ODllMzAyNDNkYzg0Mjc5YjFjYjc1MTc3NzAzYzg0NSIsInVzZXJfbmFtZSI6InpzcGxhdCIsImNyZWF0ZWQiOjE1OTExNzQwMDAwMDAsImV4cCI6MTU5MTE3NzYwMH0.yGWD18kgBkNzcFM7_LvvcPOobwzl6VyedqPW07MedVDtW4dviZBTLA_E7AUTXpjMAa3OGinrQDIbZzh2kSr0ZA'//uni.getStorageSync('token');
  const Util = {
		defaultConfig:{
			url: urlConfig,
			// 如果设为 json，会尝试对返回的数据做一次 JSON.parse
			dataType: 'json',
			// 设置请求的 header，header 中不能设置 Referer。
			header: {
				'Content-Type': 'application/json;charset=UTF-8',
				'Authorization': 'Zsplat ' + token //自定义请求头信息
			}
		},
		mergeConfig:function(config,method){
			
			/**
			 * 合并配置（全局配置+实例中的配置,实例中的优先级更高）
			 * @param {Object} config 
			 * @param {string} method 
			 */
			let url = Util.defaultConfig.url + config.url;
			const header = {
				...Util.defaultConfig.header,
				...config.header,
			}
			const newConfig = {
				...Util.defaultConfig,
				header,
				method,
				...config,
				url
			};
			return newConfig;
		},
	
	 request:function(config,method){
		let newConfig = Util.mergeConfig(config,method)
		console.log(newConfig)
		return new Promise((resolve,reject) =>{
			uni.request({
			    ...newConfig,
			    success: (res) => {
			       resolve(res);
			    },
				fail: (res) => {
					reject(res);
				},
				complete: () => {
					uni.hideLoading();
					uni.stopPullDownRefresh();
				}
			});
		})
	}
}

export default Util;