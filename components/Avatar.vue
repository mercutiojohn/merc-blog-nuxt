<template>
  <div class="avatar-box">
    <img class="avatar" :src="imgUrl" alt="" srcset="" />
  </div>
</template>

<script>
// import crypto from "crypto";
export default {
  name: "Avatar",
  components: {
    crypto
  },
  props: {
    email: String
  },
  computed: {
    hashRes() {
      return crypto
        .createHash("md5")
        .update(this.email)
        .digest("hex");
    },
    imgUrl() {
      return "https://www.gravatar.com/avatar/" + this.hashRes;
    }
  }
};
</script>

<style scoped>
.avatar-box {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
