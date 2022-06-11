const REQUEST_URL = '';
/**
 * @description 公共请求方法
 * @param {*} url 接口类路径
 * @param {*} method 请求方法
 * @param {*} data 参数
 * @param {*} type 请求头类型，默认json
 */
export const http = (url, method, data, type) => {
	return new Promise((resolve, reject) => {
		let header = {
			'custom-type': 'application/json'
		}
		if (type && type == 'form') {
			header['custom-type'] = 'application/x-www-form-urlencoded'
		}
		uni.request({
			url,
			data: {
				text: 'uni.request'
			},
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
