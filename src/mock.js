const Mock =require('mockjs')
const Random = Mock.Random
let Result={
    code:200,
    msg:'操作成功',
    data:null
}
Mock.mock('/image','post',()=>{
    Result.data={
        token:Random.string(32),
        Image:Random.dataImage('120×40','ww332')
    }
    return Result
})
Mock.mock('/login','post',()=>{
    
    return Result
})