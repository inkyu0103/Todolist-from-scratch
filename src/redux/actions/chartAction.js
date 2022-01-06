export const GET_CHART_DATA = "GET_CHART_DATA";

export const SUCCESS_GET_CHART = "SUCCESS_GET_CHART";

//redux saga 내부에서 put 하는 함수들

export const SEND_SUCCESS_CHART = ({ chartData }) => ({
  type: SUCCESS_GET_CHART,
  chartData,
});

// 컴포넌트에서 dispatch 하는 함수들

export const getChartData = ({ userId, term }) => ({
  type: GET_CHART_DATA,
  userId,
  term,
});
