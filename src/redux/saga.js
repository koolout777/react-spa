import { all, takeLatest, setContext } from 'redux-saga/effects';
import { client } from './../utils/apollo';

// actionTypes   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { SCROLL_LOCK  } from './modules/utils/utilsTypes.js';
import { LOGIN_FORM } from "./modules/utils/utilsTypes.js";
import { LOGIN_REGISTRATION_FORM } from "./modules/utils/utilsTypes.js";

// sagaActions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { scrollLock  } from './modules/utils/utilsSaga.js';
import { loginForm } from "./modules/utils/utilsSaga.js";
import { loginRegistrationForm } from "./modules/utils/utilsSaga.js";

export default function* rootSaga() {
  yield setContext({ client })
  yield all([
    takeLatest(SCROLL_LOCK, scrollLock),
    takeLatest(LOGIN_FORM, loginForm),
    takeLatest(LOGIN_REGISTRATION_FORM, loginRegistrationForm),
  ])
}

