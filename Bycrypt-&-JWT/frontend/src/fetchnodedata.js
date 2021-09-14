var ServerURL="http://localhost:5000"
var axios=require('axios')

const postData=async(url, body)=>{
    try
    {  
        const response = await fetch(`${ServerURL}/${url}`, {
            method: "POST",
            mode: "cors",
            headers: { 
            Authorization: localStorage.getItem("token"), 
            "Content-Type": "application/json;charset=utf-8",},
            body: JSON.stringify(body),
          });
        const result = await response.json();
        if (result == "expire") 
        {
            alert('session expired')
            window.location.href="http://localhost:3000/Signin"  
            return []
        }
        else
        {
          //alert('okay')
            return result    
        }
       
    }
    catch(e)
    {
        console.log(e)
        return null
    }
}



export { postData, ServerURL}