import { ref } from "vue";

let getPosts=()=>{
    
    let error=ref("");

    let posts=ref([])

    let load=async()=>{
    try{ 
      // await new Promise((resolve,reject)=>{
      //   setTimeout(resolve,3000)
      //    })
    
      let response=await fetch("http://localhost:3000/posts")
      if(response.status==404){
        throw new Error("NOT FOUND URL")
      }
      let datas=await response.json()
      posts.value=datas
      // let res=await db.collection("posts").get()
      // posts.value=res.docs.map((doc)=>{
      //   return {id:doc.id,...doc.data()}
      // }) 

    } catch(err){
        error.value=err.message
    }
    
    }
    return {error,posts,load}
}
export default getPosts;