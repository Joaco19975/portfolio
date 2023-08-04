<script setup>
import Menu from './components/Menu.vue';
import { ref, onMounted } from 'vue';

const skills = ref([]);

const loadSkills = async () => {
  const skillData = [
    { name: 'JavaScript', image: await import('@/assets/img/javascriptt.png').then(m => m.default), href: 'https://es.wikipedia.org/wiki/JavaScript' },
    { name: 'PHP', image: await import('@/assets/img/php-logo.jpg').then(m => m.default), href: 'https://es.wikipedia.org/wiki/PHP' },
    { name:'Laravel', image: await import('@/assets/img/Laravel.jpg').then(m => m.default), href: 'https://es.wikipedia.org/wiki/Laravel' },
    { name:'SQL', image: await import('@/assets/img/sql.jpeg').then(m => m.default), href: 'https://es.wikipedia.org/wiki/SQL' },
    { name:'MySQL', image: await import('@/assets/img/MySQL.jpg').then(m => m.default), href: 'https://es.wikipedia.org/wiki/MySQL' },
    { name:'Git', image: await import('@/assets/img/Git.png').then(m => m.default), href: 'https://es.wikipedia.org/wiki/Git' },
    { name:'Github', image: await import('@/assets/img/github.png').then(m => m.default), href: 'https://es.wikipedia.org/wiki/GitHub' },


    // Agrega más habilidades aquí si es necesario
  ];
  skills.value = skillData;
};


const currentImageIndex = ref([]);


const prevImage = (projectIndex) => {
  currentImageIndex.value[projectIndex] = (currentImageIndex.value[projectIndex] - 1 + projects.value[projectIndex].images.length) % projects.value[projectIndex].images.length;
  console.log('ANTERIOR');
};

const nextImage = (projectIndex) => {
  currentImageIndex.value[projectIndex] = (currentImageIndex.value[projectIndex] + 1) % projects.value[projectIndex].images.length;
  console.log('SIGUIENTE');
};


const projects = ref([]);

const loadProjects = async () => {
  const projectData = [
  {title: 'Sistema de gestión de cine', 
  description: "Sistema de gestión de cine para la compra de entradas online del lado del cliente, y la administración del lado del Administrador. (Arreglando errores de seguridad en producción)" , 
  images:[await import('@/assets/projectsimg/cine.jpg').then((m) => m.default)], 
  manual:true,  manualLink: (await import('@/assets/manual-usuario/Manual-Usuario-Cine.pdf')).default, url:true ,href:"https://gestor-de-cine-production.up.railway.app/",   githubhref: "https://github.com/Joaco19975/gestor-de-cine",
 },
  {title: 'Sistema de gestion de hospital', description: "Sistema donde se puede agregar pacientes, medicinas y llevar un registro de qué medicina se le da al paciente, cualquier hospital se puede registrar.", 
  images:[(await import('@/assets/projectsimg/hospital/principal.jpg')).default,
      (await import('@/assets/projectsimg/hospital/pacientes.jpg')).default,
      (await import('@/assets/projectsimg/hospital/medicinas.jpg')).default,
      (await import('@/assets/projectsimg/hospital/registro.jpg')).default,
      ],
      githubhref: "https://github.com/Joaco19975/Registros-medicos-pacientes", 
  }

  ];

  console.log("projectData", projectData);

  for (const project of projectData) {
    if (Array.isArray(project.images)) {
      for (const image of project.images) {
        console.log("Image", image);
      }
    } else {
      console.log("Single Image", project.images);
    }
  }
  
  projects.value = projectData;

  currentImageIndex.value = Array(projects.value.length).fill(0);
};


onMounted(() => {
  const showBrackets = ref(true);

  setInterval(() => {
    showBrackets.value = !showBrackets.value;
  }, 1000);

 

  loadProjects();
  loadSkills();
});

</script>
<template>
   <Menu />
  <div class="center-content">
      <!-- Aquí colocas tu contenido central -->
      <h1 class="blinking-brackets">
        <span class="opening-bracket">[</span>
        👋 Bienvenido 
        <span class="closing-bracket">]</span>
      </h1>
      
      <div class="about-me" id="about-me">
       <h2>Sobre mi</h2>
        <p>
          Soy estudiante de la Tecnicatura universitaria en programación de la Universidad Tecnológica Nacional. <br>
          Me apasiona programar, aprender constantemente y poder formar parte de la evolución de la informática. <br>
          🎯Mi objetivo es seguir formándome en las distintas tecnologías del área de la informática y el desarrollo de software, 
          y adquirir experiencia en la resolución de problemas cada vez más complejos que permitan hacer un cambio positivo en el mundo que nos rodea. Además, deseo desarrollar mi carrera profesional formando parte de una empresa que me permita aplicar todo lo aprendido hasta ahora y seguir creciendo tanto personal como profesionalmente para lograr los mejores resultados posibles.

        </p>

      </div>
      
      <div class="skills" id="skills">
          <h2>Habilidades</h2>
          <div class="skills-container">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <a :href=" skill.href "  style="color: black;" target="_blank">
            <img :src="skill.image" :alt="skill.name" class="skill-image" />
            <div class="skill-name">{{ skill.name }}</div>
          </a>
          </div>
        </div>

      </div>

      <div class="projects" id="projects">
        <h2>Proyectos</h2>
        <div class="projects-container">
          <div v-for="(project, index) in projects" :key="project.title" class="project-item">
            <div>
            <!-- Si es un array de imágenes, muestra el carrusel -->
            <h3>{{ project.title }}</h3>
            <img v-if="Array.isArray(project.images) && project.images.length > 1" :src="project.images[currentImageIndex[index]]" :alt="project.title" class="project-image" />
            <!-- Si es una única imagen, muestra la imagen -->
            <img v-else :src="project.images[0]" :alt="project.title" class="project-image" />
            <!-- Agrega la navegación solo si es un carrusel -->
            <div v-if="Array.isArray(project.images) && project.images.length > 1" class="image-navigation">
              <button @click="prevImage(index)" class="navigation-button">Anterior</button>
              <button @click="nextImage(index)" class="navigation-button">Siguiente</button>
            </div>
           </div>


          
          <p>{{ project.description }}</p>
          <a :href="project.githubhref" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /> Repositorio</a> <br>
          <a v-if="project.url" :href="project.href" target="_blank">Visitar sitio web</a><br>
          <a v-if="project.manual" :href="project.manualLink" download>Descargar manual de usuario</a><br>
          
        </div>


        </div>

      </div>

      <div class="contacts" id="contacts">
         <h2>Contacto</h2>
         <a href="https://www.instagram.com/paradelajoaco/" class="contact-link"  target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://twitter.com/ParadelaJoaquin" class="contact-link" target="_blank" >
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="https://www.linkedin.com/in/joaquin-paradela/" class="contact-link" target="_blank" >
          <font-awesome-icon icon="fa-brands fa-linkedin" />   
        </a>
        <a href="https://github.com/Joaco19975" class="contact-link" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
      </div>
  </div>
 
  
</template>

<style scoped>
a {
  color:black;
}
a:hover{
  color:white;

}
.center-content {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Establece una altura mínima igual a la altura de la ventana */
 /* height: 100vh;  Esto asegura que el contenido esté centrado verticalmente en la pantalla */
}

/* Estilos para el párrafo */
.center-content p {
  /* Establece el ancho máximo para el párrafo */
  max-width: 800px;
  /* Añade margen superior para separarlo del título */
  margin-top: 20px;
}

/* Estilos para el contenedor "Sobre mi" */
.about-me {
  text-align: center; /* Centrar el contenido del contenedor */
  margin-top: 100px; /* Ajustar el margen superior según tu preferencia */
}

/* Estilos para los botones de navegación */
.navigation-button {
    background-color: #007BFF; /* Color de fondo del botón */
    color: white; /* Color del texto del botón */
    border: none; /* Quitamos el borde del botón */
    padding: 8px 16px; /* Ajustamos el espaciado interno del botón */
    border-radius: 4px; /* Añadimos bordes redondeados al botón */
    cursor: pointer; /* Cambiamos el cursor al pasar por encima del botón */
    margin: 4px; /* Ajustamos el margen del botón */
    font-size: 14px; /* Tamaño del texto del botón */
    transition: background-color 0.3s; /* Agregamos una transición al cambio de color de fondo */
  }

  /* Estilos para el botón anterior cuando se pasa el cursor por encima */
  .navigation-button:hover {
    background-color: #0056b3; /* Cambiamos el color de fondo al pasar el cursor */
  }

  /* Estilos para el botón siguiente cuando se pasa el cursor por encima */
  .navigation-button:nth-child(2):hover {
    background-color: #0056b3; /* Cambiamos el color de fondo al pasar el cursor */
  }

/* Estilos para la sección de proyectos */
.projects {
  text-align: center; /* Centrar el contenido del contenedor */
  margin-top: 100px;
}

.projects-container {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.project-item {
  text-align: center;
  max-width: 300px; /* Ajusta el ancho máximo de cada proyecto */
}

.project-image {
  width: 100%; /* Ajusta el tamaño de la imagen dentro del ancho máximo */
  border-radius: 8px;
}


/* Estilos para el contenedor de habilidades */
.skills {
  text-align: center;
  margin-top: 100px;
}

.skills-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-image {
  width: 100px; /* Ajusta el tamaño de la imagen */
  height: 100px;
  border-radius: 80%;
  margin-top: 90px;
}

.skill-name {
  margin-top: 10px; /* Ajusta el margen entre la imagen y el nombre */
}

.contacts {
  text-align: center; /* Centrar el contenido del contenedor */
  margin-top: 100px; /* Ajustar el margen superior según tu preferencia */  
}
.contacts a.contact-link {
  color: black;
  font-size: 50px;
  text-decoration: none;
  margin-right: 30px; /* Ajusta este valor para cambiar la separación entre los íconos */
}

.contacts a.contact-link:hover {
  color: white;
}
/* Estilos para los corchetes */
.blinking-brackets {
  font-size: 30px; /* Tamaño de fuente opcional para los corchetes */
  margin-top: 30px !important;
}

.opening-bracket,
.closing-bracket {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

</style>
