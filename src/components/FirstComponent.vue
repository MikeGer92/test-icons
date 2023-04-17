<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Ecosystem</h3>
    <div class="awesome-icon"><font-awesome-icon 
      :icon="[`${prefix}`, `${iconName}`]" />
    </div>
    <button type="button"
      @click="clickBtn"
    > Next Icon</button>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
      msg: String,
      prefix: String,
      iconName: String 
  }, 
  data() {
    return {
      listIcons: []
    }
  },
  mounted() {
    console.log(this.iconArr)
  },
  methods: {
    clickBtn() {
      this.$emit('updateIcon')
    }
  }

}
</script>
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
