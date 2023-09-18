import profileImage from '@/assets/img/progra.jpg';
import curriculumPDF from '../assets/cv/Joaquinparadela.pdf'; // Ruta relativa directa
export default {
    profile: {
        name: 'Joaquin Paradela',
        image: profileImage,
        onClick(){
            console.log("Hola joaco");
        }
    },

    items:[
        {
            id:0,
            title:  'Sobre mi',
            icon: 'fa-house-user',
            onClick(){
                console.log("Sobre mi");
            },
            anchor: 'about-me', // Agrega el identificador del anclaje aquí
        },
        {
            id:1,
            title:  'Habilidades',
            icon: 'laptop-code',
            onClick(){
                console.log("Habilidades2");
            },
            anchor: 'skills', // Agrega el identificador del anclaje aquí
        },
        {
            id:2,
            title:  'Proyectos',
            icon: 'fa-fire',
            onClick(){
                console.log("Proyectos");
            },
            anchor: 'projects', // Agrega el identificador del anclaje aquí
        },
        {
            id:3,
            title: 'Contacto',
            icon: 'user-secret',
            onClick(){
                console.log("Contacto");
            },
            anchor: 'contacts', // Agrega el identificador del anclaje aquí
        },
        {
            id:4,
            title: 'Descargar curriculum',
            icon: 'file',
            onClick(){
                const link = document.createElement('a');
                link.href = curriculumPDF;
                link.download = 'Joaquin_Paradela_fullstack_3.pdf'; // Nombre del archivo que se descargará
                link.target = '_blank';
                link.click();
            }
            
        },
        
        
    ],
   

}