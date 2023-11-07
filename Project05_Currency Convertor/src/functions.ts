
export let cnvData= async (data:any)=>{
  
    let cnvData = await fetch(data)
    let res = await cnvData.json()
    return res.conversion_rate


};