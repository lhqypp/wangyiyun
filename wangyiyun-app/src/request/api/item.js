import service from "@/request";
//获取歌单详情页的数据
export function getMusicitemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌单的所有歌曲
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}

//获取歌词
export function getMusiclyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}