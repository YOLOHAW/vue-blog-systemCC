import { ref } from "vue";
import { db } from "@/firebase/config";
let getPost=(id)=>{
    let error=ref("")

    let post=ref(null)

    let load=async()=>{
       try{ 
        // let response=await fetch("http://localhost:3000/posts/"+id);
        //     if(response.status===404){
        //         throw new Error("not found that exact url");
        //     }
        //     let data=await response.json();
        //     post.value=data;}
        let doc=await db.collection("posts").doc(id).get()
        post.value={id:doc.id,...doc.data()
        }
    }
    catch(err){
        error.value=err.message
    }
}
    return {error,post,load}
}
export default getPost;

