import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   vus: 20,
//   duration: '2m',
// };

export const options = {
  vus: 100,
  duration: '3m',
};

export default function () {

  let res = http.get('http://65.1.93.108:3000/');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

