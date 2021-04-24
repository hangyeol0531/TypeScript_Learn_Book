import * as express from 'express'
import * as bcrypto from 'bcrypt'
import { isLoggedIn } from './middleware';
import User from '../models/user';

const router = express.Router();

router.get('/', isLoggedIn, (req, res) =>{
    const user = req.user!.toJSON() as Partial<User>; // ? undefined 나 null이면 코드 중지
    delete user.password;
    return res.json(user)
});

router.post('/', async(req, res, next) =>{
    try{
        const exUser = await User.findOne({
            where : {
                userId : req.body.userId,
            }
        });

        if(exUser){
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }

        const hashedPassword = await bcrypto.hash(req.body.hashedPassword, 12); //암호화 하는데 1초면 적당
        const newUser = await User.create({
            nickname : req.body.nickname,
            userId : req.body.userId,
            password : hashedPassword,
        });
        return res.status(200).json(newUser)
    }catch(error){
        console.log(error);
    }
})