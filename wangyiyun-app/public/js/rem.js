function remSize(){
    //获取设备的宽度
    var deviceWidth=document.documentElement.clientWidth||window.innerWidth
    if(deviceWidth>=750){
        deviceWidth=750
    }
    if(deviceWidth<=320){
        deviceWidth=320
    }
    // 750px-->1rem=100px
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'
    // 设置字体的大小
    document.querySelector('body').style.fontSize=0.3+'rem'

}
remSize()
window.onresize=function(){
    //窗口发生变化就调用这个函数
    remSize()
}