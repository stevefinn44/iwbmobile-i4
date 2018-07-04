interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'kEBhcYy2nso_Oo_ZSW3YDhGRiDtvEYiC',
  domain: 'inwhichbag.auth0.com',
  callbackURL: 'http://localhost:8100/callback',
  apiUrl: 'http://localhost:8518'
};
