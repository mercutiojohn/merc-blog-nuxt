<template>
  <div id="main-box" class="font-sans">
    <div class="home page-content">
      <!-- {{ pageData }} -->
      <span>error: {{ error }}</span>
      <span>bio: {{ bioContent }}</span>
      <!-- <Block>
        <Avatar :email="email" />
      </Block> -->
      <Block>
        <Intro :name="name" :nickname="nickname" />
      </Block>
      <Block>
        <Contacts :tableId="contactsContentId" />
      </Block>
      <Block>
        <Bio :pageId="bioContentId" />
      </Block>
    </div>
  </div>
</template>

<script>
import Block from "@/components/utils/Block";
export default {
  async asyncData({ $axios }) {
    const env = {
      name: "Mercutio John",
      nickname: "Mercutio",
      email: "mercutio_john@foxmail.com",
      bioContentId: "0925ed7470944566b0dc74966fa62797",
      workContentId: "44b1fa02e42b4e7ab03c6203b9b862de",
      contactsContentId: "12729fd0de5c49c4b3763e52159f137c"
    };
    try {
      // console.log(`https://blogapi.mercutio.club/v1/page/${env.bioContentId}`);

      const bioContent = await $axios.$get(
        `https://blogapi.mercutio.club/v1/page/${env.bioContentId}`
      );

      // const bioContent = await $notionApi.$get(`/page/${env.bioContentId}`);
      // const workContent = await $axios.$get(
      //   `https://blogapi.mercutio.club/v1/page/${env.bioContentId}`
      // );
      // const contactsContent = await $axios.$get(
      //   `https://blogapi.mercutio.club/v1/page/${env.contactsContentId}`
      // );
      // const ip = await $axios.$get("http://icanhazip.com");
      // console.log(bioContent);
      return {
        bioContent
        // workContent,
        // contactsContent
        // ip
      };
    } catch (e) {
      const error = e;
      return {
        bioContent: null,
        // workContent,
        // contactsContent
        // ip
        error
      };
    }
  },
  components: {
    Block
  },
  data() {
    return {
      name: "Mercutio John",
      nickname: "Mercutio",
      email: "mercutio_john@foxmail.com",
      bioContentId: "0925ed7470944566b0dc74966fa62797",
      workContentId: "44b1fa02e42b4e7ab03c6203b9b862de",
      contactsContentId: "12729fd0de5c49c4b3763e52159f137c"
    };
  }
};
</script>

<style>
@import "styles/common.css";
</style>
<style scoped>
#main-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  /* min-height: 100vh; */
}
.home {
  padding-top: calc(100vh - 900px);
}
</style>
