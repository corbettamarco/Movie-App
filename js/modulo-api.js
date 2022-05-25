export const URL="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&t=terminator";

export const film=() =>{
    fetch(URL)
        .then((response)=>response.json())
        .then((results)=>{
            const movies=results.Title;
            console.log(movies);
            return movies;
        });
       
};