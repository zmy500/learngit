import Util from './request.js'
const api = {
	queryList:function(params){
	   return Util.request('api/monitor/gis/index',params)
	}
}

export default api;