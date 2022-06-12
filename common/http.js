const REQUEST_URL = 'http://175.27.189.109:8081/dev/';
/**
 * @description 公共请求方法
 * @param {*} url 接口类路径
 * @param {*} method 请求方法
 * @param {*} data 参数
 * @param {*} type 请求头类型，默认json
 */
export const http = (url, data, method = 'GET', type) => {
	return new Promise((resolve, reject) => {
		let header = {
			'custom-type': 'application/json'
		}
		if (type && type == 'form') {
			header['custom-type'] = 'application/x-www-form-urlencoded'
		}
		let newUrl = `${REQUEST_URL}${url}`
		console.log('请求地址：', url)
		console.log('请求方式：', method)
		console.log('请求参数：', data)
		console.log('请求头：', type)
		uni.request({
			url: newUrl,
			data,
			header,
			method,
			success: (res) => {
				resolve(res.data)
			}
		});
	})
}

export const upload = () => {
	uni.uploadFile({
		url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
		filePath: tempFilePaths[0],
		name: 'file',
		formData: {
			'user': 'test'
		},
		success: (uploadFileRes) => {
			console.log(uploadFileRes.data);
		}
	});
}
