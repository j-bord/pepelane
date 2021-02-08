<template>
  <div>
    <div :class="$style.text" v-if="vehicle">
      <span>{{ vehicle.term_text }}</span>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <div :class="$style.conditions">
      <p :class="$style.title">Additional conditions:</p>
      <ul :class="$style.list">
        <li :class="$style.item">
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </li>
        <li :class="$style.item">
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </li>
        <li :class="$style.item">
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props: ["vehicle"]
};
</script>

<style module lang="scss" >

.text {
  font-weight: 300;
  font-size: $size-middle;
  line-height: 146%;
  margin: 0px 0px 32px 0px;
}

.conditions {
  margin: 0px 0px 32px 0px;  
}

.title {
  font-size: $size-logo;  
  color: var(--color-secondary);
  margin: 0px 0px 32px 0px;
  font-weight: 700;
  @include sm-tablets {
    font-size: $size-info;  
  }
}

.list {
  list-style: none;
}

.item {
  font-size: $size-middle;
  padding: 0px 0px 0px 24px;
  background: url("/vehicle/Dot.svg") 0 8px no-repeat;

  p {
    margin: 0px 0px 16px 0px;
  }

  @include sm-tablets {
    margin: 0px 0px 8px 0px;
  }
}

</style>