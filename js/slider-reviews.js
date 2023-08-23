document.addEventListener('DOMContentLoaded', () =>{
    const sliderFluid = document.querySelector('.slider-fluid');
    const sliderList = document.querySelector('.reviews__slider');
    const sliderItems = document.querySelectorAll('.reviews__slider-item');

    function numerSlides() {
        let i = 0;

        sliderItems.forEach(element => {
            element.value = i;
            i++;
        });

        return i;
    }
    createBullets(numerSlides());
    function createBullets(count) {
        let list = document.createElement('ul');
        list.classList.add('reviews__slider-controls');
        for (let i = 0; i < count; i++) {
            let item = document.createElement('li');
            item.classList.add('reviews__slider-bullet');
            item.value = i;
            if (item.value === 0) {
                item.classList.add('slider-bullet--active');
            }
            list.append(item);
        }
        sliderFluid.append(list);
    }

    const counters = document.querySelectorAll('.reviews__slider-bullet');

    sliderItems.forEach(element => {
        element.addEventListener('click', () => {
            let calcus = element.value * 100;
            sliderList.style.transform = `translateX(-${calcus}%)`;
            sliderItems.forEach(elem => {
                elem.classList.remove('reviews__slider-item--active');
            });
            counters.forEach(elem => {
                elem.classList.remove('slider-bullet--active');
            });
            let linkedCounter = document.querySelector(`.reviews__slider-bullet[value="${element.value}"]`) 
            linkedCounter.classList.add('slider-bullet--active');
            element.classList.add('reviews__slider-item--active');
        });
    });
    
    counters.forEach(element => {
        element.addEventListener('click', () => {
            let calcus = element.value * 100;
            sliderList.style.transform = `translateX(-${calcus}%)`;
            sliderItems.forEach(elem => {
                elem.classList.remove('reviews__slider-item--active');
            });
            counters.forEach(elem => {
                elem.classList.remove('slider-bullet--active');
            });
            let linkedSlide= document.querySelector(`.reviews__slider-item[value="${element.value}"]`);
            linkedSlide.classList.add('reviews__slider-item--active');
            element.classList.add('slider-bullet--active');
        });
    });
})