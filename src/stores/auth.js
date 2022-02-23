import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core";
import wretch from 'wretch'

async function getAuth() {
  return await wretch("https://api.galaxyonline.io/user/auth").get().json()
}

const authData = await getAuth()

const localAuthState = useStorage('auth', authData)
const localUsersState = useStorage('users', JSON.stringify([]))

// console.log(localAuthState.value)

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      authData,
      userData: {},
      users: [],
      selectedId: null,
      selectedUser: null,
      localAuthState,
    }
  },
  actions: {
    async setUserData(userData) {
      this.userData = userData
      this.users = await wretch("https://api.galaxyonline.io/user/auth/telegram")
        .headers({
          'X-CSRF-TOKEN': this.csrf,
          // 'origin': 'https://galaxy-main.herokuapp.com/'
        })
        .query({ domain: "" })
        // .options({ mode: "no-cors" })
        // .options({ credentials: "cors", mode: "cors" })
        .post(userData)
        .error(500, (err) => console.log(err.status))
        .json((json) => {
          localUsersState.value = JSON.stringify(json.users)
          return json.users
        })
    },
    async setUsedId(id) {
      this.selectedId = id
      const step2 = await wretch("https://api.galaxyonline.io/user/auth/telegram-step2")
        .headers({
          'X-CSRF-TOKEN': this.csrf
        })
        .query({ id })
        .get().json()
      console.log(step2)
    }
  },
  getters: {
    csrf: (state) => {
      return state.authData.csrf
    },
    cookies: (state) => {
      return state.authData.cookies
    },
  }
});