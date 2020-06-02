import urlConfig from './config.js'
const Util = {
	request:function(url,params){
		let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzZTk3OGIxMTczM2M0ODY3YjI2NjQ1OWYxZGE2YTlhMyIsInVzZXJfbmFtZSI6Ijc3NzciLCJjcmVhdGVkIjoxNTkxMDk0OTQxMDAwLCJleHAiOjE1OTEwOTg1NDF9.QprtSOUagAkxXmZqp_EwkIkBXeMwvXSRg36gx3VtRKI19oevAxZFOIs22637uMmtPUKghDMllsNOMHS1DupYTA'//uni.getStorageSync('token');
		return new Promise((resolve,reject) =>{
			uni.request({
			    url: urlConfig + url, //仅为示例，并非真实接口地址。
			    data: params,
				timeout:18000,
				method:'POST',
			    header: {
					'content-type': 'application/json;charset=UTF-8',
			        'Authorization': 'Zsplat' + token //自定义请求头信息
			    },
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