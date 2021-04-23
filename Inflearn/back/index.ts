import express = require('express');
import {Request, Response, NextFunction} from 'express'

const app = express();
const prod : boolean = process.env.NODE_ENV === 'production'
// productio 모드에서는 파일 캐싱, 에러 메세지 감추기
// developlemnet 모드에서는 파일 캐시 방지, 디버깅 에러메세지를 보여준다.

app.set('port', prod ? process.env.PORT : 3065)

app.get('/', (req : Request, res : Response, next : NextFunction) =>{
    res.send('백엔드 정상 동작!');
})
// npx - gloabal 아닌 모듈을 실행
app.listen(app.get('port'), () =>{ //produection == null 아니면 dev 모드때는 3065 포트
    console.log(`server is running on ${process.env.PORT}`);
})
