function showPic(whichPic)
{
    if (!document.getElementById("placeholder")) return true;
    // source值是文件路径 
    var source = whichPic.getAttribute("href");
    // 选取 id=placeholder的元素 <img>
    var palceholder = document.getElementById("placeholder");
    // 给placeholder里面的src属性设置新的值为 source
    placeholder.setAttribute("src", source);
    // 选取title属性的值给text
    if (!document.getElementById("description")) return false;
    if (whichPic.getAttribute("title"))
    {
        var text = whichPic.getAttribute("title");
    }
    else
    {
        var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3)
    {
        description.firstChild.nodeValue = text;
    }
    // 函数最后返回false，阻止浏览器因为onclick事件响应
    return false;
}


function prepareGallery()
{
    /* prepareGallery函数给每个<a>元素绑定onclick事件属性
        函数开始先检查浏览器的选择器
        onkeypress属性表示键盘操作
    */
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i < links.length; i++)
    {
        links[i].onclick = function(){
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}


function addLoadEvent(func)
{
    //窗口加载函数
    var oldonload = window.onload;
    if (typeof window.onload !='function')
    {
        window.onload = func;
    }
    else
    {
        windwo.onload = function()
        {
            oldonload();
            func();
        }
    }
}


addLoadEvent(prepareGallery);

