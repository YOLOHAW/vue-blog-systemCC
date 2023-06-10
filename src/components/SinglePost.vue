<template>
<div class="post">
  <router-link :to="{name:'Detail',params:{id:post.id}}"><h1>{{post.title}}</h1></router-link>
  <p>{{cutPostBody}}</p>
  <div v-for="tag in post.tags" :key="tag">
    <router-link :to="{name:'Tag',params:{tag}}" class="pill">{{tag}}</router-link>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['post'],
    setup(props){
        let cutPostBody=computed(()=>{
            return props.post.body.substring(0,100)+"...";
        })
        return {cutPostBody}
    }
}
</script>

<style>

</style>