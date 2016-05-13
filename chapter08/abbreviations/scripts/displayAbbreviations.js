function displayAbbreviations() {
    //检查浏览器是否有这些属性
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 获取所有abbr元素
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();
// 对数组abbreviations循环
  for (var i=0; i<abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }
// 创建<dl></dl>元素
  var dlist = document.createElement("dl");
// 循环defs数组
  for (key in defs) {
    var definition = defs[key];
// 创建<dt>元素
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
// 创建<dd>元素
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
// 把<dt> <dd>添加到<dl>
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;
// 创建<h2>
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
//为文档主体添加<h2>子节点
  document.body.appendChild(header);
// 为文档主体添加<dl>子节点
  document.body.appendChild(dlist);
}
// 调用函数 参数为dispalyAbbreviations函数
addLoadEvent(displayAbbreviations);
    
    
    
    
    