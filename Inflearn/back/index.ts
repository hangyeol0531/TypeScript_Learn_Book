import express = require('express');
import hpp = require('hpp')
import morgan = require('morgan')
import cors = require('cors')
import cookieParser = require('cookie-parser')
import expressSession = require('express-Session')
import dotenv = require('dotenv')
import passport = require('passport')
import helmet = require('helmet')

import {Request, Response, NextFunction} from 'express'

dotenv.config();
const app = express();
const prod : boolean = process.env.NODE_ENV === 'production'

// productio 모드에서는 파일 캐싱, 에러 메세지 감추기
// developlemnet 모드에서는 파일 캐시 방지, 디버깅 에러메세지를 보여준다.
app.set('port', prod ? process.env.PORT : 3065)

if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
      origin: /nodebird\.com$/,
      credentials: true,
    }));
  } else {
    app.use(morgan('dev'));
    app.use(cors({
      origin: true,
      credentials: true,
    }))
}

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, // https -> true
      domain: prod ? '.nodebird.com' : undefined,
    },
    name: 'rnbck',
  }));

app.use(passport.initialize());
app.use(passport.session());
// middleware

app.get('/', (req : Request, res : Response, next : NextFunction) =>{
    res.send('백엔드 정상 동작!');
})
// npx - gloabal 아닌 모듈을 실행
//npx tsc --traceResolution -> 타이핑을 찾아오비는거 
app.listen(app.get('port'), () =>{ //produection == null 아니면 dev 모드때는 3065 포트
    console.log(`server is running on ${process.env.PORT}`);
})
