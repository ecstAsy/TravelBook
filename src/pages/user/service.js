import Request from '../../http/Request';
import API from '../../http/api';

export const v2_user = data => Request({
  url: `${API.user.info}${data.id}/v2/`,
  method: 'GET'
})