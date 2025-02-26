/**
 * 初始化 10x10 网格，并为每个格子绑定点击事件
 */
function initGrid() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // 单击：设置为当前选中的颜色
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--selected-color');
        });

            // 双击：清除颜色
            cell.addEventListener("dblclick", () => {
                    cell.style.backgroundColor = "#eae0d5";
                    });
        grid.appendChild(cell);
    }
  }
  
  /**
   * 保存当前 Grid 状态到 localStorage
   */
  function saveCurrentGrid() {
    const gridTitleInput = document.getElementById("gridTitle");
    let gridName = gridTitleInput.value.trim() || "Unnamed Grid";
    const cells = document.querySelectorAll(".cell");
    const cellColors = Array.from(cells).map(cell => cell.style.backgroundColor || "");
    localStorage.setItem("grid_" + gridName, JSON.stringify(cellColors));
    alert("Grid 已保存: " + gridName);
    updateGridList();
  }
  
  /**
   * 更新侧边栏中保存的 Grid 列表
   */
  function updateGridList() {
    const gridList = document.getElementById("gridList");
    gridList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("grid_")) {
        const gridName = key.substring(5);
        const gridItem = document.createElement("div");
        gridItem.textContent = gridName;
        gridItem.classList.add("grid-item");
        // 点击列表项加载对应的 Grid
        gridItem.addEventListener("click", () => {
          loadGrid(gridName);
        });
        gridList.appendChild(gridItem);
      }
    }
  }
  
  /**
   * 根据保存的状态加载 Grid
   */
  function loadGrid(gridName) {
    const cellColors = JSON.parse(localStorage.getItem("grid_" + gridName));
    if (cellColors) {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((cell, index) => {
        cell.style.backgroundColor = cellColors[index] || "#eae0d5";
      });
      document.getElementById("gridTitle").value = gridName;
    }
  }
  