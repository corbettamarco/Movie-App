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



    

    
    items.map( (item)=>{
    
       // console.group(item.Title); /*raggruppa per titolo tutti gli item*/
        //  console.log(item.Year);
        //   console.log(item.Poster);
        //   console.log(item.Type);
        //   console.groupEnd();
  
        //mi posiziono dove voglio mettere l'elenco dei movies
        const element=document.getElementById("slides");

        const createHTMLMovie=(movie)=>{

            //creo un tag p vuoto
             const para=document.createElement("p");
             const div1=document.createElement("div");
       
            //creo un testo con il titolo del movie
             const node=document.createTextNode(item.Title);

             
       
            //inserisco dentro il tag p il testo
             para.appendChild(node);
             div1.appendChild(para);
             return div1;
           }


           
  
        //creo il movie all'interno del DOM eseguendo la funzione createHTMLmovie con argomento il film
        element.appendChild(createHTMLMovie(item));
         
      });
   
};