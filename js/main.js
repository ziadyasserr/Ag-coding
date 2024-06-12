//**************************start-progress***************************/
let progress = document.querySelectorAll(".progress-bar");
let reachNum = document.querySelectorAll(".num")

let start = true;
window.onscroll = function() {
    // if(window.scrollY >= 970){
    //     progress.forEach(el=>{
    //         el.style.width = el.dataset.prog;
    //     })
    // }
    if (window.scrollY >= 1200) {
        if (start) {
            reachNum.forEach(startCount)
        }
        start = false;
    }

}

function startCount(el) {
    let goal = el.dataset.goal;

    let stopCount = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(stopCount)
        }
    }, 1600 / goal)
}
//**************************end-progress***************************/


//**************************start-filter***************************/
let lists = document.querySelectorAll(".list-group li")
let links = document.querySelectorAll(".filter-item a")

console.log(lists);
console.log(links);

lists.forEach(list => {
    list.addEventListener("click", () => {
        document.querySelector(".list-group li.active").classList.remove("active")
        list.classList.add("active")
        let datasetFilter = list.dataset.filter
        links.forEach(link => {
            if (link.classList.contains(datasetFilter)) {
                link.classList.add("active");
                link.classList.remove("hidden")
            } else {
                link.classList.add("hidden");
                link.classList.remove("active")
            }
        })
    })
})

//**************************end-filter***************************/

AOS.init();