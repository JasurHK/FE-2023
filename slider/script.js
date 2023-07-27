const slideContainer = document.querySelector('.slider');
const slideRight = document.querySelector('.right-slider');
const slideLeft = document.querySelector('.left-slider');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const slideLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex =0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) =>{
    const sliderHeight = slideContainer.clientHeight
    
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slideLength -1){
            activeSlideIndex = 0
        }
    }
    else{
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength -1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}