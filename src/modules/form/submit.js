import dayjs from 'dayjs';
import { newSchedule } from '../../services/new-schedule.js';
import { schedulesDay } from '../schedules/load.js';

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

const todayDate = dayjs(new Date()).format('YYYY-MM-DD');

selectedDate.value = todayDate;
selectedDate.min = todayDate;

form.onsubmit = async (e) => {
    e.preventDefault();

    try {
        const name = clientName.value.trim();

        if (!name) {
            return alert("Please provide the customer's name");
        }

        const hourSelected = document.querySelector('.hour-selected');

        if (!hourSelected) {
            alert('Select a time');
        }

        const [hour] = hourSelected.innerText.split(':');

        const when = dayjs(selectedDate.value).add(hour, 'hour');

        const id = String(new Date().getTime());

        await newSchedule({
            id,
            name,
            when,
        });

        await schedulesDay();

        clientName.value = '';
    } catch (error) {
        alert('It was not possible to schedule the appointment.');
        console.log(error);
    }
};
