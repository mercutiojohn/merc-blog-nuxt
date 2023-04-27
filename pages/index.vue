<template>
  <div id="main-box" class="font-sans">
    <div class="home">
      <Block>
        <!-- <Avatar :name="name" /> -->
      </Block>
      <Block>
        <Intro :name="name" />
      </Block>
      <Block>
        <Bio :pageId="bioContentId" />
      </Block>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Mercutio",
      email: "mercutio_john@foxmail.com",
      bioContentId: "0925ed7470944566b0dc74966fa62797",
      workContentId: "44b1fa02e42b4e7ab03c6203b9b862de"
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
