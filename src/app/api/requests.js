import { API, setAccessToken } from './index';

export const getAccessToken = async () => {
    const endpoint = '/auth-gateway/v1/login';

    const username = '';
    const password = '';

    try {
        const response = await API.post(endpoint, { username, password });

        const accessToken = response.data.access_token;

        setAccessToken(accessToken);
    } catch (err) {
        console.error(err);
    }
};

export const getProfile = async () => {
    const endpoint = '/site-gateway/v1/user/summary';

    const response = await API.get(endpoint);

    return response.data;
};

export const getLeaderboardData = async (accountNumber) => {
    const endpoint = `/leaderboard/v1/leaderboard/for/validated_minutes?group_id=${accountNumber}`;

    const response = await API.get(endpoint);

    return response.data;
};

export const getViewingStats = async () => {
    const endpoint = `/member/v1/stats`;

    const response = await API.get(endpoint);

    return response.data;
};

export const getViewingHistory = async () => {
    const endpoint = `/site-gateway/v1/playlist/user/history?limit=6`;

    const response = await API.get(endpoint);

    return response.data;
};

export const getCertificateList = async (userId) => {
    const endpoint = `report/v1/certificates/of/completion/ind/list`;
    const query = `?member_id=${userId}&report_type=certs_all`;

    const response = await API.get(endpoint + query);

    return response.data;
};
