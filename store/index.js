export const state = () => ({
  user: {
    email: 'satou1497@gmail.com',
  },
})
export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
}
