<template>
  <div>
    <p>
      <span class="action-alternative">If you don't have a dedicated email app</span> and you are not able to send a message through the automated process, please <span class="action-alternative-sub">open your email website</span> in a separate browser tab and send an email to: <span class="action-alternative-email">{{ emailTo }}</span>. For your convenience, please copy-and-paste the following prepared subject and message:
    </p>
    <cite>
      Subject:
      <div class="message" v-html="emailSubject"/>
      Message:
      <div class="message" v-html="emailMessage"/>
    </cite>
  </div>
</template>

<script>
export default {
  props: {
    emailTo: {
      type: String
    },
    emailSubject: {
      type: String
    },
    emailMessage: {
      type: String
    },
  },
  data() {
    return {
    }
  },
}
</script>


<style lang="less" scoped>
  .action-alternative {
    color:rgb(150, 17, 17);
    font-weight: 700;
    font-size: 110%;
  }
  .action-alternative-sub {
    color:rgb(150, 17, 17);
    font-weight: 700;
  }
  .action-alternative-email {
    color:rgb(10, 34, 141);
    font-weight: 700;
  }
</style>