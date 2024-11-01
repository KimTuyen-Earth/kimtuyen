function showTab(tabId) {
  // Hide all tab contents
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
  }
  
  // Remove active class from all links
  var links = document.querySelectorAll('.tabs a');
  links.forEach(link => link.classList.remove('active'));
  
  // Show the selected tab and set link as active
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}
  