<template>
  <div class="bar">
    <span class="slogan">Helphub Movies</span>
    <router-link class="router-button" active-class="active-button" to="/HomePage"> Home </router-link>
    <router-link class="router-button" active-class="active-button" to="/MyList"> MyList </router-link>
    <form class="search">
      <input type="text" class="search-input" placeholder="search movies" />
      <button class="search-button">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
  .bar {
    background-color: blueviolet;
    margin-top: 0;
    line-height: 60px;
  }

  .slogan {
    color: white;
    font-size: 22px;
    font-weight: bold;
    vertical-align: middle;
    margin-left: 10px;
    margin-right: 20px;
    
  }

  .router-button {
    padding: 10px;
    color: #fff;
    font-size: 18px;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: none;
  }

  .router-button:hover {
    background-color: purple;
  }

  .active-button {
    background-color: orchid;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .search {
    float: right;
    margin-right: 10px;
  }

  .search-input {
    background-color: #eee;
    display: inline-block;
    width: 250px;
    height: 35px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-width: 0;
    border-right-width: 1px;
    padding: 0;
    padding-left: 5px;
  }
  .search-input:focus {
    outline: none;
  }

  .search-button {
    border-width: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 35px;
  }
  .search-button:hover {
    background-color: #ddd;
  }
</style>