<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { useStorage } from "@vueuse/core";
import { computed } from 'vue'

const emit = defineEmits(['closeAccount'])
const localUsersState = useStorage('users')
const userList = computed(() => JSON.parse(localUsersState.value))

const auth = useAuthStore()

const selectUser = (id) => {
  auth.setUsedId(id)
}

const switchUser = (id) => {
  auth.switchUsedId(id)
}

</script>

<template>
<div class="uk-flex-top uk-modal-container uk-modal-container-medium uk-modal uk-flex uk-open" @click.stop="emit('closeAccount')">
  <!-- <div id="choose-account" class="uk-flex-top uk-modal-container uk-modal-container-medium" uk-modal> -->
    <div class="uk-modal-dialog uk-margin-auto-vertical" @click.stop>
      <button class="uk-modal-close-default uk-icon uk-close" type="button" @click="emit('closeAccount')">
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
          <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
        </svg>
      </button>

      <div class="uk-modal-body">
        <div class="uk-grid uk-grid-xmedium" uk-grid>
          <div class="uk-width-1-1">
            <h3>Ваши игровые аккаунты</h3>
          </div>
          <div class="uk-width-1-1 uk-margin-small-top">
            <table class="uk-table uk-table-accounts">
              <thead>
                <tr>
                  <th class="">Раса</th>
                  <th class="uk-table-expand">Никнейм</th>
                  <th class="">Галактика</th>
                  <th class="uk-width-small uk-text-right">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="userList.length > 0">
                <tr v-for="user in userList" :key="user.id">
                  <td class="uk-text-light">
                    <img src="@/assets/images/blockchain-minter.svg" class="table-icon" />
                    Minter
                  </td>
                  <td class="uk-width-expand uk-text-light">{{ user.name }}</td>
                  <td class="uk-text-light">{{ user.race }}</td>
                  <td class="uk-width-small uk-text-right">
                    <a href="#" class="uk-button uk-button-green uk-button-small" @click.prevent="selectUser(user.id)">step2</a>
                    <a href="#" class="uk-button uk-button-green uk-button-small" @click.prevent="switchUser(user.id)">switch</a>
                  </td>
                </tr></template>
                <template v-else><tr><td colspan="4">Not found</td></tr></template>
                <!-- <tr>
                  <td class="uk-text-light">
                    <img src="@/assets/images/blockchain-everscale.svg" class="table-icon" />
                    Everscale
                  </td>
                  <td class="uk-table-expand uk-text-light">JohnyB</td>
                  <td class="uk-text-light">Everscale</td>
                  <td class="uk-width-small uk-text-right">
                    <a href="#" class="uk-button uk-button-green uk-button-small">Выбрать</a>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
          <div class="uk-width-1-1 uk-margin-small-top">
            <a href="#choose-rase"
              class="uk-button uk-button-blue uk-width-auto@s uk-width-1-1" uk-toggle>Играть за новую расу</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
