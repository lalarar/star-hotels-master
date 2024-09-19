const hamburger = document.querySelector('.header-hamburger-icon');
const standardRoomTab = document.querySelector('#standard-room');
const executiveRoomTab = document.querySelector('#executive-room');
const kingRoomTab = document.querySelector('#king-room');

// Room containers
const roomSections = {
  'standard-room': document.querySelector('#standard-room-content'),
  'executive-room': document.querySelector('#executive-room-content'),
  'king-room': document.querySelector('#king-room-content')
};

// Utility function to remove active class from all tabs and hide all sections
function resetActiveTabs() {
  document.querySelectorAll('.room-section-header').forEach(tab => tab.classList.remove('active-header'));
  Object.values(roomSections).forEach(section => section.style.display = 'none');
}

// Show the selected room section and activate the corresponding tab
function activateTab(roomTab, roomSection) {
  resetActiveTabs();
  roomTab.classList.add('active-header');
  roomSection.style.display = 'block';
}

// Event listeners for tab clicks
standardRoomTab.addEventListener('click', () => activateTab(standardRoomTab, roomSections['standard-room']));
executiveRoomTab.addEventListener('click', () => activateTab(executiveRoomTab, roomSections['executive-room']));
kingRoomTab.addEventListener('click', () => activateTab(kingRoomTab, roomSections['king-room']));

// Initially show standard room section
activateTab(standardRoomTab, roomSections['standard-room']);
