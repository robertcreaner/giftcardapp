import apisauce from 'apisauce';
import appConfig from '../Config/AppConfig';

const create = (baseURL = appConfig.baseUrl) => {
    const api = apisauce.create({
        baseURL,
        headers: {
            post: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
        timeout: 10000,
    });
    const getMerchants = () => api.get('merchant/merchant');
    return {
        getMerchants,
    };
};

export default {
    create,
};
