<template>
  <div :class="$style.vehicle">      
    <div :class="$style.image">
      <img v-if="vehicle" :src="vehicle.image" />
    </div>
    <div :class="$style.info">
      <p :class="$style.info_title" v-if="vehicle">{{ vehicle.name }}</p>                          
      <div :class="$style.tabs">
          <nuxt-link active :to="`/${$route.params.id}/Specifications`" :class="$style.tab_link">Specifications</nuxt-link>
          <nuxt-link :to="`/${$route.params.id}/Team`" :class="$style.tab_link">Team</nuxt-link>
          <nuxt-link :to="`/${$route.params.id}/Rent`" :class="$style.tab_link">Rent terms</nuxt-link>    
        <!-- <a href="#" @click.prevent="component ='Specifications', setActiveLink($event)" :class="$style.tab_link" class="tab_link item_active">Specifications</a>
        <a href="#" @click.prevent="component ='Team', setActiveLink($event)"  class="tab_link">Team</a>
        <a href="#" @click.prevent="component ='Rent', setActiveLink($event)" :class="$style.tab_link" class="tab_link"></a> -->
      </div>
      <div>
        <nuxt-child :vehicle="vehicle"/>
      </div>
      <div :class="$style.rent">
        <div :class="$style.rent_text" v-if="vehicle">
          Rent for
          <span> {{ vehicle.rent }}</span> $/h
        </div>
        <a href="#" :class="$style.btn">
          <span>Rent now</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {        
  computed: {
    ...mapGetters(["vehicles"]),
    vehicle() {
      return this.vehicles.filter(item => item.id == this.$route.params.id)[0]
    }
  }
}
</script>



<style module lang="scss">

.vehicle {
  background-color: var(--background-color);
  margin: 0 auto;
  display: flex;
  padding: 0px 10px;

  @include md-desktop {
    flex-wrap: wrap;
    padding: 0px 46px;
  }

  @include sm-tablets {
    padding: 0px 20px;
  }

  @include sm-mobile {
    padding: 0px 16px;
  }
}

.image {
  min-width: 55%;
  border-radius: 24px;
  overflow: hidden;
  height: 700px;
  margin: 0px 0px 56px 0px;

  // ie 11
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	  min-width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @include md-desktop {
    margin: 0px 0px 30px 0px;
  }

  @include sm-tablets {
    margin: 0px 0px 22px 0px;
    height: 450px;
  }

  @include sm-mobile {
    height: 332px;
  }
}

.info {
  padding: 56px 0px 0px 65px;
  position: relative;


  @include md-desktop {
    padding: 0px 0px 0px 0px;
  }

  @include sm-mobile{
    margin-bottom: 80px;
  }

  &_title {
    display: inline-block;
    font-weight: 700;
    font-size: $size-title;
    line-height: 120%;
    color: var(--color-primary);
    margin: 0px 0px 32px 0px;

    @include md-desktop {
      margin: 0px 0px 24px 0px;
      font-size: 34px;
    }

    @include sm-tablets {
      font-size: $size-title-m;
      margin: 0px 0px 20px 0px;
    }

    @include sm-mobile {
      margin: 0px 0px 16px 0px;
      font-size: $size-logo;
    }
  }
}

.tabs {
  display: flex;
  margin: 0px 0px 32px 0px;

  @include sm-tablets {
    margin: 0px 0px 20px 0px;
  }
}

.tab_link {
  padding: 0px 32px 0px 0px;
  font-weight: 700;
  font-size: $size-default;
  line-height: 14px;
  color: var(--color-primary);
}

.rent {
  background: var(--background-content);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  margin: 0px 0px 32px 0px;
  position: relative;
  z-index: 9;

  @include sm-mobile{
      width: calc(100% - 96px);      
      position: fixed;
      bottom: 0;    
  }

  &_text {
    font-weight: 700;
    font-size: $size-info;
    line-height: 140%;
    color: var(--color-primary);

    span {
      color: var(--color-price);
    }

    

    @include sm-mobile {
      font-size: $size-default;
    }

  }
}

.btn {
  display: inline-block;  
  height: 48px;
  background: var(--color-buttons);
  border-radius: 12px;
  padding: 0px 32px;
  font-weight: 700;
  color: $background-color;
  font-size: $size-default;
  line-height: 48px;
  text-align: center;
  transition: ease-in-out 0.25s;

  &:hover {
    background: var(--color-price);
  }
  @include  sm-tablets{
    padding: 0px 24px;
    font-size: $size-middle;
  }
}



</style>