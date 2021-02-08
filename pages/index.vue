<template>    
  <div :id="$style.main" >      
                        

      <div :class="$style.main_header">
        <div :class="$style.main_select">
          <span>Rent</span>                     
          <select             
            v-model="filter"
            :class="$style.select"
            >   
            <option value="whatever">whatever</option>
            <template v-for="option in options" >
              <option :value="option" :key="option">{{option}}</option>
            </template>          
          </select>
        </div>
        <a href="#" :class="$style.button_add" @click.prevent="showModal = !showModal">
          <span>Add new</span>
          <img src="/main/Add.svg" />
        </a>        
      </div>
      <div :class="$style.main_body">        
        <div :class="$style.main_items" v-for="vehicle in filterVehicles" :key="vehicle.id">
          <nuxt-link :to="`/${vehicle.id}/Specifications`">
            <div :class="$style.content">
              <p :class="$style.image" >
                <img :src="vehicle.preview" />
              </p>
              <div :class="$style.info">
                <span :class="$style.info_title">{{ vehicle.name }}</span>
                <p :class="$style.info_descr">{{ vehicle.description}}</p>
                <p :class="$style.info_price">
                  <span>{{ vehicle.rent }} $/h</span> 
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>       
      <transition name="fade">            
        <div v-show="showModal" :class="{ [$style.modal_shadow]: showModal }">          
            <Modal @closeModal='closeModal'/>          
        </div>      
      </transition>  
    </div>   
</template>

<script>
import {mapGetters} from "vuex"
export default {  
  transition: 'home',
  data(){
    return{
      filter: 'whatever',
      showModal: false,         
    }
  },
  computed: {    
    ...mapGetters(["vehicles"]),
    options(){      
      return Array.from(new Set(this.vehicles.map(({ type }) => type)))
    },
    filterVehicles() {                   
            if (this.filter === "whatever") {
                return this.vehicles;
            } 
            return this.vehicles.filter(
              item => item.type == this.filter          
            )                          
        }
  },  
  methods: {    
    closeModal() {      
      this.showModal = !this.showModal
    }
  },  
}
</script>

<style module lang="scss">



#main {  
  background: var(--background-content);
  border-radius: 48px;
  margin: 0 auto;
  height: 100%;
  padding: 54px 64px 0px 64px;  
  margin: 0px auto;
  box-sizing: border-box;
  max-width: 1903px;  

  // ie11 hack
  

  @include lg-desktop {
    padding: 34px 34px 0px 34px;
    margin: 0px 16px 20px 16px;
  }

  @include sm-tablets {
    margin: 0px 10px 20px 10px;
    padding: 24px 28px 0px 28px;
  }

  @include sm-mobile {
    margin: 0px 0px 20px 0px;
    padding: 26px 16px 0px 16px;
  }
}
.main_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 40px 0px;

  @include lg-desktop {
    margin: 0px 0px 25px 0px;
  }
  @include sm-tablets{
    margin: 0px 0px 20px 0px;
  }
}
.main_select {
  font-weight: 700;
  font-size: $size-title;
  line-height: 120%;
  color: var(--color-secondary);

  @include md-desktop {
    font-size: $size-title-m;
  }

  @include sm-tablets {
    font-size: $size-title-s;
  }

  @include sm-mobile {
    font-size: $size-logo;
  }
}

.select {  
  user-select: none;
  appearance: none;  
  text-align: center;
  background: url("/main/Arrow.svg") 100% 18px no-repeat;
  padding: 0px 30px 0px 0px;
  border: none;  
  font-weight: 700;
  font-size: $size-title;
  color: var(--color-buttons);
  cursor: pointer;
  line-height: 100%; 

  &::-ms-expand {
    display: none;
  }

  &:focus {
    border: none;
    outline: none;
  }

  @include md-desktop{
    font-size: $size-title-m;
  }

  @include sm-tablets {
    font-size: $size-title-s;
    background-size: 8px;
    background-position: right;
  }

  @include sm-mobile {
    font-size: $size-logo;    
    padding: 0px 5px 0px 0px;
  }
}

.button_add {
  height: 48px;
  font-weight: 700;
  font-size: $size-info;
  line-height: 140%;
  color: var(--color-buttons);
  display: flex;
  align-items: center;
  position: relative;
  &:hover img{
    transform: scale(1.05);
  }

  span {
    padding: 0px 20px 0px 0px;

    @include sm-mobile {
      padding: 0px 12px 0px 0px;
    }
  }

  img {
    transition: ease-in-out 0.25s;
    @include sm-mobile {
      max-width: 32px;
    }
  }

  @include sm-mobile {
    font-size: $size-default;
  }
}



.main_body {
  display: flex;
  margin: 0px -16px;
  flex-wrap: wrap;

  @include md-desktop
 {
    margin: 0px -8px;
  }
}

.main_items {  
  flex: 0 1 33.333%;
  padding: 0px 16px;
  margin: 0px 0px 32px 0px;
  box-sizing: border-box;
  transition: ease-in-out 0.5s;

  // ie 11
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	  flex: 0 1 30%
  }

  @media (max-width: 1265px) {
    flex: 0 1 50%;
  }

  @include md-desktop
 {
    padding: 0px 8px;
  }

  @include sm-tablets {
    flex: 1 1 100%;
    margin: 0px 0px 12px 0px;
  }
}

.content {
  height: 100%;
  display: flex;
  background: var(--background-color);
  border-radius: 32px;
  transition: ease-in-out 0.25s;

  &:hover {
    // box-shadow: 1px 1px 1px #fff;    
    box-shadow: 0px 0px 20px 0 rgba(0, 0, 0, 0.4);
    transform: translate(-3px,-3px);
  }
}

.image {
  margin: 24px 0px 0px 32px;
  border-radius: 24px;
  flex: 0 1 88px;
  height: 88px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @include sm-tablets {
    border-radius: 16px;
  }

  @include sm-mobile {
    margin: 20px 0px 0px 20px;
  }
}

.info {
  padding: 40px 0px 25px 24px;
  max-width: 197px;

  @include sm-mobile {
    padding: 32px 0px 20px 20px;
  }
  &_title {
  display: inline-block;
  font-weight: 700;
  font-size: $size-default;
  line-height: 14px;
  color: var(--color-primary);
  margin: 0px 0px 12px 0px;
  position: relative;  
}

&_descr {
  font-weight: 300;
  font-size: $size-small;
  line-height: 148%;
  min-width: 170px;
  width: auto;
  margin: 0px 0px 18px 0px;
  color: var(--color-secondary);
}

&_price {
  font-weight: 700;
  font-size: $size-middle;
  line-height: 148%;
  color: var(--color-price);
}
}

.modal_shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 79, 106, 0.32);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>