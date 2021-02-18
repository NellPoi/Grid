window.onload = () => {
    console.info(new Date().toLocaleTimeString() + " Script[modules/aside] Onload")
    const debugBtn = document.querySelector("i[class='bi-sliders']")
    let asideCard = document.querySelector(".aside-card"),
        asideCardAfterWidth = window.getComputedStyle(asideCard, "after").width,
        asideCardAfterHeight = window.getComputedStyle(asideCard, "after").height,
        asideCardChild = document.querySelector(".aside-card-child"),
        asideCardChildWidth = window.getComputedStyle(asideCardChild).width;
    debugBtn["onclick"] = () => {
        let leftValue = "calc((" + asideCardAfterWidth + " - " + asideCardChildWidth + ")/2)"
        console.debug("灰色背景宽度：" + asideCardAfterWidth + "\n子卡片宽度：" + asideCardChildWidth + "\n应输出的语句:" + leftValue)
        asideCardChild.style.left = leftValue
    }
}