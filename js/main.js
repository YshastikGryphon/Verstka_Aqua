document.addEventListener('DOMContentLoaded', () => {
    // Загрузить карту
    ymaps.ready(init);

    // Карта
    function init() {
        let myMap = new ymaps.Map('ymap', {
            center: [59.94651433444455,30.317817009320976],
            zoom: 12,
            controls: []
        });
        let Placemark = new ymaps.Placemark([59.95925685866894,30.30202416264129], {
        });
        let Placemark2 = new ymaps.Placemark([59.91101600552194,30.321593559613927], {
        });
        myMap.geoObjects.add(Placemark);
        myMap.geoObjects.add(Placemark2);
    }


    // Чек на высоту
    const header = document.querySelector('.header');

    document.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop >= 60) {
            header.classList.add('header-smaller');
        } else {
            header.classList.remove('header-smaller');
        }
    })

    
})
