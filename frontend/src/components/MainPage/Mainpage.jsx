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
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    width: "60%",
    height: "15px",
    margin: "50px auto",
    // padding: "10px",
  },
  content1: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    width: "200px",
    height: "30px",
    marginBottom: "15px",
    border: "1px solid",
    borderRadius: "3px",
    margin: "5px",
  },
  button: {
    width: "100px",
    height: "30px",
    marginBottom: "15px",
    border: "1px solid",
    borderRadius: "3px",
    margin: "5px",
    backgroundColor: "#8fc0a9",
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
              <h1 className={classes.h1}>Ваш бизнес растёт?</h1>
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
            <h3>Воронка продаж</h3>
            <p>
              Задача отдела продаж сделать так, чтобы потенциальные клиенты
              продвигались по воронке слева-направо. Сначала устанавливаем
              первичный контакт; потом прилагаем усилия, чтобы он посетил
              пробное; а конечной целью мы ставим "конверсию" потенциального
              клиента в постоянного ученика. Назначайте ответственного
              менеджера, который будет вести клиента по воронке и отмечайте
              лидов цветами: зеленым — теплых, желтым — сомневающихся, красным —
              вероятные отказы.
            </p>
            <img
              src="https://alfacrm.pro/images/screenshots/other/6.png"
              width="950"
              height="600px"
            />
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.box}>
            <h3>Поддержка и помощь на всех этапах</h3>
            <p>
              BetaCRM — одна из самых дружелюбных CRM для внедрения: на каждом
              этапе вам будут помогать наши специалисты из отдела поддержки. Мы
              поможем настроить воронку продаж с интеграциями, автоматические и
              триггерные рассылки, дополнительные поля, виджеты онлайн записи,
              кастомные отчеты и другие важные параметры системы. Для обращения
              в поддержку достаточно написать в ЧАТ справа снизу (два облачка).
              Можно попросить, чтобы вам перезвонили, или описать проблему в
              чате.
            </p>
            <img
              src="https://alfacrm.pro/images/screenshots/other/6.png"
              width="950"
              height="600px"
            />
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.box}>
            <h3>Интерактивный календарь</h3>
            <p>
              Календарь — основной инструмент работы любого бизнеса. Всё как на
              ладони: занятые и свободные аудитории, клиенты, встречи, пробные,
              отмены, отработки. При беглом взгляде на календарь всегда можно
              понять что у вас сейчас по расписанию.
            </p>
            <img
              src="https://alfacrm.pro/images/screenshots/calendar/3.png"
              width="950"
              height="600px"
            />
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.box}>
            <h3>Нас выбирают лидеры в своей отрасли</h3>
            <h5>
              Сегодня BetaCRM пользуются более 1000 компаний. Некоторых,
              вероятно, вы можете знать.
            </h5>
            <div className="imgs">
            <img
              src="https://alfacrm.pro/images/clients/iq007.png"
              width="150"
              height="70px"
            />
            <img
              src="https://alfacrm.pro/images/clients/usmas.png"
              width="150"
              height="70px"
            />
            <img
              src="https://alfacrm.pro/images/clients/menar.png"
              width="150"
              height="70px"
            />
            <img
              src="https://alfacrm.pro/images/clients/ligarobotov.png"
              width="150"
              height="70px"
            />
            <img
              src="https://alfacrm.pro/images/clients/smartunivercity.svg"
              width="150"
              height="70px"
            />
            <img
              src="https://alfacrm.pro/images/clients/rs.png"
              width="150"
              height="70px"
            />



            <img
              src="https://cdn-0.brodude.ru/jT8R6YZc6gRUDXH17Q-jAsbtFb74Z-VOJ6T1aI1x6WQ/rs:fill:0:0:0/g:ce/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL2Jyb2R1ZGUucnVfMy4wMy4yMDE0X3hxaWxEdUl2dmc1ODkuanBn"
              width="70"
              height="70px"
            />
            <img
              src="https://cdn-2.brodude.ru/JvstWGbCxRhY7pansK1qeXcHqhJG3vIzWkFGMvucZLM/rs:fill:640:407:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL2Jyb2R1ZGUucnVfNi4wMy4yMDE0Xzd5ajRHNXhQQ1ExQzEuanBn"
              width="90"
              height="70px"
            />
            <img
              src="https://cdn-2.brodude.ru/g8nAAvpy6W4FWFEVQCqkA_ALzEBSMyJvEwGtSjubrCo/rs:fill:640:317:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL2Jyb2R1ZGUucnVfNi4wMy4yMDE0X2xsN2hkbGV1M0liNXEuanBn"
              width="150"
              height="70px"
            />
            <img
              src="https://cdn-3.brodude.ru/Dy8U4c4y02kiIlZSUD9R22-e_Y97OhJUeOj8qqZTmpE/rs:fill:640:183:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL2Jyb2R1ZGUucnVfNi4wMy4yMDE0X2lXSElIWUJWYTJ2NVEuZ2lm"
              width="150"
              height="70px"
            />
            <img
              src="https://cdn-2.brodude.ru/FwK8PvWzQgIn8LG5O0ZWOrZ3tcEdk_5CqwaNYhZ9Wx4/rs:fill:640:469:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL2Jyb2R1ZGUucnVfNi4wMy4yMDE0X2x5cU9pNXYxOTBkYW8uanBn"
              width="120"
              height="70px"
            />
            <img
              src="https://cdn-0.brodude.ru/VdYuh0O0L-UnJx2zXb0K4Lj4NbhXJed65TL3-bEgJbk/rs:fill:640:479:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL2Jyb2R1ZGUucnVfNi4wMy4yMDE0X0huN0l2S0U2Y0RHcE0uanBn"
              width="110"
              height="70px"
            />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Container maxWidth="md" component="footer" className={classes.footer}> */}
      {/* <Box mt={5}> */}
      <div className={classes.contentContainer}>
        <div className={classes.content1}>
          <h5>BetaCRM</h5>
          <p>BetaCRM — CRM система для учебного центра. Sapienti sat.</p>
        </div>
        <div className="content2">
          <ul class="list-inline">
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Партнеры</a>
            </li>
            <li>
              <a href="#">Тарифы</a>
            </li>
            <li>
              <a href="#">Интеграции</a>
            </li>
          </ul>
        </div>
        <div className={classes.content3}>
          <h5>Подписка на наши новости</h5>
          <input
            className={classes.input}
            type="text"
            placeholder="Введите Ваш email"
          />
          <button className={classes.button}>Подписаться</button>
        </div>
      </div>
      {/* </Box> */}
      {/* </Container> */}
      {/* End footer */}
    </React.Fragment>
  );
}
