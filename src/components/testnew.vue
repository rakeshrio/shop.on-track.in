<template>
  <div>
    <p>workibn</p>
    <p>{{r}}</p>
    {{location}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      rx: 1,
      location: "",
    };
  },
  created() {
    this.fetchLocation();
  },
  methods: {
    fetchLocation() {

      this.$getLocation().then((coordinates) => {
        console.log(coordinates);
      });
    },
  },
  computed: {
    r() {
      return this.rx;
    },
  },
};
</script>

<style>
</style>