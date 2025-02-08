import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js';
import { schedulesShow } from '../schedules/show.js';
import { hoursLoad } from '../form/hours-load.js';

const selectedDate = document.getElementById('date');
export async function schedulesDay() {
    const date = selectedDate.value;
    const dailySchedules = await scheduleFetchByDay({ date });

    schedulesShow({ dailySchedules });

    hoursLoad({ date, dailySchedules });
}
