import * as http from './http';

export const setCalendar = function (params) {
    return http.postRequest('/prod/report/broker', params);
};
