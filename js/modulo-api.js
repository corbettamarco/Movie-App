export const URL="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&t=terminator";
export const URL2="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&s=terminator&type=series";


export const film=() =>{
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
       
};