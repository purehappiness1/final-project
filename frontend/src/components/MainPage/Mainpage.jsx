import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Все права защищены © "}
      <Link color="inherit" href="https://material-ui.com/">
        Beta CRM
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    // marginTop: theme.spacing(8),
    // paddingTop: theme.spacing(3),
    // paddingBottom: theme.spacing(3),
    // [theme.breakpoints.up('sm')]: {
    // paddingTop: theme.spacing(6),
    // paddingBottom: theme.spacing(6),
    // },
  },
  test: {
    border: "1px solid red",
    borderRadius: "5px",
  },

  all: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    background: "#eee",
  },
  bannerArea: {
    width: "100%",
    height: "100vh",
    background: 'url("https://unsplash.it/1300/600?random")',
    backgroundSize: "cover",
  },
  contentArea: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
  },
  h1: {
    fontSize: "60px",
    color: "#fff",
  },
  container: {
    width: "70%",
    margin: "50px auto",
    padding: "10px",
  },
  box: {
    width: "100%",
    padding: "50px",
    background: "#fff",
    marginTop: "50px",
    borderRadius: "10px",
    boxShadow: "0 0 10px -3px rgba(0,0,0 .1)",
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.all}>
        <div className={classes.bannerArea}>
          <div className={classes.contentArea}>
            <div className={classes.content}>
              <h1 className={classes.h1}>Ваш учебный центр растёт?</h1>
              <h3>Не теряйте клиентов и увеличивайте доход</h3>
              <ul>
                <li>
                  Новая воронка продаж позволит сохранить и увеличить приток
                  клиентов;
                </li>
                <li>
                  Система сама рассчитает абонементы и снимет боль о платежах и
                  долгах;
                </li>
                <li>
                  Автоматические SMS и E-mail рассылки повысят посещаемость и
                  выручку;
                </li>
                <li>
                  Служба поддержки поможет настроить и адаптировать CRM под вас;
                </li>
              </ul>
              <Button
                href="/register"
                color="primary"
                variant="outlined"
                className={classes.content}
              >
                Register
              </Button>
              <Button
                href="/signin"
                color="primary"
                variant="outlined"
                className={classes.content}
              >
                Login
              </Button>
            </div>
          </div>
        </div>

        {/* main part */}

        <div className={classes.container}>
          <div className={classes.box}>
            <h3>Поддержка и помощь на всех этапах</h3>
            <p>
              CRM — одна из самых дружелюбных CRM для внедрения: на каждом этапе
              вам будут помогать наши специалисты из отдела поддержки. Мы
              поможем настроить воронку продаж с интеграциями, автоматические и
              триггерные рассылки, дополнительные поля, виджеты онлайн записи,
              кастомные отчеты и другие важные параметры системы. Для обращения
              в поддержку достаточно написать в ЧАТ справа снизу (два облачка).
              Можно попросить, чтобы вам перезвонили, или описать проблему в
              чате.
            </p>
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.box}>
            <h3>Поддержка и помощь на всех этапах</h3>
            <p>
              CRM — одна из самых дружелюбных CRM для внедрения: на каждом этапе
              вам будут помогать наши специалисты из отдела поддержки. Мы
              поможем настроить воронку продаж с интеграциями, автоматические и
              триггерные рассылки, дополнительные поля, виджеты онлайн записи,
              кастомные отчеты и другие важные параметры системы. Для обращения
              в поддержку достаточно написать в ЧАТ справа снизу (два облачка).
              Можно попросить, чтобы вам перезвонили, или описать проблему в
              чате.
            </p>
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.box}>
            <h3>Интерактивный календарь</h3>
            <p>
              Календарь — основной инструмент работы учебного центра. Всё как на
              ладони: занятые и свободные аудитории, уроки, педагоги, пробные,
              отмены, отработки. При беглом взгляде на календарь всегда можно
              понять кто придёт на урок, у кого из них заканчивается оплата.
              Можно легко отфильтровать по разным критериям, изменить тип
              отображения или состав карточки.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
