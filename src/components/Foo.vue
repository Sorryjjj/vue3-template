<template>
  <div>
    foo -----------------

    <button @click="handleLogin">login</button>
    <button @click="handleGetUser">get user</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const handleLogin = () => {
      fetch("/login", {
        method: "POST",
      }).then((res) => {
        console.log("login completed");
        console.log(res);
      });
    };
    const handleGetUser = () => {
      fetch("/user").then((res) => {
        console.log(res);
      });
    };

    return {
      handleLogin,
      handleGetUser,
    };
  },
});
</script>

<style scoped></style>
