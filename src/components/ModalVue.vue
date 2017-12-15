<template>
  <transition name="modal">
    <div class="modal-mask" @click="close" v-show="show">
      <div class="modal-container" @click.stop>
        <tabs :html="html" :css="css" :npm="npm" :vue="vue" />
      </div>
    </div>
  </transition>
</template>

<script>
import Tabs from './Tab'

export default {
  name: 'modal',
  props: [
    'show',
    'spinnerName'
  ],
  data () {
    return {
      css: null,
      html: null,
      npm: null,
      vue: null
    }
  },
  components: {
    Tabs
  },
  methods: {
    close: function (event) {
      event.stopPropagation()
      this.$emit('close')
    }
  },
  mounted () {
    console.log(this.spinnerName)
    fetch('../html/' + this.spinnerName + '.html')
      .then(r => r.text())
      .then(t => {
        const styleStartIndex = t.indexOf('<style>')
        const styleEndIndex = t.indexOf('</style>')
        this.css = t.substring(styleStartIndex + 7, styleEndIndex).trim()

        const htmlStartIndex = t.indexOf('<body>')
        const htmlEndIndex = t.indexOf('</body>')
        this.html = t.substring(htmlStartIndex + 6, htmlEndIndex).trim()
      })
    fetch('lib/' + this.spinnerName + '.vue')
      .then(r => r.text())
      .then(t => {
        const componentEndIndex = t.indexOf('import')
        this.vue = t.substring(0, componentEndIndex).trim()
        this.npm = t.substring(componentEndIndex, t.length).trim()
      })
  }
}
</script>

<style scoped lang="scss">
  :root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #868e96;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #868e96;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    --font-family-monospace: "SFMono-Regular",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  }
  * {
    box-sizing: border-box;
  }

  .modal-mask {
    cursor: default;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 540px;
    height: 540px;
    color: #100f0f;
    margin: 40px auto 0;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2px 20px 0 rgba(104, 37, 113, 0.5);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: center;
    align-items: center;
    justify-content: center;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    transform: scale(1.1);
  }
  // @media (max-width: $screen-xs-max) {
  //   .modal-container {
  //     width: 365px;
  //   }
  // }

</style>
