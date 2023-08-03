<template>
<Page>
  <div id="main-box" class="font-sans">
    <div class="home page-content">
      <Block>
        <AvatarStatic :status="status" :rounded="true"/>
      </Block>
      <Block>
        <Intro :name="name" :nickname="nickname" />
      </Block>
      <Block>
        <ContactsStatic :contactsData="contactsContent" />
      </Block>
      <Block>
        <BioStatic :content="bioContent" />
        <MyLink to="/about">更多</MyLink>
      </Block>
    </div>
    <div class="tinted">
      <div class="page-content">
        <Block title="Currently Working on...">
          <Currently />
        </Block>
        <Block title="Works">
          <WorksStatic :content="workContent" />
        </Block>
        <Block title="More">
          <More />
        </Block>
      </div>
    </div>
  </div>
</Page>
</template>

<script>
import Block from "@/components/utils/Block";
import Page from "@/components/utils/Page";
import MyLink from "@/components/utils/MyLink";
export default {
  async asyncData({ $axios, $notionApi }) {
    const env = {
      name: "Mercutio John",
      nickname: "Mercutio",
      email: "mercutio_john@foxmail.com",
      bioContentId: "0925ed7470944566b0dc74966fa62797",
      workContentId: "44b1fa02e42b4e7ab03c6203b9b862de",
      contactsContentId: "12729fd0de5c49c4b3763e52159f137c",
    };
    try {
      const bioContent = await $notionApi.$get(`/page/${env.bioContentId}`);
      const workContent = await $notionApi.$get(`/table/${env.workContentId}`);
      const contactsContent = await $notionApi.$get(
        `/table/${env.contactsContentId}`
      );
      return {
        bioContent,
        workContent,
        contactsContent
      };
    } catch (e) {
      const error = e;
      return {
        bioContent: {},
        workContent: [],
        contactsContent: [],
        // ip
        error,
      };
    }
  },
  components: {
    Block,
    Page,
    MyLink
  },
  data() {
    return {
      name: "Jonathan Gow",
      nickname: "Mercutio",
      email: "mercutio_john@foxmail.com",
      bioContentId: "0925ed7470944566b0dc74966fa62797",
      workContentId: "44b1fa02e42b4e7ab03c6203b9b862de",
      contactsContentId: "12729fd0de5c49c4b3763e52159f137c",
      status:"working"
    };
  },
};
</script>

<style scoped>
#main-box,
.tinted {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
}
.home {
  padding-top: calc(100vh - 900px);
  transition: padding-top .1s ease;
}
@media screen and (max-height: 900px) {
  .home {
    padding-top: calc(100vh - 800px);
  }
}
@media screen and (max-height: 800px) {
  .home {
    padding-top: calc(100vh - 700px);
  }
}
.tinted {
  background: #f7f7f7;
  width: 100%;
}
.tinted::before {
  position: absolute;
  content: "";
  width: 100%;
  background: linear-gradient(transparent, #f7f7f7);
  height: 200px;
  transform: translateY(-200px);
  z-index: -2;
}
</style>
