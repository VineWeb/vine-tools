var _ = require('loadsh')
var utils = require('./utils/index.js');
var calender = require('./utils/calendar.js')
const random = (length = 100) =>  {
  return Math.floor(Math.random() * length)
}
// 处理超过一万的数值
const addCommas = (number) => {
  // 将数值转为字符串
  let str = number.toString();
  
  // 匹配数值的整数部分和小数部分
  let parts = str.split('.');
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  
  // 在整数部分添加逗号分隔符
  let pattern = /(\d)(?=(\d{3})+$)/g;
  integerPart = integerPart.replace(pattern, '$1,');
  
  // 返回处理后的数值
  return integerPart + decimalPart;
};

// 将小数转换为百分比，保留两位小数
const decimalToPercentage = (number) => {
  const num = Number(number);
  return (num * 100).toFixed(2);
};

var methods = {
  random,
  // 设置 localStorage
	setStorage: function (key, value, day) {
		localStorage[key] = JSON.stringify({
			value: value,
			expired: day === undefined ? undefined : Date.now() + 1000 * 60 * 60 * 24 * day
		})
	},

	// 获取 localStorage
	getStorage: function (key) {
		if (localStorage[key] === undefined) {
			return null
		}
		var obj = JSON.parse(localStorage[key])
		if (obj.expired === undefined || Date.now() < obj.expired) {
			return obj.value
		} else {
			delete localStorage[key]
		}
	},
  // 删除 localStorage
	delStorage: function (key) {
		localStorage.removeItem(key);
	},
  addCommas,
  decimalToPercentage
};

module.exports = methods;