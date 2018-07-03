$(function(){
	initPieF();
})
function initPieF(){
	var yAxisLabel = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	var myChart = echarts.init(document.getElementById('barInfo'));
	var devinceInfoOption = {
		grid: {
			x: 80,
			y: 10,
			x2: 130,
			y2: 10,
			borderWidth: 0
		},
		xAxis: {
			type: 'value',
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			}, // 去除网格线
			axisLine: {
				show: false,
			},
			axisTick: { //刻度
				show: false,
			}
		},
		yAxis: {
			type: 'category',
			data: yAxisLabel,
			axisLabel: {
				show: true,
				textStyle: {
					color: "#000000"
				}
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: false
			}, // 去除网格线
			axisTick: { //刻度
				show: false,
			}
		},
		label: {
			show: true,
			position: "right"
		},
		barWidth: '15',
		series: [{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: 'bar',
			itemStyle: {
				normal: {
					label: {
						show: true,
						position: "right",
						textStyle: {
							color: "#666",
							fontSize: "14",
						},
					}
				}
			}
		}]
	};

	myChart.setOption(devinceInfoOption);

}
