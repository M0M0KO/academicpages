/**
 * 自定义JavaScript文件，用于确保网站的交互功能正常工作
 */

// 立即执行函数，确保无论何时加载都会运行
(function() {
  // 初始化引用切换标签功能
  function initCitationTabs() {
    document.querySelectorAll('.citation-tabs .tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        // 获取当前details元素
        const details = this.closest('details');
        
        // 移除所有tab的active类
        details.querySelectorAll('.tab').forEach(function(t) {
          t.classList.remove('active');
        });
        
        // 添加当前tab的active类
        this.classList.add('active');
        
        // 隐藏所有内容
        details.querySelectorAll('.tab-content').forEach(function(content) {
          content.style.display = 'none';
        });
        
        // 显示当前tab对应的内容
        const tabId = this.getAttribute('data-tab');
        details.querySelector(`#${tabId}-content`).style.display = 'block';
      });
    });
  }

  // 初始化出版物筛选功能
  function initPublicationFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.publication-category');
    
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // 移除所有按钮的active类
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // 添加当前按钮的active类
          this.classList.add('active');
          
          const filterId = this.id;
          
          if (filterId === 'filter-all') {
            // 显示所有分类
            categories.forEach(category => {
              category.style.display = 'block';
            });
          } else {
            // 首先隐藏所有分类
            categories.forEach(category => {
              category.style.display = 'none';
            });
            
            // 只显示选定的分类
            const categoryId = filterId.replace('filter-', 'category-');
            const categoryElement = document.getElementById(categoryId);
            if (categoryElement) {
              categoryElement.style.display = 'block';
            }
          }
        });
      });
    }
  }

  // 在DOM完全加载后执行所有初始化功能
  function initAllFeatures() {
    initCitationTabs();
    initPublicationFilters();
    
    // 在这里可以添加更多需要初始化的功能
  }

  // 如果DOM正在加载中，等待DOMContentLoaded事件
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllFeatures);
  } else {
    // 如果DOM已经加载完毕，直接执行
    initAllFeatures();
  }
  
  // 如果页面使用了Turbolinks或其他动态加载机制，这里可以添加相应事件监听
  if (typeof window.Turbolinks !== 'undefined') {
    document.addEventListener('turbolinks:load', initAllFeatures);
  }
})(); 