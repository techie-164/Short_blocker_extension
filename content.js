function removeShortsSections(){
    // Check for the shorts on the homepage and remove; 
  const shortSections = document.querySelectorAll('ytd-rich-section-renderer');
  shortSections.forEach(section => {
    if(section.innerText.includes('Shorts')){
      section.style.display = 'none';
    }
  });

  const secondSidebarItem = document.querySelector('#items > :nth-child(2)');
    // Chcek for the shorts button in sidebar and remove;
  if(secondSidebarItem && secondSidebarItem.innerText.includes('Shorts')){
    secondSidebarItem.style.display = 'none';
  }

  const allSidebarItems = document.querySelectorAll('ytd-guide-entry-renderer');
  // Check again to verify if all elements related to shorts are removed or not;
  allSidebarItems.forEach(item => {
    const title = item.querySelector('.title');
    if(title && title.textContent.trim() === 'Shorts'){
      item.style.display = 'none';
    }
  });
}

removeShortsSections();
// When website is reloaded check for shorts in all branches and childnodes and apply remove function; 
const observer = new MutationObserver(removeShortsSections);
observer.observe(document.body, { childList: true, subtree: true });
