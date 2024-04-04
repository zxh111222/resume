function closeContent() {
  // 将内容区域隐藏起来
  document.getElementById("hidden-content").classList.remove("visible");
  document.getElementById("hidden-content").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
  // 点击图标时触发的函数
  document.getElementById("icon").addEventListener("click", function() {
    // 隐藏图标
    document.getElementById("icon").style.display = "none";
    document.getElementById("text1").style.display = "none";
    // 将内容区域显示出来
    document.getElementById("hidden-content").classList.remove("hidden");
    document.getElementById("hidden-content").classList.add("visible");
  });

  // 点击关闭按钮时触发的函数
  document.querySelector("#hidden-content .close").addEventListener("click", function() {
    closeContent();
    // 显示图标
    document.getElementById("icon").style.display = "block";
    document.getElementById("text1").style.display = "block";
  });
});