//<!--Accordions found on: https://codepen.io/sureshrkm/pen/ZbzBpr-->
var accItem = document.getElementsByClassName("accordionItem");
//<!--Variable defined so elements are found by class name (identified in index.html)-->
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
//<!--Variable deifned so elements are found by class name and for item heading to open when clicked on-->
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  //<!--Closes information by according to class name-->
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
  //<!Opens information that is already closed-->
}
//<!--Variable deifned so elements are found by class name and for item heading to close when clicked again-->
