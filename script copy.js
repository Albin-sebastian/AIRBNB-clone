let tabs = document.querySelectorAll
  ('.tabs li');

let tabContents = document.querySelectorAll('.tab-content section')

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tabContents[index].classList.add('active');
    tabs[index].classList.add('active');
  })
})
console.log(tabContents);