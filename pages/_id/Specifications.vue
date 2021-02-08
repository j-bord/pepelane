<template>
  <div>
    <p :class="$style.text" v-if="vehicle">{{ vehicle.specifications_text }}</p>
    <div :class="$style.features">
      <p :class="$style.title">Features:</p>
      <div :class="$style.item">
        <p :class="$style.item_image">
          <img src="/vehicle/Icon1.svg" alt />
        </p>
        <div :class="$style.wrap_text">
          <p :class="$style.item_title">A challenge for a true champion</p>
          <p :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.</p>
        </div>
      </div>
      <div :class="$style.item">
        <p :class="$style.item_image">
          <img src="/vehicle/Icon2.svg" alt />
        </p>
        <div :class="$style.wrap_text">
          <p :class="$style.item_title">Pilot's sweaty hands</p>
          <p :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["vehicle"]
};
</script>

<style module lang="scss">
.title {
  font-size: $size-logo;
  line-height: 21px;
  color: var(--color-secondary);
  margin: 0px 0px 32px 0px;
  font-weight: 700;
  @include sm-tablets {
    font-size: $size-info;  
  }
}

.wrap_text{
  .text{
    margin: 0px;
  }
}

.text {
  font-weight: 300;
  font-size: $size-middle;
  line-height: 146%;
  margin: 0px 0px 32px 0px;

  p {
    margin: 0px 0px 16px 0px;

    @include sm-tablets {
      margin: 0px 0px 8px 0px;
    }
  }

  @include sm-tablets {
    margin: 0px 0px 20px 0px;
  }
}

.features {
  margin: 0px 0px 45px 0px;

  @include sm-tablets {
    margin: 0px 0px 32px 0px;
  }
}

.item {
  display: flex;
  align-items: center;
  margin: 0px 0px 16px 0px;

  @include sm-mobile {
    align-items: flex-start;
  }
}

.item_image {
  background: #f3f4f7;
  border-radius: 16px;
  min-width: 80px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 24px 0px 0px;

  @include sm-mobile {
    margin: 0px 16px 0px 0px;
  }
}

.item_title {
  font-weight: 700;
  font-size: $size-default;
  line-height: 152%;
  color: var(--color-secondary);
  margin: 0px 0px 8px 0px;
}

</style>