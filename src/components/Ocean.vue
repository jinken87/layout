<template>
  <nav 
    class="font-sansflex flex flex-row  items-center w-full  "
    :class="isMobile ? 'justify-center' : 'justify-between px-2'"
  >
    <div><img class="w-10 h-10 ml-2 cursor-pointer" @click="toUrl('/')" src="@/assets/img/cat-logo.png" alt=""></div>
    <div>
      <ul
      class="flex flex-row"
      >
        <li v-for= "li in navList" class="li" :class="isMobile ? 'w-[60px] h-[20px] mr-2'  : 'w-[100px] h-[40px]'" @click=" toUrl(li.url)">{{ li.name }}</li>
      </ul>
    </div>
    <div><router-link to=""><img class="w-5 h-5 mr-2" @click="toPage('Computer')" src="@/assets/img/menu.png" alt=""></router-link></div>
  </nav>
  <main class="font-sans w-full ">
    <div
    v-for="area in picList"
    >
    <div 
      v-if="area.key === 'right'"
      class="content  bg-zinc-800 text-white"
    >
      <article 
        class="article right  "
        :class="isMobile ? ' items-center':'mr-[300px] items-start'"
      >
        <h1 class="font-black mb-6 tracking-widest" >{{ area.title }}</h1>
        <span 
          class="mb-6" 
          :class="isMobile ? 'text-center' : ''"
          v-html="area.dec"/>
        <button class="mb-6 px-8 h-10 border-2 border-white rounded bg-black text-white ">favorite</button>
      </article>
      <aside>
        <img :class="isMobile ? 'w-[80%]' : '' " :src="`../src/assets/img/${area.img}.png`" alt="">
      </aside>
    </div>
    <div 
      v-if="area.key === 'left'"
      class="content  bg-white text-black"
    >
      <aside>
        <img 
          :class="isMobile ? 'w-[80%] ml-8':'mr-[300px]'"
          :src="`../src/assets/img/${area.img}.png`" alt="">
      </aside>
      <article 
        class="article left "
        :class="isMobile ? 'items-center' : 'items-end'"
      >
        <h1 class="font-black mb-6 tracking-widest">{{ area.title }}</h1>
        <span 
        :class=" isMobile? 'text-center' : 'mb-6 text-end'" 
        v-html="area.dec"/>
        <button class="mb-6 px-8 h-10 border-2 rounded border-black bg-white">checkout{{ width }}</button>
      </article>
    </div>

    </div>
  </main>
</template>

<script setup>
import {  ref, computed, watch, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isMobile = computed(() => width.value < 800 );
const width = ref(window.innerWidth);

const picList = [
  {key:'left', img:'a1', title: 'OUT THERE', dec:'OUT THERE  OUT THERE  OUT THERE<br> OUT THERE  OUT  OUT THERE'},
  {key:'right', img:'b1', title: 'IMMERSION', dec:'IMMERSION  IMMERSION  IMMERSION<br> IMMERSION  IMMERSION '},
  {key:'left', img:'a2', title: 'TO INFINITY', dec:'TO INFINITY  TO INFINITY  TO INFINITY<br> TO INFINITY  TO INFINITY TO '},
  {key:'right', img:'b2', title: 'STREAMLINE', dec:'STREAMLINE  STREAMLINE  STREAMLINE<br> STREAMLINE  STREAMLINE '}
];

const navList = [
  {name:'Home', url:'https://www.google.com'},
  {name:'About', url:'https://www.youtube.com'},
  {name:'Premium', url:'https://www.facebook.com'},
  {name:'Author', url:'https://getbootstrap.com/'},
  {name:'Donate', url:'https://developer.mozilla.org/zh-CN/'},
  {name:'More', url:'https://www.w3schools.com/'}
];

const toUrl = (url) => {
  location.href = url;
}

const toPage = (url) => {
  router.push(url);
}

onMounted(() => {
  watchEffect(() => {
    width.value = window.innerWidth;
  });

  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
  });
});

</script>
<style scoped>

nav{
  z-index: 10;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
}
.content{
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 50vh;
  justify-content: center;
  align-items: center;
}
.article{
  display: flex;
  flex-direction: column;
}

.left button:hover{
  background-color: gray;
  color:#fff;
  cursor: pointer;
  transition: 0.4s;
}

.right button:hover{
  background-color: gray;
  color:#000;
  cursor: pointer;
  transition: 0.4s;
}

li{
  border-radius: 4px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;

}

nav li:hover{
  background-color: #000;
  color:#fff;
  cursor: pointer;
}

li a{
      text-decoration: none;
      color: black;
      transition: 0.4s;

  }
li a:hover {
    color: #fff;;
 }
  

</style>