<template>
  <div class="home">
    <FirstComponent 
      msg="Welcome to Test FontAwesome Project"
      @updateIcon="onClick"
      :prefix="curPrefix"
      :iconName="curIconName"
    />

  </div>
</template>

<script>
import FirstComponent from '@/components/FirstComponent.vue'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MainPage',
  components: {
      FirstComponent, 
  },
  data() {
    return {
    }
  },
  mounted() {
    this.setIcons()
  },
  methods: {
    ...mapMutations({

    }),
    ...mapActions({
      setIcons: 'lib/setIcons',
      addIcon: 'lib/addIcon',
      getIcon: 'lib/getIcon'
    }),
    onClick() {
      this.addIcon()
      setTimeout(() => {
        this.getIcon()
      }, 3000) 
    }
  },
  computed: {
    ...mapState({
      listIcons: state => state.lib.listIcons,
      curPrefix: state => state.lib.curPrefix,
      curIconName: state => state.lib.curIconName,
      choosenList: state => state.lib.choosenList
    }),
    ...mapGetters({
      randomIcon: 'lib/randomIcon',
      setCurIcon: 'lib/setCurIcon'
    })
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
