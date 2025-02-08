import { apiConfig } from './api-config';

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
        console.log('Unable to cancel the schedule');
    }
}
