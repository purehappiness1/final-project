import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems /*, secondaryListItems */ } from '../Dashboard/listitems';
import { addDeal } from "../../store/actions";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Chart,
  PieSeries,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { logOut } from "../../store/actions";
import { ValueScale } from '@devexpress/dx-react-chart';

import { withStyles } from '@material-ui/core/styles';

import {
  schemeSet1,
} from 'd3-scale-chromatic';

import { Palette } from '@devexpress/dx-react-chart';



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
  }
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
  someColor: {
    height: '300px'
    // backgroundColor: 'green',
    // opacity: '1',
    // position: 'absolute'
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
  const dispatch = useDispatch();
  const firstName = useSelector((state) => (state.firstName));
  const lastName = useSelector((state) => (state.lastName));
  const chartData = useSelector((state) => (state.chartData));
  const [openForm, setOpenForm] = React.useState(false);
  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleSave = () => {
    dispatch(addDeal(client.client, status.status))
    setClient(initState);
    setStatus(initState2)
    setOpenForm(false);
    // сохранение новой сделки в state
  }
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const initState = { client: '' }
  const initState2 = { status: '' }
  const [client, setClient] = React.useState(initState);
  const [status, setStatus] = React.useState(initState2);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setClient({ [name]: value });
  };

  const onChangeHandler2 = (event) => {
    const { name, value } = event.target;
    setStatus({ [name]: value });
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
            {firstName}&nbsp;{lastName}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          &nbsp;
          <Link color="inherit" href="/homepage" onClick={() => dispatch(logOut())}>
            Logout
      </Link>
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
                    valueField="total"
                    argumentField="status"
                  />
                  <Title text="Сделки 2020" textComponent={TextComponent} />
                  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Создать
      </Button>
                  <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Новая сделка</DialogTitle>
                    <DialogContent>
                      <form className={classes.form} noValidate
                        name="loginForm">
                        <TextField onChange={onChangeHandler}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="client"

                          type="text"
                          value={client.client}
                          label="Имя клиента"

                          name="client"

                          autoFocus
                        />
                        <TextField onChange={onChangeHandler2}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="status"
                          label="Статус сделки"
                          type="text"
                          value={status.status}
                          id="password"
                          autoComplete="current-password"
                        />
                      </form>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        отмена
          </Button>
                      <Button onClick={handleSave} color="primary">
                        сохранить
          </Button>
                    </DialogActions>
                  </Dialog>
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
