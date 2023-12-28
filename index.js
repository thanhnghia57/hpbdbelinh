const contentLetterSrart_actived = "Chào nàng công chúa đáng iu của anh, anh có một món quà nhỏ dành cho em nè." //Lời mở đầu cho bức thư
const mainContentLetter = "Chúc mừng sinh nhật em bé Khánh Linh. Chúc em bé 18 tuổi thật hạnh phúc, anh mong em sẽ luôn gặp được những điều tích cực và may mắn trong cuộc sống. Hi vọng là bé thích món quà nhỏ mà anh đã 'lén lút' chuẩn bị dành cho em. Anh yêu em, cục cưng của anh   " //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/anhcute.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/anh3.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            const effectType = setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                const mainContent = document.querySelector(".mainContent");
                mainContent.scrollTop = mainContent.scrollHeight;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                    clearTimeout(effectType);
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

