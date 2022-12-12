<template>
    <div class="FooterMusic">
        <div class="footerLeft" @click="updateDetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt="">
            <div>
                <p>{{ playList[playListIndex].name }}</p>
                <span>横滑切换上下首哦</span>
            </div>
        </div>
        <div class="footerRight">

            <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zu"></use>
            </svg>
        </div>
        <audio ref="audio" :src="` https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `">
        </audio>
        <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%', width: '100%' }">
            <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"
                :addDuration="addDuration" />
        </van-popup>
    </div>
</template>
<script>
import MusicDetail from '@/components/Item/MusicDetail.vue'
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            interVal: 0,
        };
    },
    computed: {
        ...mapState(['playList', 'playListIndex', 'isbtnShow', 'detailShow'])
    },
    methods: {
        play: function () {
            // 判断音乐是否播放
            if (this.$refs.audio.paused) {

                this.$refs.audio.play();
                this.updateIsbtnShow(false);
                this.updateTime();   // 触发定时器
                console.log(this.$refs);
                // console.log(this.isbtnShow)  测试
                // this.updateTime(); //播放就调用函数进行传值
            } else {
                this.$refs.audio.pause();
                this.updateIsbtnShow(true);
                clearInterval(this.interVal)   //暂停清除定时器
                // console.log(this.isbtnShow)测试
                // clearInterval(this.interVal); //暂停清除定时器
            }
        },
        addDuration: function () {
            this.updateDuration(this.$refs.audio.duration)
        },
        updateTime: function () {
            this.interVal = setInterval(() => {
                this.updateCurrentTime(this.$refs.audio.currentTime)
            }, 1000)
        },
        ...mapMutations(['updateIsbtnShow', 'updateDetailShow', 'updateCurrentTime', 'updateDuration'])         //

    },
    watch: {
        playListIndex: function () {   //监听下标发生改变，音乐主动播放
            this.$refs.audio.autoplay = true;
            if (this.$refs.audio.paused) {    //如果该图标
                this.updateIsbtnShow(false)
            }
        },
        playList: function () {
            if (this.isbtnShow) {
                this.$refs.audio.autoplay = true;
                this.updateIsbtnShow(false)
            }
        }

    },
    components: {
        MusicDetail
    },
    updated() {
        this.$store.dispatch('getLyric', this.playList[this.playListIndex].id);
        this.addDuration()
    },
    mounted() {
        this.$store.dispatch('getLyric', this.playList[this.playListIndex].id);
    }
}
</script>
<style lang="less" scoped>
.FooterMusic {
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    border-top: .02rem solid #999;
    position: fixed;
    display: flex;
    bottom: 0;

    .footerLeft {
        display: flex;
        width: 55%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        margin-left: .4rem;

        img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }

    .footerRight {
        display: flex;
        width: 20%;
        height: 100%;
        margin-left: 60px;
        justify-content: space-between;
        align-items: center;
    }
}
</style>