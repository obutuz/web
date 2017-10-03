export const drawerWidth = 240;

const styles = theme => ({
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
