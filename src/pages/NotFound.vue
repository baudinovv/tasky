<script setup lang="ts"></script>


<template>
  <div class="container">
    <div class="content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Oops! Page Not Found</h2>
    </div>
  </div>
</template>

<style scoped>

.container{
  height: 75vh;
}

.content {
  text-align: center;
  color: white;
  z-index: 1;
  color: #FFB900;
}

.error-code {
  color: #FFB900;
  font-size: 120px;
  font-weight: bold;
  margin-bottom: 10px;
}

.error-title {
  font-size: 36px;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: black;
}

</style>
