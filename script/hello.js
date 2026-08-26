const jobsContainer = document.getElementById("jobs-container");
const allJobs = document.getElementById("total-jobs");

const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

let currentActiveTab = "all-tab";

function switchTab(id){
    currentActiveTab = id;
    // console.log("currentActiveTab: ", currentActiveTab);
    allTab.classList.remove("bg-[#3b82f6]", "text-white");
    interviewTab.classList.remove("bg-[#3b82f6]", "text-white");
    rejectedTab.classList.remove("bg-[#3b82f6]", "text-white");

    const activeTab = document.getElementById(id);
    activeTab.classList.add("bg-[#3b82f6]", "text-white");
    
    const allCards = jobsContainer.querySelectorAll(".card")
    // console.log(allJobs)
    allCards.forEach(card=>{
        const status = card.getAttribute("status");
        if(id === "all-tab"){
            card.classList.remove("hidden");
        }
        else if(id === "interview-tab"){
            if(status === "interview"){
                card.classList.remove("hidden")
            }
            else{
                card.classList.add("hidden");
            }
        }
        else if(id === "rejected-tab"){
            if(status === "rejected"){
                card.classList.remove("hidden")
            }
            else{
                card.classList.add("hidden");
            }
        }
    })

}

jobsContainer.addEventListener("click", function(event){
    const target = event.target;
    const card = target.closest(".card");
    if(!card) return;
    const currentStatus = card.querySelector(".current-status")
    if(target.closest(".interview")){
        currentStatus.innerText = "INTERVIEW"
        card.setAttribute("status", "interview")
    }
    else if(target.closest(".rejected")){
        currentStatus.innerText ="REJECTED"
        card.setAttribute("status", "rejected")
    }
    else if(target.closest(".delete")){
        currentStatus.innerText ="Not Applied"
        card.removeAttribute("status")
    }
    switchTab(currentActiveTab)
})



// const allTab = document.getElementById("all-tab")
// const interviewTab = document.getElementById("interview-tab")
// const rejectedTab = document.getElementById("rejected-tab")
// const totalJobs = document.getElementById("total-jobs");

// // let currentActiveTab = "all-tab"

// function switchTab(id) {
//     // currentActiveTab = id;
//     const cards = totalJobs.querySelectorAll(".card");
//     allTab.classList.remove("bg-[#3b82f6]", "text-white")
//     interviewTab.classList.remove("bg-[#3b82f6]", "text-white")
//     rejectedTab.classList.remove("bg-[#3b82f6]", "text-white")

//     const activeTab = document.getElementById(id);
//     activeTab.classList.add("bg-[#3b82f6]", "text-white")


//     cards.forEach(card=>{
//     const status = card.getAttribute("status");
//         if(id === "all-tab"){
//         card.classList.remove("hidden");
//     }
//     else if (id === "interview-tab"){
//         if (status === "interview"){
//             card.classList.remove("hidden")
//         }
//         else{
//             card.classList.add("hidden");
//         }
//     }
//     else if (id === "rejected-tab"){
//         if (status === "rejected"){
//             card.classList.remove("hidden")
//         }
//         else{
//             card.classList.add("hidden");
//         }
//     }
//     })
// }


// const jobsContainer = document.getElementById("jobs-container");
// // const totalJobs = document.getElementById("total-jobs");

// jobsContainer.addEventListener("click", function(event){
//     const target = event.target;
//     const card = target.closest(".card");
//     if(!card) return;
//     const statusTag = card.querySelector(".current-status")
//     if(target.closest(".interview")){
//         statusTag.innerText = "Interview";
//         card.setAttribute("status", "interview")
//     }
//     else if(target.closest(".rejected")){
//         statusTag.innerText = "Rejected";
//         card.setAttribute("status", "rejected")
//     }
//     else if(target.closest(".delete")){
//         statusTag.innerText = "Not Applied";
//         card.removeAttribute("status");
//     }
//     // console.log(card);
//     // switchTab(currentActiveTab);
// })






// const totalCounter = document.getElementById("total-counter");
// const interviewCounter = document.getElementById("interview-counter");
// const rejectedCounter = document.getElementById("rejected-counter");
// const totalJobs = document.getElementById("total-jobs");
// const allCards = totalJobs.querySelectorAll(".card");

// function calculateCount(){
//     let interviewCounter = 0;
//     let rejectedCounter = 0;

//     allCards.forEach(card =>{
//         const status = card.getAttribute("data-status");
//         if(status === INTERVIEW) interviewCounter++;
//         if(status === REJECTED) rejectedCounter++;
//     })   
// }

// const allTab = document.getElementById("all-tab");
// const interviewTab = document.getElementById("interview-tab");
// const rejectedTab = document.getElementById("rejected-tab");
// const jobsContainer = document.getElementById ("jobs-container")

// function switchTab(id){
//     allTab.classList.remove("bg-[#3b82f6]", "text-white");
//     interviewTab.classList.remove("bg-[#3b82f6]", "text-white");
//     rejectedTab.classList.remove("bg-[#3b82f6]", "text-white");

//     const activeTab = document.getElementById(id);
//     activeTab.classList.add("bg-[#3b82f6]", "text-white");

//      const totalJobs = document.getElementById("total-jobs")
//      const allCards = totalJobs.querySelectorAll(".card");
//      allCards.forEach(card =>{
//         const dataStatus = card.getAttribute("data-status")
//         if(id === "all-tab"){
//             card.classList.remove("hidden");
//         }
//         else if(id === "interview-tab"){
//             if(dataStatus === "interview"){
//                 card.classList.remove("hidden");
//             }
//             else{
//                 card.classList.add("hidden")
//             }
//         }
//         else if(id === "rejected-tab"){
//             if(dataStatus === "rejected"){
//                 card.classList.remove("hidden");
//             }
//             else{
//                 card.classList.add("hidden")
//             }
//         }
//      })
    
// }

// jobsContainer.addEventListener("click", function(event){
//     const target = event.target;
//     const card = target.closest(".card");
//     if (!card) return;


//     const statusTag = card.querySelector(".current-status")
//     if (target.closest(".interview")){
//         statusTag.innerText = "INTERVIEW";
//         card.setAttribute("data-status", "interview") 
//     }
//     else if (target.closest(".rejected")){
//         statusTag.innerText = "REJECTED";
//         card.setAttribute("data-status", "rejected")
//     }
//     else if (target.closest(".delete")){
//         statusTag.innerText = "Not Applied";
//         card.removeAttribute("data-status");
//     }
//     console.log(card)
// })




