import { posts } from "./database.js"

function handleModal1(){
    const buttonPost = document.querySelector("#post1");
    const modal = document.querySelector(".modal__container");
    
    buttonPost.addEventListener("click", () =>{
        modal.innerHTML = "";
        const buttonClose = document.createElement("button")
        const div = document.createElement("div");
        const img = document.createElement("img");
        const div2 = document.createElement("div");
        const h2User = document.createElement("h2");
        const pStack = document.createElement("p");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        buttonClose.classList.add("closeModal__button");
        div.classList.add("div__profile");
        img.classList.add("img__profile");
        div2.classList.add("div__infoProfile");
        h2User.classList.add("h2__name");
        pStack.classList.add("p__title");
        h2.classList.add("article__titlePost");
        p.classList.add("article__textPost--open");

        buttonClose.innerText = "X"
        img.src = posts[0].img;
        img.alt = posts[0].user;
        h2User.innerText = posts[0].user;
        pStack.innerText = posts[0].stack;
        h2.innerText = posts[0].title;
        p.innerText = posts[0].text;
        
        modal.appendChild(buttonClose)
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(h2User);
        div2.appendChild(pStack);
        modal.appendChild(div);
        modal.appendChild(h2);
        modal.appendChild(p);

        modal.showModal();

        buttonClose.addEventListener("click", () => {
            modal.close();
        })
    })
}
handleModal1();

function handleModal2(){
    const buttonPost = document.querySelector("#post2");
    const modal = document.querySelector(".modal__container");
    
    buttonPost.addEventListener("click", () =>{
        modal.innerHTML = "";
        const buttonClose = document.createElement("button")
        const div = document.createElement("div");
        const img = document.createElement("img");
        const div2 = document.createElement("div");
        const h2User = document.createElement("h2");
        const pStack = document.createElement("p");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        buttonClose.classList.add("closeModal__button");
        div.classList.add("div__profile");
        img.classList.add("img__profile");
        div2.classList.add("div__infoProfile");
        h2User.classList.add("h2__name");
        pStack.classList.add("p__title");
        h2.classList.add("article__titlePost");
        p.classList.add("article__textPost--open");

        buttonClose.innerText = "X"
        img.src = posts[1].img;
        img.alt = posts[1].user;
        h2User.innerText = posts[1].user;
        pStack.innerText = posts[1].stack;
        h2.innerText = posts[1].title;
        p.innerText = posts[1].text;
        
        modal.appendChild(buttonClose)
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(h2User);
        div2.appendChild(pStack);
        modal.appendChild(div);
        modal.appendChild(h2);
        modal.appendChild(p);

        modal.showModal();

        buttonClose.addEventListener("click", () => {
            modal.close();
        })
    })
}
handleModal2();

function handleModal3(){
    const buttonPost = document.querySelector("#post3");
    const modal = document.querySelector(".modal__container");
    
    buttonPost.addEventListener("click", () =>{
        modal.innerHTML = "";
        const buttonClose = document.createElement("button")
        const div = document.createElement("div");
        const img = document.createElement("img");
        const div2 = document.createElement("div");
        const h2User = document.createElement("h2");
        const pStack = document.createElement("p");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        buttonClose.classList.add("closeModal__button");
        div.classList.add("div__profile");
        img.classList.add("img__profile");
        div2.classList.add("div__infoProfile");
        h2User.classList.add("h2__name");
        pStack.classList.add("p__title");
        h2.classList.add("article__titlePost");
        p.classList.add("article__textPost--open");

        buttonClose.innerText = "X"
        img.src = posts[2].img;
        img.alt = posts[2].user;
        h2User.innerText = posts[2].user;
        pStack.innerText = posts[2].stack;
        h2.innerText = posts[2].title;
        p.innerText = posts[2].text;
        
        modal.appendChild(buttonClose)
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(h2User);
        div2.appendChild(pStack);
        modal.appendChild(div);
        modal.appendChild(h2);
        modal.appendChild(p);

        modal.showModal();

        buttonClose.addEventListener("click", () => {
            modal.close();
        })
    })
}
handleModal3();