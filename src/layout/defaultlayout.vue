<template>
  <div id="layout">
    <header>
          <div class="container">
            <NavBar/>
            <AsideBar/>
         </div>
    </header>
    <main>
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AsideBar from '@/components/AsideBar.vue';
export default {
    components: {
        NavBar,
        AsideBar
    }
}
</script>

<style lang="scss">
#layout {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
