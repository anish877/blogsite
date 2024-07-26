document.querySelectorAll(".buttonDelete").forEach((item, index)=>{
    item.setAttribute("value", index);
});
document.querySelectorAll(".buttonEdit").forEach((item, index)=>{
    item.setAttribute("value", index);
});
document.querySelectorAll(".buttonView").forEach((item, index)=>{
    item.setAttribute("value", index);
})
if(document.querySelector("#postSubmitButton")){
document.querySelector("#postSubmitButton").addEventListener("mouseenter", ()=>{
    document.querySelector("#postSubmitButton").classList.remove("postSubmitButton-permanent")
    document.querySelector("#postSubmitButton").classList.add("mouse-enter-post-button")
})
document.querySelector("#postSubmitButton").addEventListener("mouseleave", ()=>{
    document.querySelector("#postSubmitButton").classList.add("postSubmitButton-permanent")
    document.querySelector("#postSubmitButton").classList.remove("mouse-enter-post-button")
})
}
if(document.querySelector("#heading")){
document.querySelector("#heading").addEventListener("mouseenter", ()=>{
    document.querySelector("#heading").classList.add("mouse-enter")
})
document.querySelector("#heading").addEventListener("mouseleave", ()=>{
    document.querySelector("#heading").classList.remove("mouse-enter")
})
}
if(document.querySelector("#body")){
document.querySelector("#body").addEventListener("mouseenter", ()=>{
    document.querySelector("#body").classList.add("mouse-enter")
})
document.querySelector("#body").addEventListener("mouseleave", ()=>{
    document.querySelector("#body").classList.remove("mouse-enter")
})
}
if(document.querySelector("#password")){
document.querySelector("#password").addEventListener("mouseenter", ()=>{
    document.querySelector("#password").classList.add("mouse-enter")
})
document.querySelector("#password").addEventListener("mouseleave", ()=>{
    document.querySelector("#password").classList.remove("mouse-enter")
})
}
document.querySelector("#homeButton").addEventListener("mouseenter", ()=>{
    document.querySelector("#homeButton").classList.add("mouse-enter-navbar")
})
document.querySelector("#homeButton").addEventListener("mouseleave", ()=>{
    document.querySelector("#homeButton").classList.remove("mouse-enter-navbar")
})
document.querySelector("#newPostButton").addEventListener("mouseenter", ()=>{
    document.querySelector("#newPostButton").classList.add("mouse-enter-navbar")
})
document.querySelector("#newPostButton").addEventListener("mouseleave", ()=>{
    document.querySelector("#newPostButton").classList.remove("mouse-enter-navbar")
})
if(document.querySelector(".buttonEdit")){
document.querySelector(".buttonEdit").addEventListener("mouseenter", ()=>{
    document.querySelector(".buttonEdit").classList.add("mouse-over-edit-delete")
})
document.querySelector(".buttonEdit").addEventListener("mouseleave", ()=>{
    document.querySelector(".buttonEdit").classList.remove("mouse-over-edit-delete")
})
}
if(document.querySelector("#loginInput")){
    document.querySelector("#loginInput").addEventListener("mouseenter", ()=>{
        document.querySelector("#loginInput").classList.add("mouse-enter")
    })
    document.querySelector("#loginInput").addEventListener("mouseleave", ()=>{
        document.querySelector("#loginInput").classList.remove("mouse-enter")
    })
}
if(document.querySelector("#loginPostSubmitButton")){
    document.querySelector("#loginPostSubmitButton").addEventListener("mouseenter", ()=>{
        document.querySelector("#loginPostSubmitButton").classList.remove("loginPostSubmitButton")
        document.querySelector("#loginPostSubmitButton").classList.add("mouse-enter-post-button")
    })
    document.querySelector("#loginPostSubmitButton").addEventListener("mouseleave", ()=>{
        document.querySelector("#loginPostSubmitButton").classList.add("loginPostSubmitButton")
        document.querySelector("#loginPostSubmitButton").classList.remove("mouse-enter-post-button")
    })
    }
if(document.querySelector("#changPostButton")){
    document.querySelector("#changPostButton").addEventListener("mouseenter", ()=>{
        document.querySelector("#changPostButton").classList.remove("changPostButton")
        document.querySelector("#changPostButton").classList.add("mouse-enter-post-button")
    })
    document.querySelector("#changPostButton").addEventListener("mouseleave", ()=>{
        document.querySelector("#changPostButton").classList.add("changPostButton")
        document.querySelector("#changPostButton").classList.remove("mouse-enter-post-button")
    })
    }
    if(document.querySelectorAll("#postSubmitButton")){
        document.querySelectorAll("#postSubmitButton").forEach((item)=>{item.addEventListener("mouseenter", ()=>{
            item.classList.remove("postSubmitButton-permanent")
            item.classList.add("mouse-enter-post-button")
        })})
        document.querySelectorAll("#postSubmitButton").forEach((item)=>{item.addEventListener("mouseleave", ()=>{
            item.classList.add("postSubmitButton-permanent")
            item.classList.remove("mouse-enter-post-button")
        })})
        }
if(document.querySelectorAll("#post"))
{
    document.querySelectorAll("#post").forEach((item)=>{item.addEventListener("mouseenter", ()=>{
        item.classList.add("mouse-enter-post-card");
    })})
    document.querySelectorAll("#post").forEach((item)=>{item.addEventListener("mouseleave", ()=>{
        item.classList.remove("mouse-enter-post-card");
    })})
}