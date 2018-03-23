import httpClient from './httpClient';

class AuthClient {
  isAuthenticated() {
    // TODO Actually check the token
    return localStorage.getItem('token');
  }

  saveToken(token) {
    localStorage.setItem('token', token);
    //TODO Find a better place for this call
    return httpClient.get('/whoAmI');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    return new Promise((res) => {
      localStorage.removeItem('token');
      res();
    });
  }
}

export default new AuthClient();
