mern-classroom/client/course/api-course.js

    const create = async (params, credentials, course) =>{
try{
   let response = await fetch('api/courses/by/'+params
  {
     method: 'POST',
headers: {
    'Accept': 'application/json',
'Authorization': 'Bearer ' + credentials.t
},
body: course
})
  return response.json()
  }catch(err){
  console.log(err)
  }
}