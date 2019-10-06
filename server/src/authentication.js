const {
  AuthenticationService,
  JWTStrategy
} = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const {
  expressOauth,
  OAuthStrategy
} = require('@feathersjs/authentication-oauth');

class GitHubStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    const baseData = await super.getEntityData(profile);
    console.log({ baseData });
    return {
      ...baseData,
      email: profile.email,
      name: profile.name,
      id: profile.id,
      login: profile.login,
      avatar: profile.avatar_url,
      location: profile.location
    };
  }
}

module.exports = (app) => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('github', new GitHubStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
