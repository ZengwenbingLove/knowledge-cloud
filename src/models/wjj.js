// 没有依赖，只返回对象
// define({
//   name: 'ggg'
// });

// 没有依赖，但是内部含有逻辑
// define(function () {
//   var a = 10;
//
//   return {
//     name: a + 100
//   }
// });

// 依赖
// path 出现. ..都是相对于当前目录 没有特殊符号默认都是baseUrl
define(['require', 'libs/lib'], function (require) {
  var lib = require('libs/lib');
  var path = require.toUrl('libs/lib');
  return {
    name: lib,
    path: path
  }
});
