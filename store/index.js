export const state = () => ({
  joinMonth: 3,
  password: '',
  order: '',    // 2022.4.24
  tel: '',      // 2022.4.10
  level: '',     // 2022.4.10
})
export const mutations = {
  // 使い方：this.$store.commit("joinMonth", this.joinMonth);
  joinMonth(state, value) {
    state.joinMonth = value;
    // console.log(state.count);
  },
  password(state, value) {
    state.password = value;
  },
  tel(state, value) {
    state.tel = value;
  },
  level(state, value) {
    state.level = value;
  },
  order(state, value) {
    state.order = value;
  },
};
export const getters = {
  // 使い方：this.user.joinMonth = this.$store.getters.joinMonth
  joinMonth(state) {
    return state.joinMonth
  },
  password(state) {
    return state.password
  },
  tel(state) {
    return state.tel
  },
  level(state) {
    return state.level
  },
  order(state) {
    return state.order
  },
}
