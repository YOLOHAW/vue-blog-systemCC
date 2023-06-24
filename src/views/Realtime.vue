<template>
  <h3>Realtime databaseSet</h3>
  <div v-for="post in posts" :key="post.id">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from 'vue'
export default {
    setup(){
        let posts=ref([])
        db.collection("posts").orderBy("created_at","desc").onSnapshot((snap)=>{
            posts.value=snap.docs.map((doc)=>{
                return {...doc.data(),id:doc.id}
            })
        })
        return {posts}
    }
}
</script>

<style>

</style>