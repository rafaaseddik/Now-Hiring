import {Observable, of} from 'rxjs';

import {Credentials, LoginContext, UserTypes} from './authentication.service';

export class MockAuthenticationService {

    login(context: LoginContext): Observable<Credentials> {
        return of({
            user: null,
            token: '123456',
            userType: UserTypes.COMPANY
        });
    }

    logout(): Observable<boolean> {
        return of(true);
    }
}
