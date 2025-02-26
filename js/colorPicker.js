// 定义三组颜色，每组 4 个，按从浅到深排列
const yellowColors = ["#FFF9E3", "#FFF3B0", "#FFE684", "#FFDC48"];  // 温暖、柔和的黄色
const greenColors  = ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784"];  // 清新、自然的绿色
const redColors    = ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373"];  // 柔和、带点暖意的红色

// 合并成一个 12 个颜色的数组，顺序：第一行黄色系，第二行绿色系，第三行红色系
const colors = [...yellowColors, ...greenColors, ...redColors];
  /**
   * 初始化颜色选择器，将所有颜色选项添加到页面上
   */
  function initColorPicker() {
    const colorPicker = document.getElementById("colorPicker");
    colors.forEach(color => {
      const colorDiv = document.createElement("div");
      colorDiv.style.background = color;
      // 点击后设置全局 CSS 变量，用于更新选中颜色
      colorDiv.addEventListener("click", () => {
        document.documentElement.style.setProperty('--selected-color', color);
      });
      colorPicker.appendChild(colorDiv);
    });
  }
  
  // 设置默认选中颜色（使用第一个颜色）
  document.documentElement.style.setProperty('--selected-color', colors[0]);
  