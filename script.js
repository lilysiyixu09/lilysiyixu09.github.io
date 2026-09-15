// 等页面所有 HTML 都加载完,再执行下面的代码
document.addEventListener('DOMContentLoaded', () => {

  // 找到所有需要"滚动渐入"效果的元素
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  // 创建一个观察器,监测这些元素是否进入了可视区域
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible'); // 进入视野就加上 class,触发 CSS 动画
      }
    });
  }, {
    threshold: 0.1
  });

  // 让观察器开始监测每一个元素
  revealElements.forEach(el => observer.observe(el));

});