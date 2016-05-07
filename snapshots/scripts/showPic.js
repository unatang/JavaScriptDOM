function showPic(whichPic)
{
    // source值是文件路径 
    var source = whichPic.getAttribute("href");
    // 选取 id=placeholder的元素 <img>
    var palceholder = document.getElementById("placeholder");
    // 给placeholder里面的src属性设置新的值为 source
    placeholder.setAttribute("src", source);
    // 选取title属性的值给text
    var text = whichPic.getAttribute("title");
    //选取id等于description的元素给变量description
    var description = document.getElementById("description");
    //把text的值给description元素的第一个子节点的节点值
    description.firstChild.nodeValue = text;
}