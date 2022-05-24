export const state = () => ({
  joinMonth: 0,
  joinYear: 0,    // 2022.5.12
  join: '',                   // 2022.5.12
  userName: '',       // 同じ人がkaiinに来た時、1度だけ実行するための変数
  nameSets: [],     // userNameは不要と思う。後で調べる
  password: '',
  order: '',    // 2022.4.24
  tel: '',      // 2022.4.10
  level: '',     // 2022.4.10
})
export const mutations = {
  // 使い方：this.$store.commit("joinMonth", this.joinMonth);
  nameSets(state, value) {
    // console.log('mutations/nameSets', value);
    // state.nameSets.push(value)   // こちらにするとエラーになる
    state.nameSets = value;
  },
  joinMonth(state, value) {
    state.joinMonth = value;
    // console.log(state.count);
  },
  joinYear(state, value) {   // 2022.5.12
    state.joinYear = value;
  },
  join(state, value) {   // 2022.5.12
    state.join = value;
  },
  userName(state, value) {   // 2022.5.12
    state.userName = value;
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
  nameSets(state) {
    return state.nameSets;
  },
  joinMonth(state) {
    return state.joinMonth
  },
  joinYear(state) {   // 2022.5.12
    return state.joinYear
  },
  join(state) {   // 2022.5.12
    return state.join
  },
  userName(state) {   // 2022.5.12
    return state.userName
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
