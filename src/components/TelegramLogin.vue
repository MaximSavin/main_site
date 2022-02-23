<template>
  <component
    is="script"
    async
    src="https://telegram.org/js/telegram-widget.js?12"
    data-telegram-login="morkovkabot"
    data-size="large"
    data-radius="5"
    data-onauth="window.onTelegramAuthNew(user)"
    data-request-access="write"
  ></component>
</template>

<script>
export default {
  // name: "telegram-login",
};
</script>

<script setup>
import { useAuthStore } from "@/stores/auth.js";

const emit = defineEmits(['closeAuth'])

const auth = useAuthStore();

const onTelegramAuthNew = async (user) => {
  // console.log(user);
  auth.setUserData(user);
  emit('closeAuth')
};

window.onTelegramAuthNew = onTelegramAuthNew;
</script>