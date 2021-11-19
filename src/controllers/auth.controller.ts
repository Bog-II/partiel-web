import { Request, Response } from 'express';

export const signup = (req: Request, res: Response) => {
  res.render('signup');
};

export const signin = (req: Request, res: Response) => {
  res.render('signin');
};

export const home = (req: Request, res: Response) => {
  res.render('home');
};

export const logout = (req: any, res: Response) => {
  req.session.destroy((err: Error) => {
    res.redirect('/signin');
  });
};
