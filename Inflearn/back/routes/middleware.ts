import { Request, Response, NextFunction } from "express";

const isLoggedIn = (req : Request, res : Response, next:NextFunction) =>{
    if(req.isAuthenticated()){ //req가 인증이 되었는지 확인 하는 여부
         next();
    }else{
        res.status(401).send('로그인이 필요합니다.')
    }
}

const isNotLoggedIn = (req : Request, res : Response, next:NextFunction) =>{
    if(!req.isAuthenticated()){ //req가 인증이 되었는지 확인 하는 여부
        next();
   }else{
       res.status(401).send('로그인한 사용자는 접근할 수 없습니다.')
   }
}

export {isLoggedIn, isNotLoggedIn};


