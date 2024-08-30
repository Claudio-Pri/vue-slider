// console.log(slides);

const { createApp } = Vue

createApp({
    data() {
        return {
            activeIndex: 0,
            slides: slides
        }
    },
    methods: {
        next() {
            console.log('next');

            if (this.activeIndex === this.slides.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        prev() {
            console.log('prev');

            if (this.activeIndex == 0) {
                this.activeIndex = this.slides.length - 1;
            } else {
                this.activeIndex--;
            }
        }
        // change active slide(new index)
        // this.activeIndex = newIndex


    },
    mounted() {
        // setInterval(function (){this.next();}, 3000)
        //devo usare arrow function per scope di this
        setInterval(() => {
            this.next();
        }, 3000);
    }
}).mount('#app');


