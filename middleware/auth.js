export default function({ store, route, error, redirect }) {
  // const isLogin = store.getters['user/isLogin']
  // if (!isLogin && route.auth) {
  // }
  // const role = store.state.user.role
  // const roles = route.meta.reduce((roles, meta) => {
  //   if (meta.roles && Array.isArray(meta.roles)) {
  //     roles.push(...meta.roles)
  //   }
  //   return roles
  // }, [])
  // if (role.length > 0) {
  //   if (!roles.includes(role)) {
  //     if (isLogin) {
  //       if (roles.every(e => e === 'guest')) {
  //         redirect('/')
  //       } else {
  //         error({
  //           statusCode: 403,
  //           message: '权限不足'
  //         })
  //       }
  //     } else {
  //       redirect('/auth/login')
  //     }
  //   }
  // }
}
