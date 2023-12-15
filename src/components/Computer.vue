<template>
  <div>
    <nav 
      class="font-sans flex flex-row sticky top-0 left-0  items-center w-full pl-2 bg-gray"
      :class="isMobile ? 'justify-center':'justify-start'"
    >
      <div>
        <router-link to="">
          <img class="w-10 h-10 cursor-pointer" @click=" toPage('/')" src="@/assets/img/cat-logo.png" alt="">
        </router-link>
      </div>
      <div>
        <ul
          class="flex flex-row relative"
        >
          <li v-for= "li in navList" class="li hover:bg-white" :class="isMobile ? 'w-[60px] h-[20px] mr-2'  : 'w-[100px] h-[40px]'" @click=" toUrl(li.url)">{{ li.name }}</li>
        </ul>
      </div>
    </nav>
    <main >
      <div 
      class="hello flex my-20 "
      :class="isMobile ? 'flex-col justify-center items-center' : 'flex-row  justify-center items-center'"
      >
        <article 
          class="flex flex-col    w-[30%]"
          :class="isMobile ? 'text-center' : 'items-start'"
        >
          <h1 class="font-black text-5xl mb-2 tracking-widest">{{ 'Hello.' }}</h1>
          <h1 class="font-black text-5xl mb-2 tracking-widest">{{ 'I\'m Mac.' }}</h1>
          <span class=" font-bold" :class="isMobile ? '' : 'text-end'" v-html="'I\'m a free retro Webflow template made by'"></span>
          <a href="#" class="text-black  mb-4">Mackenzie Child.</a>
          <button class="mb-6 px-2 h-10 border-2 font-bold border-black bg-gray cursor-pointer hover:bg-slate-400" @click="toUrl('https://apple.com')">Clone me on Webflow</button>
        </article>
        <aside class="flex justify-end w-[30%]" :class=" isMobile ? 'justify-center' : 'justify-end'">
          <img  class="w-[360x] h-[240px] " src="@/assets/img/a2.png" alt="">
        </aside>
      </div>
      <div class="links">
        <div class="itemContainer w-full">
          <hr >
          <div v-for="item in links" class="item">
            <span class="font-bold cursor-pointer" @click="toUrl(item.url)">{{ item.name }}</span>
            <img class="h-5 w-5 cursor-pointer" src="@/assets/img/right-up.png" alt="" @click="toUrl(item.url)">
          </div>
          <hr>

        </div>
      </div>
      <div 
      class="projects flex flex-col items-center w-full py-20 bg-gray "
      :class="isMobile? 'justify-center' : 'justify-start'"
      >
        <span class="w-[60%] font-black text-4xl mb-5" :class="isMobile ? 'text-center' : ''">Projects</span>
          
        <swiper
            v-if="!isMobile"
            class=" absolute left-[20%] w-full mr-[200px]"
            :slidesPerView="3"
            :spaceBetween="100"
            :freeMode="true"
            :modules="[FreeMode, Pagination]"
          >
            <swiper-slide v-for="item in swiperList">
              <div class="swiper-inner min-w-[400px] min-h-[400px] left-0">
              <div class="title"> 
                <div class="icon ml-4 mr-20"><img class=" w-10 h-10" src="../assets/img/point.png" alt=""></div>
                <div class="text text-l font-bold">{{item.title}}</div>
              </div>
              <div class="fig h-[20%] overflow-hidden"><img class="w-full" :src="`../src/assets/img/${item.img}`" alt="qqq"></div>
              <div class="content">
                <article class="flex flex-col  items-start">
                  <h1 class="font-black text-xl mb-6 tracking-widest">{{ item.h1 }}</h1>
                  <span class=" text-start font-bold mb-6" v-html="item.text"></span>
                  <button class="px-2 h-10 border-2 font-bold border-black bg-gray cursor-pointer hover:bg-slate-400" @click="toUrl('https://unsplash.com/')">{{item.btn}}</button>
                </article>
              </div>
              </div>
            </swiper-slide>
        </swiper>
        <div v-else v-for="item in swiperList">
          <div class="swiper-inner min-w-[400px] min-h-[400px] left-0">
            <div class="title"> 
              <div class="icon ml-4 mr-20"><img class=" w-10 h-10" src="../assets/img/point.png" alt=""></div>
              <div class="text text-l font-bold">{{item.title}}</div>
            </div>
            <div class="fig h-[20%] overflow-hidden"><img class="w-full" :src="`../src/assets/img/${item.img}`" alt="qqq"></div>
            <div class="content">
              <article class="flex flex-col  items-start">
                <h1 class="font-black text-xl mb-6 tracking-widest">{{ item.h1 }}</h1>
                <span class=" text-start font-bold mb-6" v-html="item.text"></span>
                <button class="px-2 h-10 border-2 font-bold border-black bg-gray cursor-pointer hover:bg-slate-400" @click="toUrl('https://unsplash.com/')">{{item.btn}}</button>
              </article>
            </div>
            </div>
          </div>
      </div>
    </main>
    
  </div>
</template>

<script setup>
import {  ref, computed, onMounted, watchEffect } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/style.css';

const route = useRouter();
const isMobile = computed(() => width.value < 800 );
const width = ref(window.innerWidth);

const navList = [
  {name:'Home', url:'https://www.google.com'},
  {name:'About', url:'https://www.youtube.com'},
  {name:'Premium', url:'https://www.facebook.com'},
  {name:'Author', url:'https://getbootstrap.com/'},
  {name:'Donate', url:'https://developer.mozilla.org/zh-CN/'},
  {name:'More', url:'https://www.w3schools.com/'}
];

const links = [
  {name:'Premium', url:'https://www.facebook.com'},
  {name:'Author', url:'https://getbootstrap.com/'},
  {name:'Donate', url:'https://developer.mozilla.org/zh-CN/'},
  {name:'More', url:'https://www.w3schools.com/'}
];

const swiperList = [
  {title: '2019-06-15-project.html', img: 'a1.png', h1: 'Possimus', text: 'I\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made by', btn: 'Clone me on Webflow'},
  {title: '2020-07-14-project.html', img: 'a2.png', h1: 'Dolorum Ullam Totam', text: 'I\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI. ', btn: 'Clone me '},
  {title: '2021-09-30-project.html', img: 'b1.png', h1: 'Ullam', text: 'I\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made by. ', btn: ' Webflow'},
  {title: '2022-11-05-project.html', img: 'b2.png', h1: 'Totam', text: 'I\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free . ', btn: 'on Webflow'},
  {title: '2023-12-10-project.html', img: 'a2.png', h1: 'Dolorum', text: 'I\'m a free retro Webflow template made byI\'m a free retro Webflow template made byI\'m a free retro Webflow . ', btn: 'Clone on on on'},
  {title: '2024-01-20-project.html', img: 'b1.png', h1: 'Possimus', text: 'I\'m a free retro Webflow template made byI\. ', btn: 'Clone me on Webflow'}
]

const toUrl = (url) => {
  location.href = url;
}

const toPage = (url) => {
  route.push(url);
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

nav {
  border-bottom: 2px solid black ;
}
.li{
  border-radius: 4px;
  list-style-type: none;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
}

hr {
    width: 20%;
    top: 50%;
    height: 20px;
    border-top: 2px solid black;
    border-right: 2px solid rgb(187,187,187);
    border-left: 2px solid rgb(187,187,187);
    border-bottom: 2px solid rgb(187,187,187);
    background-color: rgb(187,187,187);
  }

.itemContainer {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;

}
.item {
  display: flex;
  width: 15%;
  justify-content: space-between;
  border: 2px solid black; 
  align-items: center;
  padding: 8px 16px;  
  background-color: rgb(187,187,187);
}

.swiper-slider {
  width: 400px;  
}

.swiper-inner {
  width: 400px;
  height: 400px;
  border: 2px solid black;
  background-color: #fff;
  box-shadow: 5px 5px 1px 1px black;
  margin-bottom: 8px;
}

.title {
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
  background-color: rgb(176,176,176); 
  border-bottom: 2px solid black;
}

.content {
  padding: 20px;
  background-color: #fff;
  border-top: 2px solid black;
}
</style>