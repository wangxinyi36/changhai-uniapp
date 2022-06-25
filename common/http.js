const REQUEST_URL = "https://www.ming-yi.net/";
/**
 * @description 公共请求方法
 * @param {*} url 接口类路径
 * @param {*} method 请求方法
 * @param {*} data 参数
 * @param {*} type 请求头类型，默认json
 */
export const http = (url, data, method = 'GET', type) => {
	uni.showLoading({
		title: '加载中...'
	});
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
				uni.hideLoading();
			}
		});
	})
}

export const upload = (url, file) => {
	return new Promise((resolve, reject) => {
		console.log(file)
		let newUrl = `${REQUEST_URL}${url}`
		uni.uploadFile({
			url: newUrl, //仅为示例，非真实的接口地址
			filePath:file,
			name: 'file',
			success: (res) => {
				let result = JSON.parse(res.data)
				resolve(result.data.url)
			},
			fail(error) {
				reject(error)
			}
		});
	})


}
