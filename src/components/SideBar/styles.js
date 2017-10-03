export const drawerWidth = 240;

const styles = theme => ({
  root: {
    float: 'left',
    width: 306,
  },
  wrapper: {
    position: 'fixed',
    height: '100%',
    background: '#fff',
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  drawerHeader: theme.mixins.toolbar,
});

export default styles;
