const path = location.pathname;

switch (true) {

    case path.includes("index"):
        toIndexPage();
        break;

    case path.includes('legendpages'):
        toLegendPage();
        break;

}

function toLegendPage() {
    const myVideo = document.querySelector(".slider__video>video");

    setInterval(() => {
        let div = document.getElementsByClassName("slider__movie");
        if (div[0].classList.contains("active")) {
            myVideo.play();
            myVideo.loop = true;
            //console.log("viedo start");
        } else {
            //console.log("viedo stop");
            myVideo.pause();
        }
    }, 100);

    const panel = document.querySelector(".legends-panel");

    panel.addEventListener("click", zaslaniaj);

    function zaslaniaj(e) {
        panel.classList.add("active");
        const zaslona = document.createElement("div");
        zaslona.classList.add("zaslona");
        document.body.append(zaslona);
        panel.removeEventListener("click", zaslaniaj);

        zaslona.addEventListener("click", () => {
            panel.addEventListener("click", zaslaniaj);
            panel.classList.remove("active");
            zaslona.remove();
        })
    }
}


function toIndexPage() {
    const soundTrack = document.querySelector(".soundtrack");
    soundTrack.play();
    soundTrack.loop = true;
    const divstoShow = document.querySelectorAll(".weapon-show");

    document.querySelectorAll(".weapon-picker__button").forEach(item => item.addEventListener("click", showDiv));

    function showDiv(e) {
        const ourDataKey = e.target.dataset.weaponName;
        //console.log(ourDataKey);
        divstoShow.forEach((item) => {
            console.log(item.dataset);
            if (item.dataset.weaponName == ourDataKey) {
                item.classList.add("active");
                console.log("Dodano klase do " + item.dataset.weaponName);
            } else {
                item.classList.remove("active");
            }
        })
    }
}

$(".hero__frame").fadeIn(1000, () => {
    $(".hero__frame").addClass("active");
});

$(document).on('scroll', function () {
    const scrollValue = $(document).scrollTop();
    //console.log(scrollValue);
    const fromRight = document.querySelectorAll(".slideRight");
    const fromLeft = document.querySelectorAll(".slideLeft");
    const fromOpacity = document.querySelectorAll(".fromOpacity");

    fromRight.forEach((item) => {
        let fromTop = $(item).offset().top;
        let height = $(item).outerHeight();
        //console.log(fromTop + "   " + height);
        //console.log($(item).offset().top);

        if (scrollValue > fromTop + height - screen.height) {
            $(item).fadeIn(1000, () => {
                $(item).addClass("active");
            });

        }
    })

    fromLeft.forEach((item) => {
        let fromTop = $(item).offset().top;
        let height = $(item).height();
        //console.log(fromTop + "   " + height);
        //console.log($(item).offset().top);

        if (scrollValue > fromTop + height - screen.height) {
            $(item).fadeIn(1000, () => {
                $(item).addClass("active");
            });
        }
    })

    fromOpacity.forEach((item) => {
        let fromTop = $(item).offset().top;
        let height = $(item).outerHeight();
        //console.log(fromTop + "   " + height);
        //console.log($(item).offset().top);

        if (scrollValue > fromTop + height / 2 - screen.height) {
            $(item).fadeIn(800, () => {
                $(item).addClass("active");
            });

        }
    })

    if (scrollValue < 50) {
        fromRight.forEach((item) => {
            $(item).removeClass("active");
        })
        fromLeft.forEach((item) => {
            $(item).removeClass("active");
        })
        fromOpacity.forEach((item) => {
            $(item).removeClass("active");
        })
    }
});

var player = $('#slider__video--player').mediaelementplayer({
    pluginPath: "/path/to/shims/",
    // When using jQuery's `mediaelementplayer`, an `instance` argument
    // is available in the `success` callback
    success: function (mediaElement, originalNode, instance) {
        // do things
    }
});

body.append(player);