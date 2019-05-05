import Request from '../../http/Request';
import API from '../../http/api';

export const v1_note = data => Request({
  url: `${API.home.note}${data.id}/waypoints/`,
  method: 'GET',
})