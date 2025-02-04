import dayjs from 'dayjs';

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

const todayDate = dayjs(new Date()).format('YYYY-MM-DD');

selectedDate.value = todayDate;
selectedDate.min = todayDate;

form.onsubmit = (e) => {
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

        const id = new Date().getTime();

        console.log({
            id,
            name,
            when,
        });
    } catch (error) {
        alert('It was not possible to schedule the appointment.');
        console.log(error);
    }
};
