<script setup>
import TelegramLogin from "@/components/TelegramLogin.vue";

const emit = defineEmits(['closeAuth', 'closeAuthChain'])
</script>

<template>
  <div class="uk-flex-top uk-modal-container uk-modal-container-small uk-modal uk-flex uk-open" @click.stop="emit('closeAuth')">
    <div class="uk-modal-dialog uk-margin-auto-vertical" @click.stop>
      <!-- <button class="uk-modal-close-default" type="button" uk-close></button> -->
      <button class="uk-modal-close-default uk-icon uk-close" type="button" @click="emit('closeAuth')">
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
          <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
        </svg>
      </button>

      <div class="uk-modal-body">
        <div class="uk-grid uk-grid-xmedium" uk-grid>
          <div class="uk-width-1-1">
            <h3>Вход в аккаунт</h3>
          </div>
          <div class="uk-width-1-1">
            <p>Выберите один из способов для входа в аккаунт:</p>
          </div>
          <div class="uk-width-1-1">
            <div class="uk-grid uk-grid-small" uk-grid>
              <!-- <div class="uk-width-expand">
                <a
                  href="#choose-account"
                  class="uk-button uk-button-blue uk-button-medium uk-width-1-1 uk-flex uk-flex-middle uk-flex-center"
                  uk-toggle
                >
                  <svg
                    class="uk-margin-small-right"
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7106 0.654509C19.7106 0.654509 21.6531 -0.102992 21.4906 1.73651C21.4371 2.49401 20.9516 5.14551 20.5736 8.01301L19.2786 16.508C19.2786 16.508 19.1706 17.7525 18.1991 17.969C17.2281 18.185 15.7711 17.2115 15.5011 16.995C15.2851 16.8325 11.4541 14.3975 10.1051 13.2075C9.72715 12.8825 9.29515 12.2335 10.1591 11.476L15.8246 6.06501C16.4721 5.41601 17.1196 3.90101 14.4216 5.74051L6.86665 10.8805C6.86665 10.8805 6.00315 11.422 4.38465 10.935L0.876647 9.85251C0.876647 9.85251 -0.418353 9.04101 1.79415 8.22951C7.19065 5.68651 13.8281 3.08951 19.7096 0.654509H19.7106Z"
                      fill="white"
                      fill-opacity="0.4"
                    />
                  </svg>
                  Войти как dmitriy
                </a>
              </div>
              <div class="uk-width-auto">
                <div class="userpic"></div>
              </div>
              <div class="uk-width-1-1">
                <a
                  href="#choose-account"
                  class="uk-button uk-button-default uk-button-medium uk-width-1-1 uk-flex uk-flex-middle uk-flex-center"
                  uk-toggle
                >
                  <svg
                    class="uk-margin-small-right"
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    version="1.1"
                    id="svg10"
                    inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"
                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg"
                  >
                    <path
                      style="
                        fill: #d2d2d2;
                        fill-opacity: 1;
                        stroke: none;
                        stroke-width: 1px;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-opacity: 1;
                      "
                      d="m 23.818803,29.100005 c 0,0 0.73077,0.884616 2.692308,0.653847 2.454712,-0.28879 2.576923,-2.346154 2.576923,-2.346154 V 4.5230805 c 0,0 -0.21398,-1.56266 -1.846154,-2 -2.326183,-0.623299 -3.192308,0.653846 -3.192308,0.653846 l -6.153845,9.1153865 c 0,0 -0.231069,0.345854 0.113051,0.689974 0.35432,0.35432 0.771564,0.04079 0.771564,0.04079 L 24.857265,7.8692345 V 24.061544 L 7.0384615,3.0439285 c 0,0 -0.7307692,-0.884615 -2.6923077,-0.653846 -2.4547125,0.28879 -2.576923,2.346154 -2.576923,2.346154 V 27.620853 c 0,0 0.2139795,1.56266 1.8461538,2 2.3261832,0.623299 3.1923077,-0.653846 3.1923077,-0.653846 l 6.1538457,-9.115385 c 0,0 0.210671,-0.359453 -0.140248,-0.710372 -0.351068,-0.351067 -0.744367,-0.0204 -0.744367,-0.0204 L 6,24.274699 V 8.0823895 Z"
                      id="path2902"
                    />
                  </svg>
                  Войти через near id
                </a>
              </div> -->
              <div class="uk-width-1-1"><TelegramLogin @closeAuth="emit('closeAuthChain')" /></div>
            </div>
          </div>
          <div class="uk-width-1-1">
            <p class="uk-warning uk-padding-small-top">
              ВАЖНО! Мы перешли на обязательную регистрацию через телеграм. Вам необходимо привязать ваш игровой аккаунт
              к вашему телеграму. В дальнейшем вы сможете иметь несколько игровых аккаунтов (по одному в каждой расе),
              которые будут привязаны к вашему телеграм-аккаунту.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
