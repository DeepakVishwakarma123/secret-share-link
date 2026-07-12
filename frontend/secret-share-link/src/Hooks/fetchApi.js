
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

async function GetDataFromApi() {

}

export {SendDataToApi,GetDataFromApi}