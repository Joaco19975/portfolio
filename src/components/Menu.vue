<script setup>
import {ref} from 'vue';
import menuItems from './menuItems';
import MenuItem from './MenuItem.vue'

//para contraer o expandir nuestro menu vertical
const collapsed = ref(true);
</script>

<template>
    <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
       <div class="header">
           <button class="menu-button" @click="collapsed = !collapsed">
             <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
            </button>
       </div>

        <div class="profile">
            <img :src="menuItems.profile.image" alt="">
                <div class="profile-name" v-if="!collapsed">
                    {{ menuItems.profile.name }}
                </div>
        </div>

        <div class="menu-items">
            <ul>
                <MenuItem
                 v-for="menuItem in menuItems.items" 
                 :key="menuItem.id"
                 :item="menuItem" 
                 :collapsed="collapsed" 
                 
                 />
                
            </ul>
        </div>
    </div>
</template>


<style scoped>

.menu {
    background-color: #222;
    color: white;
    height: 100vh;
    transition: width 0.3s;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: auto; /* Agrega un scroll vertical en caso de contenido largo */
}

.header {
    display: flex;
    justify-content: end;
}

.menu-button {
    border: none;
    background-color: transparent;
    color: white;
    padding: 10px;
    font-size: 18px; /* Reduce el tamaño del icono del menú */
}

.collapsed {
    width: 90px;
}

.expanded {
    width: 250px; /* Reduce el ancho del menú expandido */
}

.profile {
    padding: 10px;
    text-align:center;
    
}

.profile img {
    border-radius: 50%;
    max-width: 100px; /* Reduce el tamaño máximo de la imagen */
        width: 100%;
}

.profile-name {
    padding: 10px 0;
    font-size: 18px;
}

.menu-items ul {
    list-style:none;
    padding: 0;
    margin: 0;
}

@media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    .collapsed {
        width: 20px; /* Reduce el ancho del menú en dispositivos móviles */
    }
    .menu-button {
        font-size: 8px; /* Reduce el tamaño del icono del menú en dispositivos móviles */
    }
}


</style>