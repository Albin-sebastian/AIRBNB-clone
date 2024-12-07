let iconTabs = document.querySelectorAll('.icons-tabs li');

let iconsTabsContent = document.querySelectorAll(".icons-tabs-content section");

let tabs = document.querySelectorAll
  ('.tabs li');


let tabContents = document.querySelectorAll('.tab-content section')

iconTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    iconsTabsContent.forEach((content) => {
      content.classList.remove('active-content');
    });
    iconTabs.forEach((tab) => {
      tab.classList.remove('active-icon')
    })
    iconsTabsContent[index].classList.add('active-content');
    iconTabs[index].classList.add('active-icon')
  })
})
console.log(iconsTabsContent);


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
// console.log(tabContents);


