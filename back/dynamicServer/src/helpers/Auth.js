import {Passport} from "passport"
import ClientPasswordStrategy from "passport-oauth2-client-password"

Passport.use(new ClientPasswordStrategy(
  function (clientId, clientSecret, done) {
    Clients.findOne({clientId: clientId}, function (err, client) {
      if (err) {
        return done(err);
      }
      if (!client) {
        return done(null, false);
      }
      if (client.clientSecret != clientSecret) {
        return done(null, false);
      }
      return done(null, client);
    });
  }
));
