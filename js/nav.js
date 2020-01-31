const activeTab = (element) => {
  removeActiveTab()
  element.classList.add('active-tab')
}

const removeActiveTab = () => {
  let tabs = document.getElementsByClassName('tab')
  
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab')
  }
}

