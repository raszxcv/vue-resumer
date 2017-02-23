import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    selected:'profile',
    	resume:{
    		config:[
    			{field:'profile',icon:'id'},
    			{field:'workHistory',icon:'work'},
    			{field:'education',icon:'book'},
    			{field:'projects',icon:'heart'},
    			{field:'awards',icon:'cup'},
    			{field:'contacts',icon:'phone'},
    		],
    		profile:{
    			name:{name:'姓名',cnt:'真皮沙发'},
    			city:{city:'城市',cnt:'深圳'},
    			title:{title:'标题?',cnt:'皮'},
    			birthday:{birthday:'生日',cnt:'1996-10-21'}	
    		},
    		'workHistory': [
            { company: '神盾局', content: `我的第一份工作是保护地球
				2.啊实打实大
				3.啥时打算打算
				4.啊实打实大`},
            { company: '复仇者联盟', content: `我的第二份工作是毁灭地球
            2.
            3.
            4.`},
   																
          ],
          education: [
            { school: '加里敦', content: '吃喝玩乐' },
            { school: '热血高校', content: '文字' },
          ],
          projects: [
            { name: 'project A', content: '文字' },
            { name: 'project B', content: '文字' },
          ],
          awards: [
            { name: 'awards A', content: '文字' },
            { name: 'awards B', content: '文字' },
          ],
          contacts: [
            { contact: 'phone', content: '13812345678' },
            { contact: 'qq', content: '12345678' },
          ],
    	}
  },
  mutations: {
  
    switchTab(state,payload){
    	state.selected = payload
    }
  }
})


