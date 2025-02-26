document.addEventListener("DOMContentLoaded", () => {
    // 初始化颜色选择器和网格
    initColorPicker();
    initGrid();
    updateGridList();
  
    // 绑定侧边栏切换事件
    document.getElementById("toggleBtn").addEventListener("click", toggleSidebar);
    
    // 绑定保存按钮事件
    document.getElementById("saveGridBtn").addEventListener("click", saveCurrentGrid);
    
    // 当窗口大小改变时，让主区域滚动到顶部
    window.addEventListener('resize', () => {
      document.getElementById("gridContainer").scrollTop = 0;
    });
  });
  
  /**
   * 切换侧边栏的显示状态
   */
  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
  }
  