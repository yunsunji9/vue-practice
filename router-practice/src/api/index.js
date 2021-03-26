import axios from 'axios';

// HTTP Request & Response와 관련된 기본설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// API 함수들을 정리
export function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}

export function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

export function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

export function fetchListItem(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

export function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

export function fetchAskItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}



