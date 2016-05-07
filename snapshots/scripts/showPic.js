function showPic(whichPic)
{
    // source值是文件路径 
    var source = whichPic.getAttribute("href");
    // 选取 id=placeholder的元素 <img>
    var palceholder = document.getElementById("placeholder");
    // 给placeholder里面的src属性设置新的值为 source
    placeholder.setAttribute("src", source);
}