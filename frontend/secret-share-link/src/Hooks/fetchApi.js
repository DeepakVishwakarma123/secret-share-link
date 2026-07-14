
async function SendDataToApi(url,bodyObject) {

    try {
         let response=await fetch(
        `${url}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(
                bodyObject
            )
        })

        return response
        
    } catch (error) {
     return Promise.reject(error)   
    }
}

async function GetDataFromApi(url) {

  try {
      let response=await fetch(url)
      let jsondata=await response.json()
      return jsondata
  } catch (error) {
     return Promise.reject("can not able to communicate to the server")
  }
}

export {SendDataToApi,GetDataFromApi}