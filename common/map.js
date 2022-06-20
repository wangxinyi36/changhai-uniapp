import amapFile from '@/common/amap-wx.130.js'

const myAmapFun = new amapFile.AMapWX({
	key: '657b6547097bc5677048d4ec1c630c70Key'
});

export const getDrivingRoute = (lng, lat) => {
	myAmapFun.getDrivingRoute({
		origin: '116.617146,40.100454',
		destination: `${lat},${lng}`, //116.434446,39.90816
		success: function(data) {
			console.log(data)
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
			console.log(points)
			resolve({
				polyline: [{
					points: points,
					color: "#31d0e6",
					width: 6
				}]
			})
			if (data.paths[0] && data.paths[0].distance) {
				resolve({
					distance: data.paths[0].distance + '米'
				})
			}
			if (data.taxi_cost) {
				resolve({
					cost: '打车约' + parseInt(data.taxi_cost) + '元'
				})
			}

		},
		fail: function(info) {
			reject(info)
		}
	})

}
