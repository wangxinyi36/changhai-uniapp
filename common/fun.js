/**
 * 点击跳转
 *
 * @param {string} url 地址(参数短可带参数)
 * @param {string} params 参数(参数过多)
 * @return {void} 返回值无
 */
export const OpenPage = (url, params) => {
	uni.navigateTo({
		url,
		events: {
			// 获取被打开页面传送到当前页面的数据
			getParams(data) {
				console.log(data)
			}
		},
		success: (res) => {
			// 通过eventChannel向被打开页面传送数据
			console.log(res)
			res.eventChannel.emit('sendParams', params)
		}
	});
}

/**
 * 系统信息
 *
 * @return {Object} 返回值
 */
export const GetSystemInfo = () => {
	return uni.getSystemInfoSync();
}

/**
 * 省市区筛选列表
 *
 * @param {string} url 地址(参数短可带参数)
 * @param {string} params 参数(参数过多)
 * @return {Array} 返回值无
 */
import {
	REGION
} from '@/common/citys.js'
export const getRegionList = () => {
	let provinces = REGION['86'];
	let provinceList = []
	for (let i in provinces) {
		provinceList.push({
			"value": i,
			"text": provinces[i],
		})
	}

	for (let j = 0, len = provinceList.length; j < len; j++) {
		let provinceCode = provinceList[j].value;
		let provinceText = provinceList[j].text;
		let citysList = []
		for (let c in REGION[provinceCode]) {
			citysList.push({
				"value": c,
				"text": REGION[provinceCode][c],
			})
		}
		if (citysList.length) {
			provinceList[j].children = citysList;
		}
	}

	for (let d = 0, len = provinceList.length; d < len; d++) {
		// let districtCode = 
	}
	console.log(provinceList)
}
