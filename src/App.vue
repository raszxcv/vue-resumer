
<template>
  <div>
    <div id="page">
      <header>
        <Topbar></Topbar>
      </header>
      <main>
        <ResumeEditor></ResumeEditor>
        <ResumePreview></ResumePreview>
      </main>
    </div>
  </div>
</template>




<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'
import Topbar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'
import store from './store/index'
import AV from './lib/AVkey'
import getAVUser from './lib/getAVUser'
export default {
  name: 'app',
  components:{
    Topbar,
    ResumeEditor,
    ResumePreview,
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin',icons)
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState',state)
    this.$store.commit('setUser',getAVUser())
  },
  store
}
</script>

<style lang="scss">

#page {
  min-width:1024px;
  height: 100vh;
  display: flex;
  flex-direction:column;
  background: #EAEBEC;
  >main{
    flex-grow:1;
  }
  >main{
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    align-self: center;
  }
}
#ResumeEditor{
  min-width: 35%;
  background: #444;
}
#ResumePreview{
  background: #777;
  flex-grow: 1;
  margin-left:16px;
}
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }
</style>
