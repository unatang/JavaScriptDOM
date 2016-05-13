function addLoadEvent(func)
{
    //window.onload的值保存在oldonload
    var oldonload = window.onload;
    //检查window.onload值的类型是否为function
    if (typeof window.onload !='function')
    {
        //执行func()
        window.onload = func;
    } else {
        //执行onload() func()
        window.onload = function()
        {
            oldload();
            func();
        }
    }
}