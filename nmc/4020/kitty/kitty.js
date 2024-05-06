new Vue({
    el: '#app',
    data: {
        catArray: [],
        imageURL: "https://cdn2.thecatapi.com/images/",
        endURL: ".jpg"
    },
    created() {
        this.loadNextImage();
    },
    methods: {
        async loadNextImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/breeds')
                this.catArray = response.data;
                console.log(this.displayLevels());
            } catch (err) {
                console.log(err)
            }

        },
        displayLevels(){
            let variable = this.catArray[0].adaptability;
            return variable;
        }
    }
})
