<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Icons in the queue: {{ counter }}</h3>
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
      iconName: String,
      counter: Number
  }, 
  data() {
    return {
      listIcons: []
    }
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
.svg-inline--fa {
  height: 5em;
  margin: 24px;
}
</style>
