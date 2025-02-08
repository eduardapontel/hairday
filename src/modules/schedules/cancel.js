import { schedulesDay } from './load.js';
import { scheduleCancel } from '../../services/schedule-cancel.js';

const periods = document.querySelectorAll('.period');

periods.forEach((period) => {
    period.addEventListener('click', async (event) => {
        if (event.target.classList.contains('cancel-icon')) {
            const item = event.target.closest('li');
            const { id } = item.dataset;

            if (id) {
                const isConfirm = confirm('Are you sure you want to cancel this appointment?');
                if (isConfirm) {
                    await scheduleCancel({ id });
                    schedulesDay();
                }
            }
        }
    });
});
