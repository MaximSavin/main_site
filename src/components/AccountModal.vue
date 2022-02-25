<script setup>
import { useSessionStore } from "@/stores/auth.js";
import { isEmpty, isNil } from 'ramda'
import IconClose from "./icons/IconClose.vue";

const emit = defineEmits(["closeAccount"]);
const auth = useSessionStore();
</script>

<template>
  <div
    class="uk-flex-top uk-modal-container uk-modal-container-medium uk-modal uk-flex uk-open"
    @click.stop="emit('closeAccount')"
  >
    <!-- <div id="choose-account" class="uk-flex-top uk-modal-container uk-modal-container-medium" uk-modal> -->
    <div class="uk-modal-dialog uk-margin-auto-vertical" @click.stop>
      <button class="uk-modal-close-default uk-icon uk-close" type="button" @click="emit('closeAccount')">
        <IconClose />
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
                <tr v-if="!auth.usersList.length">
                  <td colspan="4" style="text-align: center;">Loading...</td>
                </tr>
                <tr v-for="user in auth.usersList" :key="user.id">
                  <td class="uk-text-light">
                    <img src="@/assets/images/blockchain-minter.svg" class="table-icon" />
                    Minter
                  </td>
                  <td class="uk-width-expand uk-text-light">{{ user.name }}</td>
                  <td class="uk-text-light">{{ user.race }}</td>
                  <td class="uk-width-small uk-text-right">
                    <a class="uk-button uk-button-green uk-button-small" @click.prevent="auth.selectUser(user.id);emit('closeAccount')">select</a>
                  </td>
                </tr>
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
            <a href="#choose-rase" class="uk-button uk-button-blue uk-width-auto@s uk-width-1-1" uk-toggle
              >Играть за новую расу</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
