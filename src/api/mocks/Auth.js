import { signupResolver } from '../../services/DataResolver';
import { userEmails } from './MockUserDb';

import { EMAIL_ALREADY_IN_USE } from '../../common/constants/ErrorMessages';

export const signup = data =>
    new Promise((resolve, reject) =>

        setTimeout(() => {
            if (Object.values(userEmails).includes(data.email))
                reject(EMAIL_ALREADY_IN_USE)
            else
                resolve({ data: signupResolver(data) })
        }, 300))