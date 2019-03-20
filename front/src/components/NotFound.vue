<template>
  <div class="not-found-wrapper">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      msg: 'Sorry 404',
    };
  },
};
</script>