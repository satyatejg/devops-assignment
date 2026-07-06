import http from 'k6/http';

export const options = {
    vus: 50,
    duration: '2m'
};

export default function () {
    http.get('http://65.1.93.108:3000/api/info');
}

