$(function(){
	initPieF();
})
function initPieF(){
	
	var myChart = echarts.init(document.getElementById('pieInfo'));
	myChart.hideLoading();
	var pieInfoOption = {
//				title:{
//			        text:"17",
//			        subtext: '总数',
//			        textStyle:{
//			        	color:"#000000"
//			        },
//			        subtextStyle:{
//			        	color:"#cecece"
//			        },
//			        left:"26%",
//			        top:"40%",
//			    },
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			y: 'center',
			x: 'right',
			align: 'left',//设置图例中文字的位置
			textStyle: {
				color: "#cecece"
			},
			color: ['#32A8FF','#02C800','#32A8Fa','#02C80f','#32A8Fe'],
			data: [{
				name: '直接访问',
				icon: 'circle',
			}, {
				name: '邮件营销',
				icon: 'circle'
			}, {
				name: '联盟广告',
				icon: 'circle'
			}, {
				name: '视频广告',
				icon: 'circle'
			}, {
				name: '搜索引擎',
				icon: 'circle'
			}],
			formatter: function(params) {
				return params;
			}
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			center: ['30%', '50%'],
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
				},
				emphasis: {
					show: false,
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 335,
					name: '直接访问'
				},
				{
					value: 310,
					name: '邮件营销'
				},
				{
					value: 234,
					name: '联盟广告'
				},
				{
					value: 135,
					name: '视频广告'
				},
				{
					value: 1548,
					name: '搜索引擎'
				}
			]
		}]
	};

	myChart.setOption(pieInfoOption);
	var _ZR = myChart.getZr();
	// var TextShape = require('zrender/shape/Text');
	_ZR.add(new echarts.graphic.Text({
		hoverable: false,
		style: {
			x: _ZR.getWidth() * 0.3,
			y: _ZR.getHeight() / 2 - 10,
			textFill: "#00ff00",
			textFont: 'bold 16px Microsoft YaHei',
			text: 17,
			textAlign: 'center',

		}
	}));
	_ZR.add(new echarts.graphic.Text({
		hoverable: false,
		style: {
			x: _ZR.getWidth() * 0.3,
			y: _ZR.getHeight() / 2,
			textFill: "#ff0000",
			textFont: 'normal 14px Microsoft YaHei',
			text: "\n" + "总数",
			textAlign: 'center',
		}
	}));
	_ZR.refresh();
}
