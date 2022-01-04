import { call } from "@redux-saga/core/effects";
import CustomAxios from "../../utils/api";

export function* getChartDataSaga({ userId, term }) {
  try {
    const result: Array<any> = yield call(
      CustomAxios.get,
      `/todo/${userId}/chart?term=${term}`
    );
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}
