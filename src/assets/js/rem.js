/* eslint-disable*/
;(function(window) {
    // 获取document对象
   let doc = window.document;
   // 所有元素dom
   let docEle = doc.documentElement;
   // 寻找meta中是否有viewport;获取到的是meta元素
   let metaEl = doc.querySelector('meta[name="viewport"]');
   // 获取设备像素比 
   let devicePixlRatio = window.devicePixelRatio; //1
   function refreshRem() {
        // 获取视口宽度
        let width = docEle.getBoundingClientRect().width;

        // 获取在哪种设备运行 主要考虑ipad
        let ua = navigator.userAgent.toLowerCase();
        // 不在ipad的执行时，执行以下，就是普通手机执行;使用正则
        if(!/ipad/.test(ua)){
            // width / devicePixlRatio 不大于750. 不执行if
            if(width / devicePixlRatio > 750) {
                width = 750 * devicePixlRatio
            }
        }
        let rem = width / 10;
        docEle.style.fontSize = rem + 'px';
   };
   refreshRem();
   window.addEventListener('resize', function() {
       refreshRem();
   })
})(window);
