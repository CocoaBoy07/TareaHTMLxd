let boton=document.getElementById("mostrar")
let tabla=document.getElementById("tabla")

let salida=`<tr>
            <th class='t1'> Nombre completo </th>
            <th class='t2'> Telefono </th>
            <th class='t3'> Edad </th>
            <th class='t4'> Correo </th>
            <th class='t5'> Telefono fijo </th>
            <th class='t6'> Imagen </th>
            </tr>`



boton.addEventListener("click",()=>{
    fetch("https://randomuser.me/api/?results=50")
    .then(respuesta=>respuesta.json())
    .then(json => {

        json=json.results
        console.log(json)
        for(dato of json){
        salida+= `<tr> 
                    <td id='t1'> ${dato.name.first} ${dato.name.last} </td>
                    <td id='t2'> ${dato.cell}</td>
                    <td id='t3'> ${dato.dob.age}</td>
                    <td id='t4'> ${dato.email} </td>
                    <td id='t5'> ${dato.phone}</td>
                    <td id='t6'> <img src='${dato.picture.large}' alt='imagen'> </td>
                    </tr>`
                }

        tabla.innerHTML+=salida

        // console.log(json)

        // for(dato of json){
        //     imagenes.innerHTML += `<img src=${dato.download_url} alt="imagen"> `
        // }
        
    })
})
// Agregar columnas a la tabla, edad, correo elec. Teléfono fijo, Imagen. Dar estilos con css
// Rocha Banda Aldo Angel