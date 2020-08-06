import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { sendSignup } from '../../store/actions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Все права защищены © '}
      <Link color="inherit" href="https://material-ui.com/">
        Beta CRM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {

  const dispatch = useDispatch();
  const initState = {firstName: ''}
  const initState2 = {lastName: ''}
  const initState3 = {email: ''}
  const initState4 = {password: ''}
  const [firstName, setFirstName] = useState(initState);
  const [lastName, setLastName] = useState(initState2);
  const [email, setEmail] = useState(initState3);
  const [password, setPassword] = useState(initState4);
  const classes = useStyles();

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFirstName({[name]: value});
  };

  const onChangeHandler2 = (event) => {
    const {name, value} = event.target;
    setLastName({[name]: value});
  };

  const onChangeHandler3 = (event) => {
    const {name, value} = event.target;
    setEmail({[name]: value});
  };

  const onChangeHandler4 = (event) => {
    const {name, value} = event.target;
    setPassword({[name]: value});
  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
      if (!firstName.firstName) alert("введите имя!"); 
      if (!lastName.lastName) alert("введите фамилию!"); 
      if (!email.email) alert("введите email!"); 
      if (!password.password) alert("введите пароль!"); 
      setFirstName({firstName: ''});
      setLastName({lastName: ''});
      setEmail({email: ''});
      setPassword({password: ''});
    };
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Зарегистрироваться
        </Typography>
        <form onSubmit={onSubmitHandler} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField onChange={onChangeHandler}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                type="text"
                value={firstName.firstName}
                required
                fullWidth
                id="firstName"
                label="Имя"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField onChange={onChangeHandler2}
                variant="outlined"
                required
                fullWidth
                id="lastName"

                

                type="text"
                value={lastName.lastName}
                label="Фамилия"

                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={onChangeHandler3}
                variant="outlined"
                required
                fullWidth
                id="email"

                

                type="email"
                value={email.email}
                label="Email адрес"

                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={onChangeHandler4}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                value={password.password}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Я хочу получать вдохновление, рекламную рассылку по email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          
            

            onClick={() => dispatch(sendSignup(firstName.firstName, lastName.lastName, email.email, password.password))}>
            Зарегистрироваться

          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Уже есть аккаунт? Войти
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
