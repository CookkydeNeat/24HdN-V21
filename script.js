let main = document.querySelector("main .top h1")
let article1 = document.querySelector("#art1")
let article2 = document.querySelector("#art2")
let article3 = document.querySelector("#art3")
let article4 = document.querySelector("#art4")
let article5 = document.querySelector("#art5")
let article6 = document.querySelector("#art6")
let article7 = document.querySelector("#art7")
let article8 = document.querySelector("#art8")
let article9 = document.querySelector("#art9")
let article10 = document.querySelector("#art10")
let article11 = document.querySelector("#art11")
let article12 = document.querySelector("#art12")
let article13 = document.querySelector("#art13")

function changeColor(element,color){
    var observer = new IntersectionObserver(function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting === true)
            // console.log('La section est visible',element,color);
            document.documentElement.style.setProperty('--color', color)
    }, { threshold: [1] });
    observer.observe(element);

}

changeColor(main,"#141414")
changeColor(article1,"#76060a")
changeColor(article2,"#6b5344")
changeColor(article3,"#433e3a")
changeColor(article4,"#1a1823")
changeColor(article5,"#504e54")
changeColor(article6,"#68A691")
changeColor(article7,"#F36A2B")
changeColor(article8,"#034538")
changeColor(article9,"#324376")
changeColor(article10,"#000013")
changeColor(article11,"#412234")
changeColor(article12,"#915520")
changeColor(article13,"#533b66")