<template>
  <div class="loaders-gallery">
    <!-- row one -->
    <div class="gallery-item-container">
      <loaders-gallery-item name="FlowerSpinner">
        <flower-spinner
          :animation-duration="2500"
          :size="70"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="PixelSpinner">
        <pixel-spinner
          :animation-duration="2000"
          :pixel-size="70"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="HellowDotsSpinner">
        <hollow-dots-spinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="IntersectingCirclesSpinner">
        <intersecting-circles-spinner
          :animation-duration="1200"
          :size="70"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="OrbitSpinner">
        <orbit-spinner
          :animation-duration="1200"
          :size="55"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="RadarSpinner">
        <radar-spinner
          :animation-duration="2000"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="ScalingSquaresSpinner">
        <scaling-squares-spinner
          :animation-duration="1250"
          :size="65"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="HalfCircleSpinner">
        <half-circle-spinner
          :animation-duration="1000"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="TrinityRingsSpinner">
        <trinity-rings-spinner
          :animation-duration="1500"
          :size="66"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="FulfillingSquareSpinner">
        <fulfilling-square-spinner
          :animation-duration="4000"
          :size="50"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="CirclesToRhombusesSpinner">
        <circles-to-rhombuses-spinner
          :animation-duration="1200"
          :circles-num="3"
          :circle-size="15"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="SemipolarSpinner">
        <semipolar-spinner
          :animation-duration="2000"
          :size="65"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="SelfBuildingSquareSpinner">
        <self-building-square-spinner
          :animation-duration="6000"
          :size="40"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="SwappingSquaresSpinner">
        <swapping-squares-spinner
          :animation-duration="1000"
          :size="65"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>

    <div class="gallery-item-container">
      <loaders-gallery-item name="FulfillingBouncingCircleSpinner">
        <fulfilling-bouncing-circle-spinner
          :animation-duration="4000"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="FingerprintSpinner">
        <fingerprint-spinner
          :animation-duration="1500"
          :size="64"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="SpringSpinner">
        <spring-spinner
          :animation-duration="3000"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="AtomSpinner">
        <atom-spinner
          :animation-duration="1000"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="LoopingRhombusesSpinner">
        <looping-rhombuses-spinner
          :animation-duration="2500"
          :rhombus-size="15"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item name="BreedingRhombusSpinner">
        <breeding-rhombus-spinner
          :animation-duration="2000"
          :size="65"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
  </div>
</template>

<script>
  import LoadersGalleryItem from './LoadersGalleryItem.vue'
  import HollowDotsSpinner from './lib/HollowDotsSpinner.vue'
  import PixelSpinner from './lib/PixelSpinner.vue'
  import FlowerSpinner from './lib/FlowerSpinner.vue'
  import IntersectingCirclesSpinner from './lib/IntersectingCirclesSpinner.vue'
  import OrbitSpinner from './lib/OrbitSpinner.vue'
  import FingerprintSpinner from './lib/FingerprintSpinner.vue'
  import TrinityRingsSpinner from './lib/TrinityRingsSpinner.vue'
  import FulfillingSquareSpinner from './lib/FulfillingSquareSpinner.vue'
  import CirclesToRhombusesSpinner from './lib/CirclesToRhombusesSpinner.vue'
  import SemipolarSpinner from './lib/SemipolarSpinner.vue'
  import BreedingRhombusSpinner from './lib/BreedingRhombusSpinner.vue'
  import SwappingSquaresSpinner from './lib/SwappingSquaresSpinner.vue'
  import ScalingSquaresSpinner from './lib/ScalingSquaresSpinner.vue'
  import FulfillingBouncingCircleSpinner from './lib/FulfillingBouncingCircleSpinner.vue'
  import RadarSpinner from './lib/RadarSpinner.vue'
  import SelfBuildingSquareSpinner from './lib/SelfBuildingSquareSpinner.vue'
  import SpringSpinner from './lib/SpringSpinner.vue'
  import LoopingRhombusesSpinner from './lib/LoopingRhombusesSpinner.vue'
  import HalfCircleSpinner from './lib/HalfCircleSpinner.vue'
  import AtomSpinner from './lib/AtomSpinner.vue'

  export default {
    name: 'LoadersGallery',

    components: {
      LoadersGalleryItem,
      HollowDotsSpinner,
      PixelSpinner,
      FlowerSpinner,
      IntersectingCirclesSpinner,
      OrbitSpinner,
      FingerprintSpinner,
      TrinityRingsSpinner,
      FulfillingSquareSpinner,
      CirclesToRhombusesSpinner,
      SemipolarSpinner,
      BreedingRhombusSpinner,
      SwappingSquaresSpinner,
      ScalingSquaresSpinner,
      FulfillingBouncingCircleSpinner,
      RadarSpinner,
      SelfBuildingSquareSpinner,
      SpringSpinner,
      LoopingRhombusesSpinner,
      HalfCircleSpinner,
      AtomSpinner
    },

    data () {
      return {
        spinnerColor: '#ff1d5e'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .loaders-gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gallery-item-container {
    margin: auto;
    width: 190px;
    height: 190px;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
