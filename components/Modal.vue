<template>
  <div :class="$style.modal">
    <div :class="$style.header">
      <h2 :class="$style.header_text">Add new vehicle</h2>
      <a href="#" @click.prevent="closeModal" :class="$style.close"></a>
    </div>
    <div>
      <form @submit.prevent="onSubmit">
        <div :class="$style.modal_img"></div>        
          <input type="text" placeholder="Name" :class="$style.modal_input" v-model="vehicles.name" />
          <input type="text" placeholder="Description" :class="$style.modal_input" v-model="vehicles.description" />
        <div :class="$style.input_container">
          <input id="rentInput" type="number" placeholder="Rent price" :class="[$style.modal_input, $style.input_rent]"
            v-model="vehicles.rent" />
          <label for="rentInput" :class="$style.rent_label">$/h</label>
        </div>
        <button type="submit" :class="$style.modal_submit">
          Complete
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {  
  data(){
      return {
        vehicles: {            
            name: "",
            description: "",
            rent: "",       
            type: "custom",
            preview: 'https://loremflickr.com/160/160/airship',
            image: 'https://loremflickr.com/900/900/airship',     
        }
      }
  },    
  methods: {      
    onSubmit(e) { 
      let item = {
          id: Date.now()*Math.random(),
          ...this.vehicles
      }         
      this.$store.dispatch("setVehicles", item); 
      this.vehicles.name = this.vehicles.description = this.vehicles.rent = ""    
      this.$emit("closeModal");
    },
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style module lang="scss">

.modal {
  width: 33%;
  display: flex;
  flex-direction: column;
  padding: 64px 72px;
  background: var(--background-color);
  border-radius: 48px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-x: auto;

  @include lg-desktop {
    width: 50%;
  }

  @include sm-tablets {
    height: 80%;
    top: auto;
    width: 100%;
    padding: 20px 16px 0px 16px;
    border-radius: 24px 24px 0px 0px;
    box-sizing: border-box;
  }

  &_img {
    position: relative;
    display: block;
    width: 100%;
    height: 36vh;
    margin-bottom: 24px;
    background: var(--background-content);
    border-radius: 24px;
    cursor: no-drop;

    @include sm-tablets {
      height: 32vh;
    }

    @include sm-mobile {
      height: 24vh;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 48px;
      height: 48px;
      border-radius: 16px;
      transform: translate(-50%, -50%);
      background: var(--background-color) url("/modal/addImg.svg") center no-repeat;
    }
  }

  &_input {
    width: calc(100% - 70px);
    font-size: $size-default;
    padding: 20px 52px 20px 18px;
    margin-bottom: 24px;
    background: var(--background-content);
    border: none;
    border-radius: 12px;
    border: 2px solid transparent;
    transition: 0.2s ease;
    outline: none;
    user-select: none;

    @include sm-tablets {
      font-size: $size-middle;
      padding: 14px 52px 14px 18px;
      margin-bottom: 20px;
    }

    &:focus {
      border: 2px solid var(--color-primary);
    }
  }

  &_submit {
    display: inline-block;
    width: 100%;
    height: 48px;
    background: var(--color-buttons);
    border: none;
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

    @include sm-tablets {
      padding: 0px 24px;
      font-size: $size-middle;
    }
  }

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @include sm-tablets {
    margin-bottom: 15px;
  }

  &_text {
    margin: 0;
    font-weight: 700;
    font-size: $size-title;
    line-height: 48px;
    color: var(--color-secondary);

    @include sm-tablets {
      font-size: $size-logo;
    }

  }
}

.close {
  width: 48px;
  height: 48px;
  color: var(--color-secondary);
  border-radius: 16px;
  background: var(--background-content) url("/modal/cross.svg") center no-repeat;
  transition: ease-in-out 0.25s;

  @include sm-tablets {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }
}

.input_container {
  position: relative;
  margin-bottom: 24px;
}

.input_rent {
  margin-bottom: 0;
}

.rent_label {
  position: absolute;
  top: 50%;
  right: 24px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 300;
  font-size: $size-default;
  line-height: 16px;
  text-align: right;
  color: var(--night-text);
  transform: translateY(-50%);
}

</style>
