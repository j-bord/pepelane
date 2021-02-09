<template>
  <div :class="$style.navbar">
    <div :class="$style.logo">
      <nuxt-link to="/" exact :class="$style.logo_icons">
        <img v-if="theme" :class="$style.logo_icon" src="/navbar/Logo_dark.svg" />
        <img v-else :class="$style.logo_icon" src="/navbar/Logo.svg" />
        <span :class="$style.logo_name">Pepelane</span>
      </nuxt-link>
      <p :class="$style.logo_slogan">World's first affordable airsharing</p>
    </div>
    <div :class="$style.info">
      <div :class="$style.info_icons">
        <a :class="{[$style.info_mode]:true, [$style.info_mode__night]: theme }"
          @click.prevent="toggleTheme()" href="#">
          <p v-if="!theme">
            <img src="/navbar/night_mod.svg" />
            <span>Night mod</span>
          </p>
          <p v-else>
            <img src="/navbar/day_mod.svg" />
            <span>Day mod</span>
          </p>
        </a>
        <a :class="$style.info_chat" href="#">
          <img src="/navbar/Vector1.svg" />
        </a>
        <a :class="$style.info_chat" href="#">
          <img src="/navbar/Frame.svg" />
        </a>
      </div>
      <div :class="$style.info_user">
        <p :class="$style.user_name">Bessie Cooper</p>
        <a :class="$style.user_img" href="#" @click.prevent>
          <img src="/navbar/User.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {      
      theme: ''
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme == 'darkMode' ? '' : 'darkMode';
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }
}
</script>

<style module lang="scss">

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1903px;
  margin: 0 auto;
  padding: 48px 64px 40px;

  @include md-desktop {
    padding: 24px 44px;
  }

  @include sm-tablets {
    padding: 18px 20px;
  }

  @include sm-mobile {
    padding: 12px;
  }
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 490px;
  width: 100%;

  &_icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 170px;
  }

  &_icon {
    padding: 0px 18px 0px 0px;

    @include sm-mobile {
      padding: 0px 12px 0px 0px;
      max-width: 32px;
    }
  }

  &_name {
    font-weight: 700;
    font-size: $size-logo;
    color: var(--color-secondary);

    @include sm-mobile{
      font-size: $size-default;
    }
  }

  &_title img {
    @include sm-mobile {
      padding: 5px 0px 0px 0px;
      max-width: 70px;
    }
  }

  &_slogan {
    @include md-desktop {
      display: none;
    }
  }
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 530px;

  &_icons {
    display: flex;
    align-items: center;
    max-width: 323px;
    width: 100%;
    justify-content: flex-end;

    a {
      padding: 0px 27px 0px 0px;
    }

    @include sm-mobile {
      a {
        padding: 0px 20px 0px 0px;

        &:last-child {
          padding: 0px 25px 0px 0px;
        }
      }
    }
  }

  &_chat {
    &:hover img {
      transform: scale(1.1);
    }

    img {
      transition: ease-in-out 0.25s;

      @include sm-mobile {
        max-width: 18px;
        padding: 5px 0px 0px 0px;
      }
    }
  }

  &_mode {
    flex-grow: 1;
    font-weight: 300;
    font-size: $size-default;
    line-height: 152%;
    color: var(--color-primary);
    display: flex;
    align-items: center;

    &:hover img {
      transform: scale(1.1);
    }

    p {
      display: flex;
    }

    span {
      display: inline-block;
      padding: 0px 0px 0px 18px;
    }

    img {
      transition: ease-in-out 0.25s;

      @include sm-mobile {
        max-width: 17px;
      }
    }

    @include lg-desktop {
      flex-grow: 0;

      span {
        display: none;
      }
    }
  }

  &_user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 180px;
    cursor: pointer;

    &:hover .user_img {
      border-color: var(--color-secondary);
    }

    @include sm-tablets {
      max-width: 56px;
    }

    @include sm-mobile {
      max-width: 32px;
    }

  }

  .user_name {
    font-weight: 700;
    font-size: $size-default;
    line-height: 152%;
    color: var(--color-secondary);

    @include sm-tablets {
      display: none;
    }
  }
}

.user_img {
  height: 56px;
  overflow: hidden;
  flex-basis: 56px;
  border-radius: 50%;
  box-sizing: border-box;
  transition: ease-in-out 0.25s;
  border: 2px solid transparent;

  &:hover {
    border-color: var(--color-secondary);
  }

  img {
    max-width: 100%;
  }

  @include sm-mobile {
    height: 32px;
    flex-basis: 32px;
  }
}
 
</style>