const Mock =require('mockjs')
const Random = Mock.Random
let Result={
    code:200,
    msg:'操作成功',
    data:null
}
Mock.mock('/image','get',()=>{
    Result.data={
        token:Random.string(32),
        Image:Random.dataImage('120×40','ww332')
    }
    return Result
})
Mock.mock('/login','post',()=>{

    return Result
})
Mock.mock('/sys/userInfo','get',()=>{
    Result.data={
  id:"1",
username:"张三",
avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}

    return Result
})