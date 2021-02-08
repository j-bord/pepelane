<template>
  <div>
    <Navbar />    
    <div :class="$style.container">
      <main>      
        <Nuxt />      
      </main>              
    </div>
  </div>
</template>

<style>

</style>


<script>

</script>

<style module lang="scss">

.container{
  margin: 0px 64px 48px 64px;

  @include lg-desktop {    
    margin: 0px 52px 20px 52px;
  }
  @include md-desktop {
    margin: 0px 34px 20px 34px;    
  }
  @include sm-tablets {
    margin: 0px 10px 20px 10px;    
  }

  @include sm-mobile {
    margin: 0px 0px 20px 0px;    
  }
  
}
 
</style>