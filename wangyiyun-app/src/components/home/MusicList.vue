<template>
    <div class="musicList">
        <div class="musicTot">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicConten">
            <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators=false>
                <van-swipe-item v-for="result in state.musicList" >
                <router-link :to="{path:'/ltemMusic',query:{id:result.id}}">
                    <img :src="result.picUrl" alt="">
                    <span class="playConte">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-play"></use>
                        </svg>
                        {{ changeCount(result.playCount) }}
                    </span>
                    <span class="name">{{ result.name }}</span>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import { getMusicList } from "@/request/api/home";
import { reactive, onMounted } from 'vue'
export default {
    setup() {
        const state = reactive({
            musicList: []
        });
        onMounted(async () => {
            let res = await getMusicList()
            // console.log(res);
            state.musicList = res.data.result;
        });
        function changeCount(num){
            if (num >= 100000000) {
                return (num / 100000000).toFixed(1) + "亿"
            } else if (num >= 10000) {
                return (num / 10000).toFixed(1) + "万"
            }
        }
        return { state ,changeCount};
    },

}
</script>
<style lang="less" scoped>
.musicList {
    position: relative;
    width: 100%;
    height: 5rem;

    .musicTot {
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;

        .title {
            font-size: 0.4rem;
            font-weight: 900;
        }

        .more {
            border: 1px solid;
            text-align: center;
            line-height: 0.6rem;
            padding: 0.0.2rem;
            border-radius: 0.4rem;
        }
    }

    .musicConten {
        width: 100%;
        height: 4rems;

        .my-swipe {
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                border-radius: 0.1rem;
                padding-right:0.06rem;
            }

            .playConte {
                position: absolute;
                z-index: 100;
                right: 0.3rem;  
                color: white;
                margin-top: 0.06rem;
                justify-content: space-between;
                .icon {
                    width: 0.3rem;
                    height: 0.3rem;
                }
                .name{
                    bottom: 0px;
                }
            }
        }
    }
}
</style>