import LoginPage from 'src/pages/LogInPage';
import {expect} from 'chai';

describe('Work in progres tests', () => {
    it('displays message with invalid credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials('foo', 'bar');

        expect(LoginPage.flash).to.include('Your username is invalid!');
    });
});