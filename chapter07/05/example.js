window.onload = function()
{
    //创建<p>元素
    var para = document.createElement("p");
    //字符串赋值给变量
    var info = "nodeName: ";
    //拼接字符串
    info += para.nodeName;
    info += " nodeType: ";
    //para是元素节点，所以para.nodeType等于1
    info += para.nodeType;
    alert(info);
}