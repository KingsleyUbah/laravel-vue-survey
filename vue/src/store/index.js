import { createStore } from "vuex"
import axiosClient from '../axios'

const tmpSurveys = [
    {
        id: 100,
        title: 'The UbahTheBuilder YouTube Channel',
        slug: 'the-ubahthebuilder-channel-yt',
        status: 'draft',
        image: ,

        description: "My name is Kingsley and I am a Web Developer",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: [
            {
                id: 1,
                type: 'select',
                question: 'what country do you come from?',
                description: null,
                data: {
                    
                }
            }
        ]
    }
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        }
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit("setUser", data);
                    return data;
                })
        },

        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit("setUser", data);
                    return data;
                })
        },

        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit("logout");                    
                    return response;
                })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
})

export default store;