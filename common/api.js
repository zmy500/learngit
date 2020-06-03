import Util from './http.js'
const api = {
	// queryList:function(params){
	//    return Util.request('api/monitor/gis/index',params)
	// }
	
	queryList:function(params){
	   return Util.request({
		   url:'api/monitor/gis/index',
		   method:"POST",
		   data:params
	   })
	}
}

export default api;