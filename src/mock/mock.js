import Mock from "mockjs";

let { data } = Mock.mock({
    'data': [
        {
            allTime:86400
        }
    ]
})


Mock.mock('/time/list', 'post', (config) => {
    // console.log(config);
    // const req = JSON.parse(config.body)
    // console.log(req);
    let res = {
        code: '200',
        message: '获取时间成功',
        data
    }
    return res
})
Mock.mock('/time/update', 'post', (config) => {
    // console.log(config);
    const req = JSON.parse(config.body)
    console.log(req);
    // console.log(data[0].allTime);
    let res = {
        code: '200',
        message: '修改时间成功',
    }
    data[0].allTime=req.currentTime
    return res
})