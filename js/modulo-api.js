/*export const URL="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&t=terminator";
export const URL2="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&s=terminator&type=series";*/

import{BASE_URL} from "./config.js";


/*export const film=() =>{
    fetch(URL)
        .then((response)=>response.json())
        .then((results)=>{
            const movies=results.Title;
            console.log(movies);
        });
       
};

export const serie=() =>{
    fetch(URL2)
        .then((response)=>response.json())
        .then((results)=>{
            const series=results.Search;
            console.table(series);
        });
       
};*/

export const apiList =(s,type) =>{
    const url= BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response)=>response.json())
        .then((results)=>{
            const items=results.Search;
           /*console.table(items);*/
           viewItems(items);
        });
       
};

const viewItems=(items) => {
            
            //1. Ciclare array
            //2. Estrapolare gli item
            //3. Estrapolare solo le proprietà richieste (Title,Year,Poster,Type)


    items.map(
        (item)=>{
         console.group(item.Title); /*raggruppa per titolo tutti gli item*/
         console.log(item.Year);
         console.log(item.Poster);
         console.log(item.Type);
         console.groupEnd();
        }
    );
 
}