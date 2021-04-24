import * as passport from 'passport';
import User from '../models/user';

export default() =>{
    passport.serializeUser((user, done) =>{ //로그인에 1번실행
        done(null, user.id)
    });
    passport.deserializeUser<number>(async (id, done) => { //모든 라우터 실행할때마다
        try {
          const user = await User.findOne({
            where: { id },
          });
          if (!user) {
            return done(new Error('no user'));
          }
          return done(null, user); // req.user
    
        } catch (err) {
          console.error(err);
          return done(err);
        }
    });
}