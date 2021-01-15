const state = {
    isDarkMode: false,
};
const mutations = {
    TOGGLE_DARK_MODE(state){
        state.isDarkMode = !state.isDarkMode;
    },
}
const actions = {
    toggleDarkMode({commit}){
        commit('TOGGLE_DARK_MODE');
    }
}
const getters = {
    isDarkMode(state){
        return state.isDarkMode;
    }
}

export default{
    state,
    mutations,
    actions,
    getters,
}