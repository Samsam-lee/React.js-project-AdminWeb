
require('dotenv').config;
const passport         = require('passport');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;
const {OAuth2Client} = require('google-auth-library');

const User = require('../models/userTb.model');

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

passport.use(new GoogleStrategy({
      clientID: 'GOOGLE_CLIENT_ID',
      clientSecret: 'GOOGLE_CLIENT_SECRET',
      callbackURL: 'https://mydomain/auth/google/callback'
  }, function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
          user = profile;
          return done(null, user);
      });
  }
));

// router.post('/login', (req, res, next) => {
// 	async function verify() {
// 		const ticket = await client.verifyIdToken({
// 			idToken: req.body.it
// 		});
// 		const payload = ticket.getPayload();
// 		const userid = payload['sub']; //21자리의 Google 회원 id 번호

// 		connection.execute('SELECT `TOKEN` FROM `innoboost_user` WHERE `ID`= ?', [userid], (err, results) => {
// 			if (err) throw err;
// 			let token = '';
// 			if (results.length > 0) {
// 				console.log('DB에 있는 유저', results);
// 				token = updateToken(payload);
// 			} else {
// 				console.log('DB에 없는 유저');
// 				//새로 유저를 만들면 jwt 토큰값을 받아온다.
// 				token = insertUserIntoDB(payload);
// 			}
// 			res.send({
// 				token
// 			});
// 		});
// 	}
// 	verify().then(() => {}).catch(console.error);
// });

// const updateToken = (payload) => {
// 	const {
// 		sub,
// 		name,
// 		email
// 	} = payload;
// 	console.log(`id: ${sub}\n name:${name}\n, email:${email}`);
// 	const token = jwt.sign({
// 			id: sub,
// 			name,
// 			email
// 		},
// 		JWT_SECRET
// 	);

// 	connection.execute('UPDATE `innoboost_user` SET `TOKEN`= ? WHERE (`ID`= ?)', [token, sub], (err, results) => {
// 		console.log(results)
// 	});
// 	return token;
// }

// const insertUserIntoDB = (payload) => {
// 	const {
// 		sub,
// 		name,
// 		email
// 	} = payload;
// 	console.log(`id: ${sub}\n name:${name}\n, email:${email}`);
// 	const token = jwt.sign({
// 			id: sub,
// 			name,
// 			email
// 		},
// 		JWT_SECRET
// 	);

// 	connection.execute(
// 		'INSERT INTO `innoboost_user` (ID, EMAIL, NAME, TOKEN) VALUES (?, ?, ?, ?)',
// 		[sub, email, name, token],
// 		(err, results, fields) => {
// 			if (err) {
// 				console.log('fail');
// 				throw err;
// 			}

// 		}
// 	);
// 	return token;
// };


// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

// passport.use(new GoogleStrategy(
//   {
//     clientID      : process.env.GOOGLE_CLIENT_ID,
//     clientSecret  : process.env.GOOGLE_SECRET,
//     callbackURL   : '/auth/google/callback',
//     passReqToCallback   : true
//   }, function(request, accessToken, refreshToken, profile, done){
//     console.log('profile: ', profile);
//     var user = profile;

//     done(null, user);
//   }
// ));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
module.exports = passport;