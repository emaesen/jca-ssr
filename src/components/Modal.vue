<template>
  <div class="modal-base anima__zoom" :class="{'anima__fade-out':doClose}">
    <div class="modal">
      <div class="container">
        <div class="close action" @click="close">
          Close <i class="icon-X close-icon"></i>
        </div>
        <div class="header">
          <slot name="header"></slot>
        </div>

        <div class="body">
          <slot></slot>
        </div>

        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Modal',
  components: {
  },
  data() {
    return {
      doClose: false,
    }
  },
  methods: {
    close() {
      this.doClose = true;
      setTimeout(() => {
        this.$emit('close');
        this.doClose = false;
      }, 0.5 * 1000);
    }
  }
}
</script>

<style lang="less">
.modal-base {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: auto;
  align-items: center;
  justify-content: center;
  background-color: #040A28;
  background-color: #040A28cc;
  z-index: 9999;
  animation-iteration-count: 1,1;
}

.modal {
  box-sizing: border-box;
  width: 90%;
  margin: 0;
  color: rgba(18, 18, 18, 0.9);
  text-shadow: none;
  h2,h3,h4,h5 {
    margin: 1em 0;
    color: #0227ca;
  }
  a {
    color: #a33030;
  }
  cite {
    margin: 0 1em;
    color: #333;
  }

  .body {
    height: 100%;
    padding: 0.75rem 1rem;
    background-color: #ccc;
  }

  .container {
    margin: 0 auto;
    background-color: #ccc;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .footer {
    padding: 0.4rem 1rem;
    text-shadow: none;
  }

  .header {
    padding: 0.4rem 3rem;
    text-shadow: none;
  }

  .deemph {
    color: #a3303072;
  }

  .close {
    color: #333;
    float: right;
    margin: 5px;
    .close-icon {
      width: 25px;
      height: 25px;
      vertical-align: text-bottom;
    }
  }
}
@media all and (max-width: 650px) {
  .modal {
    width: 99%;
    .body {
      padding: .75rem .3rem;
    }
  }
}
</style>
