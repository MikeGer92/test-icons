<template>
  <div class="home">
    <FirstComponent 
      msg="Welcome to Test FontAwesome Project"
      @click="randomIcon"
      :prefix="curPrefix"
      :iconName="curIconName"
    />

  </div>
</template>

<script>
import FirstComponent from '@/components/FirstComponent.vue'
import allIcons from '@/main';
import { icon } from '@fortawesome/fontawesome-svg-core';

// const faIcons = require('font-awesome-v5-icons')
export default {
  name: 'MainPage',
  components: {
      FirstComponent, 
  },
  data() {
    return {
      listIcons: allIcons,
      curPrefix:  'fab',
      curIconName: 'adn',
      iconsList: []
    }
  },
  methods: {
    randomIcon() {
      const iconsKeys = Object.keys(this.listIcons)
      let idx = Math.floor(Math.random() * iconsKeys.length)
      const iconKey = iconsKeys[idx]
      const iconObj = this.listIcons[iconKey]
      this.iconsList.push(Object.values(iconObj))
      console.log(this.iconsList.length)
      if (this.iconsList.length > 1) {
        setTimeout(() => {
            this.setCurIcon()    
        }, 3000)
      }
    },
    timeOut() {
        setTimeout(() => {
            this.setCurIcon()
        }, 3000)
    },
    setCurIcon() {
        if (this.iconsList.length > 1) {
            setTimeout(() => {
                const p = this.iconsList.shift()
                console.log(p)
                this.curPrefix = Object.values(p)[0]
                this.curIconName = Object.values(p)[1]
                if (this.iconsList.length > 1) {
                    this.timeOut()
                }
            },3000)
        } else {
            this.curPrefix = Object.values(this.iconsList[0])[0]
            this.curIconName = Object.values(this.iconsList[0])[1]
        }
    },
    onClick() {
      console.log(typeof(this.listIcons))
    }
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
