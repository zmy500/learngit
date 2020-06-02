let url_config = '';
if(process.env.NODE_ENV == "development"){
	//开发环境
	url_config = "http://10.10.10.25:8050/Z3/"  
}else {
	//生产环境
	url_config ="http://10.10.10.25:8050/Z3/"
}

export default url_config