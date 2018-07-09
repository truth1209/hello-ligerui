class Services {
    static getCostOrderOfFlowNoData() {
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve({
                    "retCode":0,
                    "retMessage":"获取失败",
                    // "costItems":[{"test":"11"},{"test":"22"}],
                    "costItems":[]
                })
            },1000)
        })
    }
}


export default Services;
