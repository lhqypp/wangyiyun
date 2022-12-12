<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in  state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import { getBanner } from '@/request/api/home';
export default {
    setup() {
        const state = reactive({
            images: [
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]
        });
        onMounted(async () => {
            // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
            //     console.log(res);
            //     state.images= res.data.banners
            // })
            let res = await getBanner();
            state.images = res.data.banners
            // console.log(res)
        })
        return { state };
    },
};
</script>

<style lang="less"  >
#swiperTop {
    .van-swipe {
        width: 100%;
        padding: 10px;

        .van-swipe__track {
            .van-swipe-item {

                img {
                    width: auto;
                    height: 2.8rem;
                    border-radius: 0.1rem;
                }
            }
        }

        .van-swipe__indicator--active {
            background-color: rgb(219, 130, 130)
        }
    }
}
</style>