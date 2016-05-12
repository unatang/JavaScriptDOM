window.onload = function()
{
    //创建元素节点p 
    var para = document.createElement("p");
    //创建文本节点，"I inserted"赋值给txt1
    var txt1 = document.createTextNode("I inserted");
    //创建元素节点,"em"赋值给emphasis
    var emphasis = document.createElement("em");
    //创建元素节点，"this"赋值给txt2
    var txt2 = document.createTextNode("this");
    //创建文本节点，" content."赋值给txt3
    var txt3 = document.createTextNode(" content.");
    //向节点para添加最后一个子节点  "I inserted"
    para.appendChild(txt1);
    //<em> this
    emphasis.appendChild(txt2);
    //<p> i inserted <em> this
    para.appendChild(emphasis);
    //<p> i inserted <em> this content.
    para.appendChild(txt3);
    //找到HTML文本里id="testdiv"的元素 
    var testdiv = document.getElementById("testdiv");
    //创建好的para元素赋值给testdiv元素
    testdiv.appendChild(para);
}