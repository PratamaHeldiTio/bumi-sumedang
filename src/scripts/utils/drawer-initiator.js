const DrawerInitiator = {
  init({ drawer, button }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
};

export default DrawerInitiator;
