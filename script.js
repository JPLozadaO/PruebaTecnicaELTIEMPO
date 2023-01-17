async function obtenerInformacion(){
    const url = 'https://images-api.nasa.gov/search?q=apollo%2011';
    const resultado = await fetch(url);
    const datos = await resultado.json();
    
    const {collection}  = datos;
    var arrayItems = new Array(10);
    for (let i = 0; i < 10; i++){
        arrayItems[i] = new Array(3);

        for (let j = 0; j < 3; j++){
            switch(j){
                case 0:
                    arrayItems[i][j] = collection.items[i].data[0].title;
                    break;
                case 1:
                    arrayItems[i][j] = collection.items[i].data[0].description;
                    break;
                case 2:
                    arrayItems[i][j] = collection.items[i].links[0].href;
            }     
        }
    }

    let tableBody = document.getElementById('tbody');

     for(let i = 0; i < 10; i++){
         let title = `<td>${arrayItems[i][0]}</td>`;
         let description = `<td>${arrayItems[i][1]}</td>`;
         let image = `<td><img src="${arrayItems[i][2]}"/></td>`
         tableBody.innerHTML += `<tr>${title + description+image}</tr>`;
    }
}
obtenerInformacion();