const search = document.querySelector("#search")
const tvshow = document.querySelector("#tvshow")
search.addEventListener("keyup", function(e){
    fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
    .then(res=>res.json()).then(data=>{
        // console.log(data);
        tvshow.innerHTML=null
        data.map((e)=>{
            console.log(e.show.image.medium);
            const newContainer = document.createElement("div")
            newContainer.classList.add("box")
            newContainer.innerHTML=`<img src=${e.show.image.medium} alt="not found">
                                     <h4>${e.show.name}</h4>
                                     <h4>${e.show.premiered}</h4>
                                     <a href="${e.show.url}" target="_blank"><button class="details">Show details</button></a>`
            tvshow.append(newContainer)
        })
    })
})