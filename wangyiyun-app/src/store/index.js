import { createStore } from 'vuex'
import { getMusiclyric } from '@/request/api/item.js'
export default createStore({
  state: {
    playList: [{
      al: {
        id: 34985203,
        name: "Psycho, Pt. 2",
        pic: 109951164939830020,
        picUrl: "https://p2.music.126.net/Z8q0skkFiyZUxzJK2uCYcg==/109951164939830012.jpg",
        pic_str: "109951164939830012",
      },
      id: 440208643,
      ar: [{
        name: "Russ"
      }]

    }],
    playListIndex: 0,//默认下标为0
    isbtnShow: true,//暂停按钮显示 
    detailShow: false,//歌曲详情页显示
    lyricList: {},  //歌词
    currentTime: 0, //当前时间
    duration: 0,//歌曲的总时长
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    updatePlayList: function (state, value) {
      state.playList = value
      console.log(state.playList)       //测试
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
      // console.log(state.playListIndex) //测试
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList: function (state, value) {
      state.lyricList = value
    },
    updateCurrentTime: function (state, value) {
      console.log(state.currentTime);
      state.currentTime = value
    },
    updateDuration: function (state, value) {
      state.duration = value
    },
    pushPlayList: function (state, value) {
      state.playList.push(value)
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusiclyric(value)
      console.log(res);
      context.commit("updateLyricList", res.data.lrc)
    }
  },
  modules: {
  }
})
