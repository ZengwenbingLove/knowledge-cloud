/**
 * 入口文件
 */

// require配置
// 默认加载都是baseUrl + moduleId(文件名)
requirejs.config({
  baseUrl: 'src',
  paths: {
    libs: 'libs',
    models: 'models',
    views: 'views',
    templates: 'templates'
  }
});


require(['models/wjj'], function (wjj) {
  console.log( wjj.name + ' : ' + wjj.path);
});
