<template>
  <div id="app">
    <div style="margin-top:10px">
      <div class="topnav">
        <router-link to="/">Home</router-link>
        <router-link to="/members"  class="button">
          Members
        </router-link>
        <router-link to="/products"  class="button">
          Products
        </router-link>
        <router-link to="/categories"  class="button">
          Categories
        </router-link>
        </div>
        <router-view/>  
    </div>    
  </div>
</template>

<style>
.button{
  padding: 5px;
  border-radius:5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
  .topnav {
        background-color: #333;
      overflow: hidden;
  }
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
                  
  .topnav a:hover {
    background-color: white;
    color: chocolate;
  }

  .topnav a.active {
    background-color: chocolate;
    color: white;
  }

  .topnav-right {
    float: right;
  }
</style>
