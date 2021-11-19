import bCrypt from 'bcrypt';
import { PassportStatic } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export default (passport: PassportStatic, user: any) => {
  const User = user;

  passport.serializeUser(function (user, done) {
    // done(null, user.id);
  });
  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    // 
  });

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true, // allows us to pass back the entire request to the
      },
      (req, email, password, done) => {
        const generateHash = (password: string) => {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8));
        };

        // User.findOne({ where: { emailId: email } }).then(function (user) {
        //   if (user) {
        //     return done(null, false, { message: 'Cette email est déja pris' });
        //   } else {
        //     let userPassword = generateHash(password);
        //     let data = {
        //       emailId: email,
        //       password: userPassword,
        //       firstName: req.body.firstname,
        //       lastName: req.body.lastname,
        //     };
        //     User.create(data).then(function (newUser, created) {
        //       if (!newUser) {
        //         return done(null, false);
        //       }
        //       if (newUser) {
        //         return done(null, newUser);
        //       }
        //     });
        //   }
        // });
      }
    )
  );

  passport.use(
    'local-signin',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        let User = user;
        const isValidPassword = (userpass: string, password: string) => {
          return bCrypt.compareSync(password, userpass);
        };
      }
    )
  );
};
