/*export const URL="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&t=terminator";
export const URL2="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&s=terminator&type=series";*/



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

/*export const apiList =(s,type) =>{
    const url= BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response)=>response.json())
        .then((results)=>{
            const items=results.Search;
           /*console.table(items);
           viewItems(items);
        });
       
};

const viewItems=(items) => {
            
            //1. Ciclare array
            //2. Estrapolare gli item
            //3. Estrapolare solo le proprietà richieste (Title,Year,Poster,Type)



    

    
    items.map( (item)=>{
    
       
  
        //mi posiziono dove voglio mettere l'elenco dei movies
        const element=document.getElementById("slides");

        const createHTMLMovie=(movie)=>{

            var divElement = document.createElement("div");
            divElement.id = "swiper-slide";




            //creo un tag h3 vuoto
             const para=document.createElement("h3");
       
            //creo un testo con il titolo del movie
             const node=document.createTextNode(item.Title);
            
       
            //inserisco dentro il tag p il testo
             para.appendChild(node);
             divElement.appendChild(para);

             
             return divElement;
           }
        element.appendChild(createHTMLMovie(item));

};*/

import{BASE_URL} from "../js/config.js";
import {CONTENT_TYPE} from "../js/config.js";







export const apiList = (s, type) => {
    const url = BASE_URL + "s=" + s + "&type=" + type + "&page=1" + "&p";
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        const items = results.Search;
        viewItems(items);
      });
  };





  const viewItems = (items) => {
    items.map((item) => {
     


      if (item.Type == CONTENT_TYPE.MOVIE) {
        let a = document.querySelector('.MI1');
        a.appendChild(cardbuilder(item));
      }
    
      if (item.Type == CONTENT_TYPE.SERIES) { 
        let a = document.querySelector('.MI2');
        a.appendChild(cardbuilder(item));
      }

    });
  };
  
  

  
  const cardbuilder = (item) => {
    
    
    const title = document.createElement("h5");
    title.className ="card-text";
    const node = document.createTextNode(item.Title);
  
    title.appendChild(node);

    const p = document.createElement("p");
    p.className="card-text";
    const node2 = document.createTextNode(item.Year);
    
    

    p.appendChild(node2);

    const card_body=document.createElement("div");
    card_body.className="card-body";
    
    card_body.appendChild(title);

    const card=document.createElement("div");
    card_body.className="card";
    card.appendChild(card_body);
    
    
    const slide = document.createElement("div");
    slide.className = "item";

    
    slide.style = `background-image: url(${item.Poster});`;
  
    const pad15=document.createElement("div");
    pad15.className=pad15;

    pad15.appendChild(card);
    slide.appendChild(p);
    
    
    
    slide.appendChild(title);
    slide.appendChild(card_body);
    
    slide.appendChild(pad15);
    
    slide.onclick = function() {
        window.location.href = '';
    };

    
   
  
    return slide;
  };
  
  
 document.addEventListener('DOMContentLoaded',apiList("terminator", CONTENT_TYPE.MOVIE));
 document.addEventListener('DOMContentLoaded',apiList("star wars", CONTENT_TYPE.SERIES));


