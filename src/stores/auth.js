import { defineStore } from "pinia"
import wretch from 'wretch'
import { isEmpty, isNil } from 'ramda'

const authData = await getAuthSession()

async function getAuthSession() {
  return await wretch("https://api.galaxyonline.io/user/auth")
    .options({ credentials: "include", mode: "cors" })
    .get()
    .json()
    .catch(error => { return {} })
}

export const useSessionStore = defineStore("session", {
  state: () => {
    return {
      usersList: [],
      csrf: !isEmpty(authData.csrf) ? authData.csrf : null,
      cookies: !isEmpty(authData.cookies) ? authData.cookies : null,
      currentUser: !isEmpty(authData.user) ? authData.user : null,
      currentUserId: !isEmpty(authData.user) ? authData.user.id : null,
      authTime: Date.now(),
    }
  },
  actions: {
    // Авторизация через телеграм шаг первый
    async telegramAuthStep1(userData) {
      this.userData = userData
      this.usersList = await wretch("https://api.galaxyonline.io/user/auth/telegram")
        .headers({ 'X-CSRF-TOKEN': this.csrf })
        .query({ domain: "" })
        // .options({ mode: "no-cors" })
        // .options({ credentials: "cors", mode: "cors" })
        .options({ credentials: "include", mode: "cors" })
        .post(userData)
        .error(500, (err) => console.log(err.status))
        .error((err) => console.log(err.status))
        .json((json) => {
          // localUsersState.value = JSON.stringify(json.users)
          return json.users
        })
    },
    // Авторизация через телеграм шаг второй
    async telegramAuthStep2(id) {
      const step2 = await wretch("https://api.galaxyonline.io/user/auth/telegram-step2")
        .headers({ 'X-CSRF-TOKEN': this.csrf })
        .options({ credentials: "include", mode: "cors" })
        .query({ id })
        .get().json()
        .catch(error => { return {} })
      if (!isEmpty(step2)) {
        this.currentUserId = id
        this.currentUser = step2.user
      }
    },
    // Смена пользователя
    async switchUsedId(id) {
      this.selectedId = id
      const switchUser = await wretch("https://api.galaxyonline.io/user/switch/login")
        .headers({ 'X-CSRF-TOKEN': this.csrf })
        .options({ credentials: "include", mode: "cors" })
        .post({ id }).json()
        .catch(error => { return {} })
      if (!isEmpty(switchUser)) {
        this.currentUserId = id
        this.currentUser = switchUser.user
      }
    },
    async getUsersList() {
      const usersList = await wretch("https://api.galaxyonline.io/user/switch/list")
        .headers({ 'X-CSRF-TOKEN': this.csrf })
        .options({ credentials: "include", mode: "cors" })
        .get().json()
        .catch(error => { return {} })
      this.usersList = usersList
    },
    selectUser(id) {
      if (isNil(this.currentUser)) {
        this.telegramAuthStep2(id);
      } else {
        this.switchUsedId(id);
      }
    },
    updateSession() {
      wretch("https://api.galaxyonline.io/user/auth")
        .options({ credentials: "include", mode: "cors" })
        .get()
        .json((json) => {
          console.log(json)
          this.csrf = !isEmpty(json.csrf) ? json.csrf : null
          this.cookies = !isEmpty(json.cookies) ? json.cookies : null
          this.currentUser = !isEmpty(json.user) ? json.user : null
          this.currentUserId = !isEmpty(json.user) ? json.user.id : null
        })
        .catch(error => { return {} })
    },
    // user/auth/exit
    async logout() {
      const logout = await wretch("https://api.galaxyonline.io/user/auth/exit")
        .headers({ 'X-CSRF-TOKEN': this.csrf })
        .options({ credentials: "include", mode: "cors" })
        .get().json((json) => { return json.ok })
        .catch(error => { return {} })
      if (logout) {
        this.currentUser = null
        this.currentUserId = null
        this.usersList = []
        this.updateSession()
      }
    }
  },
  getters: {
    isAuth: (state) => {
      // console.log("isAuth triggeted")
      if (isEmpty(state.usersList) && !isNil(state.currentUser)) {
        // console.log("userList empty, but user is auth — getting usersList...")
        state.getUsersList()
      } else {
        // console.log("usersList not empty or currentUser not auth")
      }
      return !isNil(state.currentUser)
    },
  }
});