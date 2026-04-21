// 获取 第一个 li
const li = document.getElementById("showerweima");
//  获取图片
const img = document.getElementById("erweima");
//  鼠标放上去 → 显示
li.addEventListener("mouseenter", function() {
  img.style.display = "block";
});
//  鼠标离开 → 隐藏
li.addEventListener("mouseleave", function() {
  img.style.display = "none";
    
});

const allBoxes = document.querySelectorAll('.daohang ul li');/*获取所有li*/

    allBoxes.forEach(function(currentLi) {/*遍历所有li*/
  currentLi.addEventListener('mouseenter', function() {/*鼠标进入事件*/
    currentLi.style.opacity = '0.5';
  });
  currentLi.addEventListener('mouseleave', function() {
    currentLi.style.opacity = '1';
  });
});









