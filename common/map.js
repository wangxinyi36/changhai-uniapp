import amapFile from '@/common/amap-wx.130.js'
import {
	getStorage
} from '@/common/fun.js'

const myAmapFun = new amapFile.AMapWX({
	key: '657b6547097bc5677048d4ec1c630c70'
});
var currentPoint = getStorage('currentPoint')

export function getDrivingRoute(lng, lat) {
	return new Promise((resolve, reject) => {
		let destination = `${lng},${lat}`;
		let origin = `${getStorage('currentPoint').longitude},${getStorage('currentPoint').latitude}`
		myAmapFun.getDrivingRoute({
			origin: decodeURIComponent(origin),
			destination: decodeURIComponent(destination),
			success: function(data) {
				let points = [];
				if (data.paths && data.paths[0] && data.paths[0].steps) {
					let steps = data.paths[0].steps;
					for (let i = 0; i < steps.length; i++) {
						let poLen = steps[i].polyline.split(';');
						for (let j = 0; j < poLen.length; j++) {
							points.push({
								longitude: parseFloat(poLen[j].split(',')[0]),
								latitude: parseFloat(poLen[j].split(',')[1])
							})
						}
					}
				}

				let distance = 0;
				if (data.paths[0] && data.paths[0].distance) {
					distance = data.paths[0].distance
				}
				// if (data.taxi_cost) {
				// 	resolve({
				// 		cost: '打车约' + parseInt(data.taxi_cost) + '元'
				// 	})
				// }
				resolve({
					polyline: [{
						points: points,
						color: "#31d0e6",
						width: 6
					}],
					distance,
				})

			},
			fail: function(info) {
				reject(info)
			}
		})
	})


}
