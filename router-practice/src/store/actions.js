import { 
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList,
    fetchUserInfo,
    fetchAskItem,
    fetchListItem
} from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(res => {
    //             context.commit('SET_NEWS', res.data);
    //             return res;
    //         })
    //         .catch(err => console.log(err))
    // },

    // async FETCH_NEWS(context) {
    //     const response = await fetchNewsList();
    //     context.commit('SET_NEWS', response.data);
    //     return response;
    // },
    // FETCH_ASKS(context) {
    //     fetchAskList()
    //         .then(res => {
    //             context.commit('SET_ASKS', res.data);
    //             return res;
    //         })
    // },
    // FETCH_JOBS(context) {
    //     fetchJobsList()
    //         .then(res => {
    //             context.commit('SET_JOBS', res.data);
    //             return res;
    //         })
    // },
    FETCH_USER(context, name) {
        fetchUserInfo(name)
            .then(res => {
                context.commit('SET_USER', res.data)
            })
    },
    FETCH_ITEM(context, id) {
        fetchAskItem(id)
            .then(res => {
                context.commit('SET_ITEM', res.data)
            })
    },

    // FETCH_LIST({ commit }, pageName) {
    //     return fetchListItem( pageName )
    //         .then(res => {
    //             console.log('4');
    //             commit('SET_LIST', res.data);
    //             // return res;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    async FETCH_LIST({ commit }, pageName) {
        try {
            const res = await fetchListItem( pageName );
            commit('SET_LIST', res.data);
        } catch(error) {
            console.log(error);
        }
        
    }
}