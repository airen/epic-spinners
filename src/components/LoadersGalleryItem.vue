<template>
  <div class="loader-item-container">
    <div class="loaders-gallery-item" @click="this.open">
      <div class="spinner"><slot></slot></div>
      <modal v-show="showModal" @close="this.close" :spinnerName="name" />
      <span class="tap-to-view-code">Tap to view code</span>
    </div>
  </div>
</template>

<script>
import Modal from './ModalVue'

export default {
  name: 'LoadersGalleryItem',
  props: ['name'],
  components: {
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    close: function () {
      this.showModal = false
    },
    open: function () {
      this.showModal = true
    }
  },
  mounted: function () {
    document.addEventListener('keydown', (e) => {
      if (this.showModal && e.keyCode === 27) {
        this.close()
      }
    })
  }
}
</script>
