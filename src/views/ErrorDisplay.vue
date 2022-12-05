<template>
  <h4>Oops! There was and error:</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  name: 'ErrorDisplay',

  props: {
    error: {
      type: String,
      require: true,
    },
  },
};
</script>

<style></style>
