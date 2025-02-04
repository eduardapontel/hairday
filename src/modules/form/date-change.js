import { schedulesDay } from '../schedules/load.js';

const selectedDate = document.getElementById('date');

selectedDate.onchange = () => schedulesDay();
