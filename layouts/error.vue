<template>  
    <div :class="$style.error_block">
      <div :class="$style.title">An error has occurred</div>
      <div :class="$style.text">Please refresh the page</div>
      <a href="/" :class="$style.btn">Reload page</a>
    </div>  
</template>

<script>
export default {
    
};
</script>

<style module lang="scss">

.error_block {
  background: var(--background-content);
  border-radius: 48px;
  margin: 0 auto;
  height: 100%;
  padding: 54px 64px 0px 64px;
  margin: 0px auto;
  box-sizing: border-box;
  max-width: 1903px;
  height: calc(100vh - 192px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include lg-desktop {
    padding: 34px 34px 0px 34px;
    margin: 0px 16px 20px 16px;
  }
  @include md-desktop{
    height: calc(100vh - 124px);
  }
  @include sm-tablets{
    height: calc(100vh - 112px);
  }
  @include sm-mobile{
    height: calc(100vh - 76px);
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

.title {
  text-align: center;
  font-weight: 700;
  font-size: $size-title;
  line-height: 120%;
  color: var(--color-primary);
  margin: 0px 0px 24px 0px;

  @include sm-tablets {
    font-size: $size-logo;
    margin: 0px 0px 18px 0px;
  }
}

.text {
  font-weight: 300;
  font-size: $size-middle;
  line-height: 146%;
  color: var(--color-primary);
  margin: 0px 0px 40px 0px;

  @include sm-tablets {
    margin: 0px 0px 26px 0px;
  }
}

.btn {
  display: inline-block;
  // min-width: 136px;
  height: 48px;
  background: var(--color-buttons);
  border-radius: 12px;
  padding: 0px 32px;
  font-weight: 700;
  color: $background-color;
  font-size: $size-default;
  line-height: 48px;
  text-align: center;
  transition: all 0.25s ease 0s;
  &:hover{
    background: var(--color-price);
  }
  @include sm-tablets{
    .btn{
      padding: 0px 20px;
    }
  }
}

</style>