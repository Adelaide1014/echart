/**
 * 数据更新时方法
 * 
 * @param {Object} bean     echart实例
 * @param {Object} option   选项设置
 * @param {Object} domId    渲染实例domId
 */
function disposeEchart(bean,option,domId) {
	if(bean != null) {
		bean.dispose()
	}

	bean = echarts.init(document.getElementById(domId));
	bean.setOption(option);

}

/**
 * 数据更新时方法
 * 
 * @param {Object} bean     echart实例
 * @param {Object} option   选项设置
 * @param {Object} domId    渲染实例domId
 */
function updateEchart(bean,option,domId) {
	if(bean == null) {
		bean = echarts.init(document.getElementById(domId));
	}
	bean.setOption(option);
}