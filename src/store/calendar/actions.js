import * as types from './types';
import * as api from '@/api/calendar';

export const setCalendarAction = async ({ commit }, params) => {
    api.setCalendar(params)
        .then(
            (response) => {
                const { data } = response
                commit(types.SET_CALENDAR, data)
            }
        ).catch(
            (e) => {
                throw new TypeError(e, 'error', 10);
            }
        )
};
