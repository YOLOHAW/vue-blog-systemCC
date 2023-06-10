<template>
<div class="home">
   <div v-if="error">
    {{error}}
  </div>
  <div v-if="posts.length>0" class="layout">
    <div>
      <PostList :posts="posts"></PostList>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
  <div v-else><Spinner></Spinner></div>
 </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../composable/Spinner'
import { ref } from 'vue'
import PostList from '../components/PostList'
// @ is an alias to /src
import getPosts from "../composable/getPosts"

export default {
  name: 'HomeView',
  components: {
    TagCloud,
    Spinner,
    PostList,
  },
  setup(){
    let {error,posts,load} = getPosts()
    
    load();
    
    return {posts,error}
    }}
</script>

<style>
.home{
  max-width: 1200px;
  margin:0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap:20px
}
</style>