import axios from 'axios';

export const services = {
    getImages: (product) => {
        const params = {
            key: 'AIzaSyAtAncJWJM-9rRqEwBfgcZ8XbM4rccnPnE',
            cx: '013961518613539634984:b6cft-hffoc',
            searchType: 'image',
            lr: 'lang_pt',
            num: 1,
            q: product,
        };
        return axios
            .get('https://www.googleapis.com/customsearch/v1', {
                params,
            })
            .then((res) => res.data.items[0].link)
            .catch((err) => err);
    },
};
