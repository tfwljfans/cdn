const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['上一个', '下一个'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls, imgIdx) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.imgIdx = imgIdx
    }

    setInitialState() {
        const arrayLen = this.carouselArray.length
        // console.log('init->', this.imgIdx, this.carouselArray.length)
        if (this.carouselArray.length === 1) {
            this.carouselArray[this.imgIdx].classList.add('gallery-item-selected');
            // document.querySelector('.gallery-nav').childNodes[this.imgIdx].className = 'gallery-nav-item gallery-item-selected';
            // this.carouselArray[this.imgIdx].css('display', 'flex')
            this.carouselArray[this.imgIdx].style.display = 'flex'
            this.carouselArray[this.imgIdx].style.justifyContent = 'center'
        }
        if (this.carouselArray.length === 2) {
            this.carouselArray[this.imgIdx].classList.add('gallery-item-selected');
            this.carouselArray[1 - this.imgIdx].classList.add('gallery-item-next');
            // document.querySelector('.gallery-nav').childNodes[this.imgIdx].className = 'gallery-nav-item gallery-item-selected';
            // document.querySelector('.gallery-nav').childNodes[1 - this.imgIdx].className = 'gallery-nav-item gallery-item-next';
            this.carouselArray[this.imgIdx].style.display = 'flex'
            this.carouselArray[this.imgIdx].style.justifyContent = 'center'
            this.carouselArray[1 - this.imgIdx].style.display = 'flex'
            this.carouselArray[1 - this.imgIdx].style.justifyContent = 'center'
        }
        if (this.carouselArray.length === 3) {
            this.carouselArray[this.imgIdx].classList.add('gallery-item-selected');
            this.carouselArray[((this.imgIdx - 1) + 3) % 3].classList.add('gallery-item-previous');
            this.carouselArray[(this.imgIdx + 1) % 3].classList.add('gallery-item-next');
            // document.querySelector('.gallery-nav').childNodes[this.imgIdx].className = 'gallery-nav-item gallery-item-selected';
            // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 3) % 3].className = 'gallery-nav-item gallery-item-previous';
            // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 3].className = 'gallery-nav-item gallery-item-next';
            this.carouselArray[this.imgIdx].style.display = 'flex'
            this.carouselArray[this.imgIdx].style.justifyContent = 'center'
            this.carouselArray[((this.imgIdx - 1) + 3) % 3].style.display = 'flex'
            this.carouselArray[((this.imgIdx - 1) + 3) % 3].style.justifyContent = 'center'
            this.carouselArray[(this.imgIdx + 1) % 3].style.display = 'flex'
            this.carouselArray[(this.imgIdx + 1) % 3].style.justifyContent = 'center'
        }
        if (this.carouselArray.length === 4) {
            this.carouselArray[this.imgIdx].classList.add('gallery-item-selected');
            this.carouselArray[((this.imgIdx - 1) + 4) % 4].classList.add('gallery-item-previous');
            this.carouselArray[(this.imgIdx + 1) % 4].classList.add('gallery-item-next');
            this.carouselArray[(this.imgIdx + 2) % 4].classList.add('gallery-item-last');
            // document.querySelector('.gallery-nav').childNodes[this.imgIdx].className = 'gallery-nav-item gallery-item-selected';
            // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 4) % 4].className = 'gallery-nav-item gallery-item-previous';
            // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 4].className = 'gallery-nav-item gallery-item-next';
            // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 4].className = 'gallery-nav-item gallery-item-last';
            this.carouselArray[this.imgIdx].style.display = 'flex'
            this.carouselArray[this.imgIdx].style.justifyContent = 'center'
            this.carouselArray[((this.imgIdx - 1) + 4) % 4].style.display = 'flex'
            this.carouselArray[((this.imgIdx - 1) + 4) % 4].style.justifyContent = 'center'
            this.carouselArray[(this.imgIdx + 1) % 4].style.display = 'flex'
            this.carouselArray[(this.imgIdx + 1) % 4].style.justifyContent = 'center'
            this.carouselArray[(this.imgIdx + 2) % 4].style.display = 'flex'
            this.carouselArray[(this.imgIdx + 2) % 4].style.justifyContent = 'center'
        }

        if (this.carouselArray.length >= 5) {
            this.carouselArray[this.imgIdx].classList.add('gallery-item-selected');
            this.carouselArray[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.add('gallery-item-previous');
            this.carouselArray[((this.imgIdx - 2) + arrayLen) % arrayLen].classList.add('gallery-item-first');
            this.carouselArray[(this.imgIdx + 1) % arrayLen].classList.add('gallery-item-next');
            this.carouselArray[(this.imgIdx + 2) % arrayLen].classList.add('gallery-item-last');
            // document.querySelector('.gallery-nav').childNodes[this.imgIdx].className = 'gallery-nav-item gallery-item-selected';
            // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 5) % 5].className = 'gallery-nav-item gallery-item-previous';
            // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + 5) % 5].className = 'gallery-nav-item gallery-item-first';
            // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 5].className = 'gallery-nav-item gallery-item-next';
            // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 5].className = 'gallery-nav-item gallery-item-last';
            this.carouselArray[this.imgIdx].style.display = 'flex'
            this.carouselArray[this.imgIdx].style.justifyContent = 'center'
            this.carouselArray[((this.imgIdx - 1) + arrayLen) % arrayLen].style.display = 'flex'
            this.carouselArray[((this.imgIdx - 1) + arrayLen) % arrayLen].style.justifyContent = 'center'
            this.carouselArray[((this.imgIdx - 2) + arrayLen) % arrayLen].style.display = 'flex'
            this.carouselArray[((this.imgIdx - 2) + arrayLen) % arrayLen].style.justifyContent = 'center'
            this.carouselArray[(this.imgIdx + 1) % arrayLen].style.display = 'flex'
            this.carouselArray[(this.imgIdx + 1) % arrayLen].style.justifyContent = 'center'
            this.carouselArray[(this.imgIdx + 2) % arrayLen].style.display = 'flex'
            this.carouselArray[(this.imgIdx + 2) % arrayLen].style.justifyContent = 'center'
        }
        // console.log(this.carouselArray)
    }

    setCurrentState(target) {
        const arrayLen = this.carouselArray.length;
        // console.log('setState->', this.imgIdx, this.carouselArray.length)
        if (this.carouselArray.length === 1) {
            return
        }
        if (this.carouselArray.length === 2) {
            // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
            // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-next');
            // document.querySelector('.gallery-nav').childNodes[1 - this.imgIdx].classList.remove('gallery-item-next')
            // document.querySelector('.gallery-nav').childNodes[1 - this.imgIdx].classList.add('gallery-item-selected')

            this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
            this.carouselArray[this.imgIdx].classList.add('gallery-item-next')

            this.carouselArray[1 - this.imgIdx].classList.remove('gallery-item-next')
            this.carouselArray[1 - this.imgIdx].classList.add('gallery-item-selected')

            this.imgIdx = ((this.imgIdx + 1)) % arrayLen
        }

        if (this.carouselArray.length === 3) {
            if (target.className === 'gallery-controls-previous') {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-next');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 3) % 3].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 3) % 3].classList.add('gallery-item-selected')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 3].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 3].classList.add('gallery-item-previous')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-next')
                this.carouselArray[((this.imgIdx - 1) + 3) % 3].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 3) % 3].classList.add('gallery-item-selected')
                this.carouselArray[(this.imgIdx + 1) % 3].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % 3].classList.add('gallery-item-previous')
                this.imgIdx = ((this.imgIdx - 1) + arrayLen) % arrayLen
            } else {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-previous');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 3) % 3].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 3) % 3].classList.add('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 3].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 3].classList.add('gallery-item-selected')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 3) % 3].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 3) % 3].classList.add('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % 3].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % 3].classList.add('gallery-item-selected')
                this.imgIdx = ((this.imgIdx + 1)) % arrayLen
            }
        }

        if (this.carouselArray.length === 4) {
            if (target.className === 'gallery-controls-previous') {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-next');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 4) % 4].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 4) % 4].classList.add('gallery-item-selected')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 4].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 4].classList.add('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 4].classList.remove('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 4].classList.add('gallery-item-previous')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-next')
                this.carouselArray[((this.imgIdx - 1) + 4) % 4].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 4) % 4].classList.add('gallery-item-selected')
                this.carouselArray[(this.imgIdx + 1) % 4].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % 4].classList.add('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % 4].classList.remove('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % 4].classList.add('gallery-item-previous')
                this.imgIdx = ((this.imgIdx - 1) + arrayLen) % arrayLen
            } else {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-previous');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 4) % 4].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 4) % 4].classList.add('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 4].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 4].classList.add('gallery-item-selected')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 4].classList.remove('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 4].classList.add('gallery-item-next')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 4) % 4].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 4) % 4].classList.add('gallery-item-last')
                this.carouselArray[(this.imgIdx + 1) % 4].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % 4].classList.add('gallery-item-selected')
                this.carouselArray[(this.imgIdx + 2) % 4].classList.remove('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % 4].classList.add('gallery-item-next')
                this.imgIdx = ((this.imgIdx + 1)) % arrayLen
            }
        }


        if (this.carouselArray.length === 5) {
            if (target.className === 'gallery-controls-previous') {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-next');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 5) % 5].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 5) % 5].classList.add('gallery-item-selected')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + 5) % 5].classList.remove('gallery-item-first')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + 5) % 5].classList.add('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 5].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 5].classList.add('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 5].classList.remove('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 5].classList.add('gallery-item-first')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-next')
                this.carouselArray[((this.imgIdx - 1) + 5) % 5].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 5) % 5].classList.add('gallery-item-selected')
                this.carouselArray[((this.imgIdx - 2) + 5) % 5].classList.remove('gallery-item-first')
                this.carouselArray[((this.imgIdx - 2) + 5) % 5].classList.add('gallery-item-previous')
                this.carouselArray[(this.imgIdx + 1) % 5].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % 5].classList.add('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % 5].classList.remove('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % 5].classList.add('gallery-item-first')
                this.imgIdx = ((this.imgIdx - 1) + arrayLen) % arrayLen
            } else {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-previous');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 5) % 5].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + 5) % 5].classList.add('gallery-item-first')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + 5) % 5].classList.remove('gallery-item-first')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + 5) % 5].classList.add('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 5].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % 5].classList.add('gallery-item-selected')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 5].classList.remove('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % 5].classList.add('gallery-item-next')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 5) % 5].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + 5) % 5].classList.add('gallery-item-first')
                this.carouselArray[((this.imgIdx - 2) + 5) % 5].classList.remove('gallery-item-first')
                this.carouselArray[((this.imgIdx - 2) + 5) % 5].classList.add('gallery-item-last')
                this.carouselArray[(this.imgIdx + 1) % 5].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % 5].classList.add('gallery-item-selected')
                this.carouselArray[(this.imgIdx + 2) % 5].classList.remove('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % 5].classList.add('gallery-item-next')
                this.imgIdx = ((this.imgIdx + 1)) % arrayLen
            }
        }

        if (this.carouselArray.length > 5) {
            if (target.className === 'gallery-controls-previous') {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-next');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.add('gallery-item-selected')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + arrayLen) % arrayLen].classList.remove('gallery-item-first')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + arrayLen) % arrayLen].classList.add('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % arrayLen].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % arrayLen].classList.add('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % arrayLen].classList.remove('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 3) + arrayLen) % arrayLen].classList.add('gallery-item-first')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-next')
                this.carouselArray[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.add('gallery-item-selected')
                this.carouselArray[((this.imgIdx - 2) + arrayLen) % arrayLen].classList.remove('gallery-item-first')
                this.carouselArray[((this.imgIdx - 2) + arrayLen) % arrayLen].classList.add('gallery-item-previous')
                this.carouselArray[(this.imgIdx + 1) % arrayLen].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % arrayLen].classList.add('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % arrayLen].classList.remove('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % arrayLen].style.display = 'none'

                this.carouselArray[((this.imgIdx - 3) + arrayLen) % arrayLen].classList.add('gallery-item-first')
                this.carouselArray[((this.imgIdx - 3) + arrayLen) % arrayLen].style.display = 'flex'
                this.carouselArray[((this.imgIdx - 3) + arrayLen) % arrayLen].style.justifyContent = 'center'
                this.imgIdx = ((this.imgIdx - 1) + arrayLen) % arrayLen

            } else {
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.remove('gallery-item-selected');
                // document.querySelector('.gallery-nav').childNodes[this.imgIdx].classList.add('gallery-item-previous');
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.remove('gallery-item-previous')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.add('gallery-item-first')
                // document.querySelector('.gallery-nav').childNodes[((this.imgIdx - 2) + arrayLen) % arrayLen].classList.remove('gallery-item-first')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 3) % arrayLen].classList.add('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % arrayLen].classList.remove('gallery-item-next')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 1) % arrayLen].classList.add('gallery-item-selected')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % arrayLen].classList.remove('gallery-item-last')
                // document.querySelector('.gallery-nav').childNodes[(this.imgIdx + 2) % arrayLen].classList.add('gallery-item-next')

                this.carouselArray[this.imgIdx].classList.remove('gallery-item-selected')
                this.carouselArray[this.imgIdx].classList.add('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.remove('gallery-item-previous')
                this.carouselArray[((this.imgIdx - 1) + arrayLen) % arrayLen].classList.add('gallery-item-first')

                this.carouselArray[((this.imgIdx - 2) + arrayLen) % arrayLen].classList.remove('gallery-item-first')
                this.carouselArray[((this.imgIdx - 2) + arrayLen) % arrayLen].style.display = 'none'
                this.carouselArray[(this.imgIdx + 3) % arrayLen].classList.add('gallery-item-last')
                this.carouselArray[(this.imgIdx + 3) % arrayLen].style.display = 'flex'
                this.carouselArray[(this.imgIdx + 3) % arrayLen].style.justifyContent = 'center'

                this.carouselArray[(this.imgIdx + 1) % arrayLen].classList.remove('gallery-item-next')
                this.carouselArray[(this.imgIdx + 1) % arrayLen].classList.add('gallery-item-selected')
                this.carouselArray[(this.imgIdx + 2) % arrayLen].classList.remove('gallery-item-last')
                this.carouselArray[(this.imgIdx + 2) % arrayLen].classList.add('gallery-item-next')
                this.imgIdx = (this.imgIdx + 1) % arrayLen
            }
        }
    }

    setNav() {
        galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';
        this.carouselArray.forEach(item => {
            const nav = galleryContainer.lastElementChild;
            nav.appendChild(document.createElement('li'));
        });
    }

    setControls() {
        // console.log(galleryControlsContainer.childNodes.length)
        if (galleryControlsContainer.childNodes.length === 0) {
            // this.carouselControls.forEach(control => {
            //     galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            // });
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-previous`;
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-next`;
            // console.log(this.carouselControls)
            // console.log("after->", galleryControlsContainer)
            !!galleryControlsContainer.childNodes[0] ? galleryControlsContainer.childNodes[0].innerHTML = this.carouselControls[0] : null;
            !!galleryControlsContainer.childNodes[1] ? galleryControlsContainer.childNodes[1].innerHTML = this.carouselControls[1] : null;
        }
        // if (this.carouselContainer.childNodes.length)

    }

    useControls(idx) {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', () => {
                this.setCurrentState(control, this.imgIdx);
                // console.log('cur->', this.imgIdx)
                // console.log(this.carouselArray)
            });
        });
    }
}

// const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
// exampleCarousel.setControls();
// exampleCarousel.setNav();
// exampleCarousel.setInitialState();
// exampleCarousel.useControls();