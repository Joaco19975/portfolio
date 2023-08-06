<script setup>
import {ref} from 'vue';
const props = defineProps(['item', 'collapsed']);
const isScrolling = ref(false);

const handleItemClick = (item) => {

  if (item.anchor) {
    const element = document.getElementById(item.anchor);
    if (element) {
      isScrolling.value = true;
      element.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrolling.value = false;
      }, 500);
    }
    
  }else{
    console.log("NO EXISTE");

  }

  item.onClick();
}


</script>

<template>
     <a class="item" @click="handleItemClick(item)">
      <div class="icon">
        <font-awesome-icon :icon="['fa-solid', props.item.icon]" size="2x" />
      </div>
      <div class="title" v-if="!collapsed">{{ props.item.title }}</div>
    </a>
  </template>

<style scoped>

/* Estilos para la animación de desplazamiento */


a {
    color:white;
    text-decoration: none;
    display: block;
}
a:hover {
    background-color: white;
    color:black;
}
.item{
    display:flex;
    align-items:center;
    padding:10px;
    gap:10px;
}

.item .icon {
    width: 80px;
    display: flex;
    justify-content: center;
}

@media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    .item .icon {
        font-size: 8px; /* Reduce el tamaño del icono en dispositivos móviles */
    }
}
</style>