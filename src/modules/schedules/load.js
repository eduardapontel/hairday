import { hoursLoad } from '../form/hours-load';

const selectedDate = document.getElementById('date');
export function schedulesDay() {
    const date = selectedDate.value;
    hoursLoad({ date });
}
