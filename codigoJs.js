var usuarios = [
    {
        nombre: 'Monica',
        genero: 'F',
        hobby: 'star wars',
        avatar: 'avatar1.png'
    },
    {
        nombre: 'Karla',
        genero: 'F',
        hobby: 'deportes',
        avatar: 'avatar2.png'
    },
    {
        nombre: 'Miguel',
        genero: 'M',
        hobby: 'star wars',
        avatar: 'avatar3.png'
    },
    {
        nombre: 'Jose',
        genero: 'M',
        hobby: 'videojuegos',
        avatar: 'avatar4.png'
    },
    {
        nombre: 'Ana',
        genero: 'F',
        hobby: 'videojuegos',
        avatar: 'avatar5.png'
    },
    {
        nombre: 'Pedro',
        genero: 'M',
        hobby: 'futbol',
        avatar: 'avatar6.png'
    },
    {
        nombre: 'Nacho',
        genero: 'M',
        hobby: 'futbol',
        avatar: 'avatar7.png'
    }
];
//console.log(1);

window.addEventListener('load', function() { 
    function busqueda() {
        {
        //resultados.innerHTML = 'RESULTADOS';
    
        //get hobby
        var campoHobby = document.getElementById('hobby');
        var hobby = campoHobby.value;
        console.log(hobby);
    
        //get gender
        var campoGenero = document.getElementById('genero');
        var eleccionGenero = campoGenero.selectedIndex;
        var genero = campoGenero.options[eleccionGenero].value;
        console.log(genero);
        
        var resultadosHTML = '';
        var cantidadUsuarios = usuarios.length;
        
        for(var i = 0; i < cantidadUsuarios; i++)
            {
                if(genero == 'T' || genero == usuarios[i].genero)
                    {
                        if(hobby == '' || hobby == usuarios[i].hobby)
                            {
                                 resultadosHTML += '<div class="personas-row">\
                                  <img src="images/' + usuarios[i].avatar + '"/>\
                                  <div class="persona-info">\
                                  <div>'+ usuarios[i].nombre + '</div>\
                                  <div>' + usuarios[i].hobby +'</div></div>\<button>Añadir como amig@</button></div>';
                            }
                    }
            }
        resultados.innerHTML = resultadosHTML;
    }
        
    }
    console.log('Se ha cargado la pagina');
    
    var resultados = document.getElementById('resultados');
    var btnBuscar = document.getElementById('btnBuscar');
    btnBuscar.addEventListener('click', busqueda);
});
