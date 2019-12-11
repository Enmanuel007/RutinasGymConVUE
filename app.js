const app = new Vue({
    el: '#app',
    data:{
        titulo: ' Rutina Gym',
        tareas: [],
        nuevaTarea:''
        
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            //console.log(this.tareas);
            this.nuevaTarea = '';
            localStorage.setItem('gym-local', JSON.stringify(this.tareas));

        },

        cambiarEstado: function(index){
            //console.log('editar',index);
            this.tareas[index].estado = true;
            localStorage.setItem('gym-local', JSON.stringify(this.tareas));

        },

        eliminarTarea: function(index){
            //console.log('editar',index);
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-local', JSON.stringify(this.tareas));

        }
    },

    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-local'));
        if(datosDB=== null){
            this.tareas = [];
        }
        else{
            this.tareas = datosDB;
        }
    }

});