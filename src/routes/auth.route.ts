import { NextFunction, Request, Response, Express } from 'express';
import { PassportStatic } from 'passport';
import { signin, signup, home, logout } from '../controllers/auth.controller';

export const authRouter =  (app: Express, passport: PassportStatic) => {
  app.get('/signup', signup);
  app.get('/signin', signin);
  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/home',
      failureRedirect: '/signup',
    })
  );

  const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/signin');
  };

  app.get('/home', isLoggedIn, home);
  app.get('/logout', logout);
  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/home',
      failureRedirect: '/signin',
    })
  );
};
