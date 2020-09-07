import { put, call } from "redux-saga/effects";
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { SCROLL_LOCK } from "./utilsTypes";
import { LOGIN_FORM } from "./utilsTypes";
import { LOGIN_REGISTRATION_FORM } from "./utilsTypes";

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function loginFormReq(data) {
  return data;
}

function loginRegistrationFormReq(data) {
  return data;
}

function scrollLockReq(data) {
  return data;
}

// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* scrollLock(action) {
  try {
    let response = yield call(scrollLockReq, action.payload);
    yield put({ type: `${SCROLL_LOCK}_SUCCESS`, payload: response });
  } catch (e) {
    yield put({ type: `${SCROLL_LOCK}_FAIL`, payload: e.response });
  }
}

export function* loginForm(action) {
  try {
    let response = yield call(loginFormReq, action.payload);
    yield put({ type: `${LOGIN_FORM}_SUCCESS`, payload: response });
  } catch (error) {
    yield put({ type: `${LOGIN_FORM}_FAIL`, payload: error });
  }
}

export function* loginRegistrationForm(action) {
  try {
    let response = yield call(loginRegistrationFormReq, action.payload);
    yield put({ type: `${LOGIN_REGISTRATION_FORM}_SUCCESS`, payload: response });
  } catch (error) {
    yield put({ type: `${LOGIN_REGISTRATION_FORM}_FAIL`, payload: error });
  }
}
