// 保持させるデータ
export const state = () => ({
  mailAddress: '',
  password: '',
  loggedIn: false,
  join: 0   // 1=参加、2=不参加、else=未設定
})

// 同期処理
export const mutations = {

  // ログイン処理
  loginState(state, mailAddress, password) {
    state.mailAddress = mailAddress;
    state.password = password;
    state.loggedIn = true;
  },
  //ログアウト処理
  logoutState(state) {
    state.loggedIn = false;
  },
}
