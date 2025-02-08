import dayjs from 'dayjs';

const morning = document.getElementById('period-morning');
const afternoon = document.getElementById('period-afternoon');
const night = document.getElementById('period-night');

export function schedulesShow({ dailySchedules }) {
    try {
        morning.innerHTML = '';
        afternoon.innerHTML = '';
        night.innerHTML = '';

        dailySchedules.forEach((schedule) => {
            const item = document.createElement('li');
            const time = document.createElement('strong');
            const name = document.createElement('span');

            item.setAttribute('data-id', schedule.id);
            time.textContent = dayjs(schedule.when).format('HH:mm');
            name.textContent = schedule.name;

            const cancelIcon = document.createElement('img');
            cancelIcon.classList.add('cancel-icon');
            cancelIcon.setAttribute('src', './src/assets/cancel.svg');
            cancelIcon.setAttribute('alt', 'Cancel');

            item.append(time, name, cancelIcon);

            const hour = dayjs(schedule.when).hour();

            if (hour <= 12) {
                morning.appendChild(item);
            } else if (hour > 12 && hour <= 18) {
                afternoon.appendChild(item);
            } else {
                night.appendChild(item);
            }
        });
    } catch (error) {
        alert('Could not display the schedules');
        console.log(error);
    }
}
