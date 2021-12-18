import { signupResolver } from '../../services/DataResolver';
import { userCredentials, userEmails } from './MockUserDb';

import { EMAIL_ALREADY_IN_USE, INVALID_CREDENTIALS, NO_SUCH_USER } from '../../common/constants/ErrorMessages';
import { SIGNIN_SUCCESS } from '../../common/constants/SuccessMessages';

export const signup = data =>
    new Promise((resolve, reject) =>
        setTimeout(() => {

            if (Object.values(userEmails).includes(data.email))
                reject({ data: EMAIL_ALREADY_IN_USE })
            else
                resolve({ data: signupResolver(data) })
        }, 300))

export const signin = data =>
    new Promise((resolve, reject) =>
        setTimeout(() => {

            let user = Object.values(userCredentials).filter(item => item.email === data.email)[0]
            if (user)
                if (user.password === data.password)
                    resolve({ data: SIGNIN_SUCCESS })
                else
                    reject({ data: INVALID_CREDENTIALS })
            else
                reject({ data: NO_SUCH_USER })
        }, 300)
    )