import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  // issuer: 'https://dev-connect.eurofins.local/adfs',
  issuer: 'https://uat-connect.eurofins.com/adfs/',

  // URL of the SPA to redirect the user to after login
  // redirectUri: window.location.origin + '/index.html',
  // redirectUri: window.location.origin,
  redirectUri: 'http://localhost:8088',

  showDebugInformation: true,

  jwks: {
    'keys': [
      {
        'kty': 'RSA',
        'use': 'sig',
        'alg': 'RS256',
        'kid': 'g46CE6YuwR4OQCDjJ7BwDvtf7PQ',
        'x5t': 'g46CE6YuwR4OQCDjJ7BwDvtf7PQ',
        // tslint:disable-next-line:max-line-length
        'n': '2nSazTJstfEyTeDywJ_Z7MKYND-eFE5CCxgh0hfiXnFe7E13-bkurv4aldzXgRP_vTm4T_l6Yn6iMlAJHOb5aeGsdovUcc0hOC8WFTcf1CzLmkxXvGEujIRxEtvZwj_PGXWfyXsXPV1vnxYhww566V5dZKthvsRedsdsVHiGNk2YC731TZkyOgPvjHEeQ9aw1tkQkBCgrB5nuvqcXYOq6UA_OFu3oVw-q8MHesjZi3i-0gZyWROR8KcT4lG3k9qDjVfop7jPUrmLacfhx25-aUzzagdR5rFWlSbrhbSiUQlzsqArAQ9eexu66VQtpawCzvKxv6zNdkj2CZvBXmpsJQ',
        'e': 'AQAB',
        'x5c': [
        // tslint:disable-next-line:max-line-length
        'MIIC8DCCAdigAwIBAgIQakXZglrVXZRLroVESFgY0TANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylBREZTIFNpZ25pbmcgLSBkZXYtY29ubmVjdC5ldXJvZmlucy5sb2NhbDAeFw0xOTAyMjExODIwNTdaFw0yMDAyMjExODIwNTdaMDQxMjAwBgNVBAMTKUFERlMgU2lnbmluZyAtIGRldi1jb25uZWN0LmV1cm9maW5zLmxvY2FsMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2nSazTJstfEyTeDywJ/Z7MKYND+eFE5CCxgh0hfiXnFe7E13+bkurv4aldzXgRP/vTm4T/l6Yn6iMlAJHOb5aeGsdovUcc0hOC8WFTcf1CzLmkxXvGEujIRxEtvZwj/PGXWfyXsXPV1vnxYhww566V5dZKthvsRedsdsVHiGNk2YC731TZkyOgPvjHEeQ9aw1tkQkBCgrB5nuvqcXYOq6UA/OFu3oVw+q8MHesjZi3i+0gZyWROR8KcT4lG3k9qDjVfop7jPUrmLacfhx25+aUzzagdR5rFWlSbrhbSiUQlzsqArAQ9eexu66VQtpawCzvKxv6zNdkj2CZvBXmpsJQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQDW9slbTsR2h/ztKLz9eirItQH1ssuZa9NvwmdP8ICAjAaDzo2/LOy3AOziG71hRSO9pCAyjJSlqXVVKkBsPsAVrrrZaN8iNlmBGvh7owG81yP2nDDPMPNfcJEpMH5vz/3rXFt1LcXbbQzBJVLCDP4RwB6Vl29tjJljxPa4SeTpsm8lZshg0ng1ZNxbYSrAx4Octzj7IrnUwQIyUPl71CJMQWbzagvEugOZv5WVIhlQtRG5IG4RVSXPm+3L2LGA2Vx49gLZSYE5NrJrW/hlJCcgOvtK2dtAuojuWIEjEfy1Uyvh8SF4Z1v0nYTQFnfOH1dR5oGbaqyoasqS7ddbNfXo'
        ]
        }
    ]
    },

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'c04c4d94-26db-43a9-9131-fa581b23f009',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',

  responseType: 'id_token token',

  // Login-Url
  // loginUrl: 'https://dev-connect.eurofins.local/adfs/oauth2/authorize',
  loginUrl: 'https://uat-connect.eurofins.com/adfs/oauth2/authorize',

  // logoutUrl: 'https://dev-connect.eurofins.local/adfs/oauth2/logout',
  logoutUrl: 'https://uat-connect.eurofins.com/adfs/oauth2/logout',

  // URL of the SPA to redirect the user after silent refresh
  // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshRedirectUri: 'http://localhost:8088/silent-refresh.html',
};
