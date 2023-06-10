<template>
<div class="tag">
  <div v-if="error">
    {{error}}
  </div>
  <h1>Tag {{tag}}</h1>
  <div v-if="posts.length" class="layout">
    <div>
       <PostList :posts="filteredPosts"></PostList>
    </div>
    <div>
      <TagCloud :posts="posts" class="pill"></TagCloud>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import { computed } from 'vue';
 import PostList from '../components/PostList'
import getPosts from "../composable/getPosts"
export default {
    props:["tag"],
    components: {
    TagCloud, PostList },
    setup(props){
        let {posts,error,load}=getPosts();
       load();
        // let filteredPosts=computed(()=>{
        //     return posts.value.filter((post)=>{
        //         return post.tags.includes(props.tag)
        //     })
        // })
        let filteredPosts=computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })
         
        return {posts,error,filteredPosts}
    }

}
</script>

<style>
 .tag{
  max-width: 1200px;
  margin: 0 auto;
 }
</style>