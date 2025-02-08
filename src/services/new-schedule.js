import { apiConfig } from './api-config.js';

export async function newSchedule({ id, name, when }) {
    try {
        await fetch (`${apiConfig.baseURL}/schedules`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, name, when }),
        })

        alert("Scheduling completed successfully!")
    } catch (error) {
        console.log(error);
        alert('Unable to schedule, please try again later');
    }
}
