
<template>
  <div id="page">
    <header>
      <Topbar></Topbar>
    </header>   
    <main>
      <ResumeEditor></ResumeEditor>
      <ResumePreview></ResumePreview>
    </main>
  </div>
</template>




<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'
import Topbar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
export default {
  name: 'app',
  components:{
    Topbar,
    ResumeEditor,
    ResumePreview,
  },
  data() {
    return {
      text:"你好",
    }    
  }
}
</script>

<style>

#page {
  height: 100vh;
  display: flex;
  flex-direction:column;
  background: #EAEBEC;
}
#page>main{
  min-width:1024px;
  max-width:1440px;
  margin:0;
  display: flex;
  justify-content:space-between;
  padding: 0 16px;
  flex-grow:1;
  margin-top:16px;
  margin-bottom:16px;
  width:100%;
  align-self:center;
}

#ResumeEditor{
    width: 35%;
     background: #444;
}
#ResumePreview{
     background: #777;
     flex-grow: 1;
     margin-left:16px;
}
</style>
