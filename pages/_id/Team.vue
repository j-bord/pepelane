<template>
  <div>
    <p :class="$style.text" v-if="vehicle">{{ vehicle.team_text }}</p>
    <div>
      <p :class="$style.title">Qualified specialists</p>
      <div :class="$style.row">
        <div :class="$style.item">
          <p :class="$style.image">
            <img src="/vehicle/Spec1.svg" />
          </p>
          <div :class="$style.info">
            <p :class="$style.name">Marvin McKinney</p>
            <p :class="$style.specif">Pilot assistant</p>
          </div>
        </div>
        <div :class="$style.item">
          <p :class="$style.image">
            <img src="/vehicle/Spec2.svg" />
          </p>
          <div :class="$style.info">
            <p :class="$style.name">Savannah Nguyen</p>
            <p :class="$style.position">Mechanic</p>
          </div>
        </div>
        <div :class="$style.item">
          <p :class="$style.image">
            <img src="/vehicle/Spec3.svg" />
          </p>
          <div :class="$style.info">
            <p :class="$style.name">Courtney Henry</p>
            <p :class="$style.position">Stewardess</p>
          </div>
        </div>
      </div>
      <p :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
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

.row {
  display: flex;
  margin: 0px -12px;

  @include md-desktop {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.item {
  flex: 0 1 33.333%;
  padding: 0px 12px;
  margin: 0px 0px 32px 0px;
  display: flex;
  flex-direction: column;

  @include md-desktop {
    flex: 0 1 50%;
    flex-direction: row;
    margin: 0px 0px 20px 0px;
  }

  @include sm-tablets {
    flex: 0 1 100%;
  }
}

.image {
  flex: 1 1 100%;
  overflow: hidden;
  border-radius: 16px;
  margin: 0px 0px 16px 0px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @include md-desktop {
    flex: 1 1 50%;
    margin: 0px 0px 0px 0px;
  }
}

.info {
  @include md-desktop {
    flex: 0 1 75%;
    padding: 17px 0px 0px 20px;
  }
}

.name {
  font-weight: 700;
  font-size: $size-default;
  line-height: 14px;
  color: var(--color-secondary);
  margin: 0px 0px 8px 0px;
}

.position {
  font-weight: 300;
  font-size: $size-small;
  line-height: 148%;
}

.descr {
  margin: 0px 0px 49px 0px;

  @include sm-tablets {
    margin: 0px 0px 32px 0px;
  }
}

.text {
  font-weight: 300;
  font-size: $size-middle;
  line-height: 146%;
  margin: 0px 0px 32px 0px;
  @include sm-tablets {
    margin: 0px 0px 20px 0px;
  }
}

</style>