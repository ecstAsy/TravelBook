import Request from '../../http/Request';
import API from '../../http/api';

export const v1_list = data => Request({
  url: `${API.home.list}`,
  method: 'GET',
  data
})

// export const v1_list = data => Request({
//   url: `${API.mock.list}`,
//   method: 'GET',
//   data
// })
