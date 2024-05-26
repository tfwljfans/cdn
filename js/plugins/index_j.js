
// var dataList = JSON.parse('{{=web.safe(json.dumps(data))}}');
// console.log(dataList);

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World!";
// }
// // myFunction()
// alert(typeof jsonData)

const waterfull = document.querySelector('.waterfull')
const imgWidth = 220;


function createImg(){
    const fileList = singleblogImgs
    // console.log(fileList)
    for (let i = 0; i < 30; i++) {
        const img = document.createElement('img')

        img.src = fileList[i]
        waterfull.appendChild(img)
    }
}

function layout(){
    function getinfo(){
        let waterfullWidth = waterfull.offsetWidth
        let column = Math.floor(waterfullWidth / imgWidth)
        let gapCount = column - 1
        let freeSpace = waterfullWidth - imgWidth * column
        let gap = freeSpace / gapCount
        return {
            gap: gap,
            column: column,
        }
    }
    let info = getinfo()
    let nextTop = new Array(info.column)
    nextTop.fill(0)

    function getMinTop(nextTop){
        let min = nextTop[0], index = 0
        for (let i = 0; i < nextTop.length; i++) {
            if (nextTop[i] < min) {
                min = nextTop[i]
                index = i
            }
        }
        return {
            min: min,
            index: index,
        }
    }

    function getMaxTop(nextTop){
        let max = nextTop[0], index = 0
        for (let i = 0; i < nextTop.length; i++) {
            if (nextTop[i] > max) {
                max = nextTop[i]
                index = i
            }
        }
        return {
            max: max,
            index: index,
        }
    }

    for (let i = 0; i < waterfull.children.length; i++) {
        const img = document.querySelector('.waterfull img:nth-child('+(i+1)+')')
        let minTop = getMinTop(nextTop)
        img.style.left = minTop.index * (imgWidth + info.gap) + 'px'
        img.style.top = (minTop.min + info.gap) + 'px'

        nextTop[minTop.index] = nextTop[minTop.index] + img.offsetHeight + info.gap / 2

        let maxTop = getMaxTop(nextTop)
        waterfull.style.height = maxTop.max + 'px'
    }
}

createImg()
window.addEventListener('load', layout)
window.addEventListener('resize', layout)

let curIdx = 11;

// var intervalId = setInterval(layout, 1000)
// if (curIdx >= singleblogImgs.length){
//     clearInterval(intervalId)
// }




const ob = new IntersectionObserver((entries)=>{
    console.log(entries)
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;


    for (const entry of entries) {
        console.log(entry)
        if (entry.isIntersecting){
            for (let i = curIdx; i < curIdx+30; i++) {
                if (i >= singleblogImgs.length){
                    curIdx = singleblogImgs.length
                    break
                }
                const img = document.createElement('img')
                img.src = singleblogImgs[i]
                jQuery(img).load(function (){
                    waterfull.appendChild(img)
                    layout()
                })
            }


            if (curIdx >= singleblogImgs.length){
                console.log("unobserve")
                spinner.style.opacity = 0
                ob.unobserve(spinner)

            }else{
                // window.scrollTo(scrollLeft, scrollTop)
            }
            curIdx += 30
        }

    }

}, {
    // rootMargin: "0px 0px",
    threshold: 0
})

let spinner = document.querySelector('#loading')
console.log(spinner)
ob.observe(spinner)