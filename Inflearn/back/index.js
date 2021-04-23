"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var prod = process.env.NODE_ENV === 'production';
// productio 모드에서는 파일 캐싱, 에러 메세지 감추기
// developlemnet 모드에서는 파일 캐시 방지, 디버깅 에러메세지를 보여준다.
app.set('port', prod ? process.env.PORT : 3065);
app.get('/', function (req, res, next) {
    res.send('백엔드 정상 동작!');
});
// npx - gloabal 아닌 모듈을 실행
//npx tsc --traceResolution
app.listen(app.get('port'), function () {
    console.log("server is running on " + process.env.PORT);
});
