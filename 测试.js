$(function () {
  // <input type="button" value="删除<li id='bj' name='beijing'>北京</li>"  id="b1"/>
  $("#b1").click(function () {
    $("#bj").remove();
  });

  // <input type="button" value="删除city所有的li节点   清空元素中的所有后代节点(不包含属性节点)"  id="b2"/>
  $("#b2").click(function () {
    $("#city").empty();
  });
});