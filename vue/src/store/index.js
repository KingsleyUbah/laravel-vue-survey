import { createStore } from "vuex"
import axiosClient from '../axios'

const tmpSurveys = [
    {
        id: 99,
        title: 'The UbahTheBuilder YouTube Channel',
        slug: 'the-ubahthebuilder-channel-yt',
        status: 'draft',
        image: 'https://picsum.photos/200/300',
        description: "My name is Kingsley and I am a Web Developer from Nigeria. I run the YouTube channel UbahTheBuilder and have amaased a legendary status for myself as a developer.",
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
                    options: [
                        { uuid: "136049bf-9eaa-4bf7-8bc7-21da904c1ad5", text: "USA"},
                        { uuid: "1dee9ee6-73f7-4cf5-a715-0afb7fcb696d", text: "Nigeria"},
                        { uuid: "45cd4dcf-85ef-4ab6-bcf7-c7a2f0f49457", text: "Germany"},
                        { uuid: "04c55b5a-5760-458c-94f6-a58caf272f10", text: "England"},
                        { uuid: "bd178b9b-1e51-4f02-919b-b9adf4900fc4", text: "India"},
                    ]    
                }
            },
            {
                id: 2,
                type: 'checkbox',
                question: 'Which language videos do you want to see on my channel?',
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                data: {
                    options: [
                        { uuid: "e973fdd6-9444-4eff-ba05-6d715a65dc23", text: "JavaScript"},
                        { uuid: "7a0dd9b7-43f4-4968-9943-8efa3da70ff3", text: "PHP"},
                        { uuid: "8b7b8364-3d06-48ce-8dc9-35acb50d0b4f", text: "HTML + CSS"},
                        { uuid: "deca32bb-e4d7-4b27-8aba-c43ca94a933f", text: "Python"},
                        { uuid: "7b3292c9-5677-47a4-86d0-aa0c895d0cf9", text: "Java"},
                    ]    
                }
            },
            {
                id: 3,
                type: 'radio',
                question: 'Which laravel framework do you love the most?',
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                data: {
                    options: [
                        { uuid: "82f6b1d2-fd79-4afa-9cc7-c10f874d21b8", text: "Laravel 5"},
                        { uuid: "34837ace-c036-438f-8516-853bdde70943", text: "Laravel 6"},
                        { uuid: "ae85cd33-4904-45f6-a74a-8ba30fd32ab6", text: "Laravel 7"},
                        { uuid: "fe7b25c4-3b3d-4dfe-84fb-39b821db58d5", text: "Laravel 8"},
                        { uuid: "66b7e357-c5a3-4c18-9098-981588a8e326", text: "Laravel 9"},
                    ]    
                }
            },
            {
                id: 4,
                type: 'text',
                question: 'What is your favorite YouTube channel?',
                description: null,
                data: {},
            },
            {
                id: 5,
                type: 'textarea',
                question: 'What do you think about the UbahTheBuilder YouTube channel?',
                description: 'Write your honest opinion. Everything is anonymous.',
                data: {},
            }
        ]
    },
    {
        id: 100,
        title: 'The UbahTheBuilder YouTube Channel',
        slug: 'the-ubahthebuilder-channel-yt',
        status: 'draft',
        image: 'https://picsum.photos/200/300',
        description: "My name is Kingsley and I am a Web Developer from Nigeria. I run the YouTube channel UbahTheBuilder and have amaased a legendary status for myself as a developer.",
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
                    options: [
                        { uuid: "136049bf-9eaa-4bf7-8bc7-21da904c1ad5", text: "USA"},
                        { uuid: "1dee9ee6-73f7-4cf5-a715-0afb7fcb696d", text: "Nigeria"},
                        { uuid: "45cd4dcf-85ef-4ab6-bcf7-c7a2f0f49457", text: "Germany"},
                        { uuid: "04c55b5a-5760-458c-94f6-a58caf272f10", text: "England"},
                        { uuid: "bd178b9b-1e51-4f02-919b-b9adf4900fc4", text: "India"},
                    ]    
                }
            },
            {
                id: 2,
                type: 'checkbox',
                question: 'Which language videos do you want to see on my channel?',
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                data: {
                    options: [
                        { uuid: "e973fdd6-9444-4eff-ba05-6d715a65dc23", text: "JavaScript"},
                        { uuid: "7a0dd9b7-43f4-4968-9943-8efa3da70ff3", text: "PHP"},
                        { uuid: "8b7b8364-3d06-48ce-8dc9-35acb50d0b4f", text: "HTML + CSS"},
                        { uuid: "deca32bb-e4d7-4b27-8aba-c43ca94a933f", text: "Python"},
                        { uuid: "7b3292c9-5677-47a4-86d0-aa0c895d0cf9", text: "Java"},
                    ]    
                }
            },
            {
                id: 3,
                type: 'radio',
                question: 'Which laravel framework do you love the most?',
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                data: {
                    options: [
                        { uuid: "82f6b1d2-fd79-4afa-9cc7-c10f874d21b8", text: "Laravel 5"},
                        { uuid: "34837ace-c036-438f-8516-853bdde70943", text: "Laravel 6"},
                        { uuid: "ae85cd33-4904-45f6-a74a-8ba30fd32ab6", text: "Laravel 7"},
                        { uuid: "fe7b25c4-3b3d-4dfe-84fb-39b821db58d5", text: "Laravel 8"},
                        { uuid: "66b7e357-c5a3-4c18-9098-981588a8e326", text: "Laravel 9"},
                    ]    
                }
            },
            {
                id: 4,
                type: 'text',
                question: 'What is your favorite YouTube channel?',
                description: null,
                data: {},
            },
            {
                id: 5,
                type: 'textarea',
                question: 'What do you think about the UbahTheBuilder YouTube channel?',
                description: 'Write your honest opinion. Everything is anonymous.',
                data: {},
            }
        ]
    }
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        },
        surveys: [...tmpSurveys],
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
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