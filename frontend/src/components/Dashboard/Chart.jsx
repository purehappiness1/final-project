import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems /*, secondaryListItems */ } from '../Dashboard/listitems';
import {
  Chart,
  PieSeries,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';

import { withStyles } from '@material-ui/core/styles';

import {
  schemeSet1,
} from 'd3-scale-chromatic';

import { Palette } from '@devexpress/dx-react-chart';

const chartData = [
  { country: 'Подписан договор', area: 67 },
  { country: 'Переговоры', area: 26 },
  { country: 'Первичный контакт', area: 12 },
  { country: 'Принимают решение', area: 7 },
  { country: 'Согласование договора', area: 11 },
  { country: 'Назначена встреча', area: 10 },
  { country: 'Сделка не состоялась', area: 7 },
  { country: 'Другое', area: 5 },
];

const salesData = [
  { month: 'Январь', sale: 12 },
  { month: 'Февраль', sale: 16 },
  { month: 'Март', sale: 10 },
  { month: 'Апрель', sale: 7 },
  { month: 'Май', sale: 5 },
  { month: 'Июнь', sale: 5 },
  { month: 'Июль', sale: 7 },
  { month: 'Август', sale: 5 },
  { month: 'Сентябрь', sale: 0 },
  { month: 'Октябрь', sale: 0 },
  { month: 'Ноябрь', sale: 0 },
  { month: 'Декабрь', sale: 0 },
];

const styles = {
  titleText: {
    textAlign: 'left',
  },
};

const TextComponent = withStyles(styles)(({ classes, ...restProps }) => (
  <Title.Text {...restProps} className={classes.titleText} />
));


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Statistics() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Панель управления
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
              <Paper>
              <Chart
          data={chartData}>
          <Palette scheme={schemeSet1} />
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title text="Сделки 2020" textComponent={TextComponent} />
          <Legend />
        </Chart>
        <Chart
        data={salesData}
        >
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentAxis />
          <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
          <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />
          <BarSeries
            valueField="sale"
            argumentField="month"
            scaleName="sale"
          />
          <Title text="Продажи 2020" textComponent={TextComponent} />
          
          </Chart>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      
    </div>
  );
}
