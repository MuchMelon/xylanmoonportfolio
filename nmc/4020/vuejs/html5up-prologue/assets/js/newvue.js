var header = new Vue({
    el: '#header',
        data: { 
            yourName: 'Xylan Moon',
            description: 'Cognitive Science, B.A. at UGA',
            linkOne: 'Introduction',
            link2: 'My Portfolio',
            link3: 'A lil about me',
            link4: 'Contact',
            link5: 'List',
            link6: 'Conditional',
            avatar: "../../images/me.jpg"
        }
})

var portfolio = new Vue({
    el: '#portfolio',
    data:{
        portfolioTitle: 'Personal Photography',
        image1: "/nmc/4020/vuejs/html5up-prologue/images/flower1.jpg",
        image2: "/nmc/4020/vuejs/html5up-prologue/images/flower2.jpg",
        image3: "/nmc/4020/vuejs/html5up-prologue/images/flower3.jpg",
        image4: "/nmc/4020/vuejs/html5up-prologue/images/gardenhouse.jpg",
        image5: "/nmc/4020/vuejs/html5up-prologue/images/stagedacorn.jpg",
        image6: "/nmc/4020/vuejs/html5up-prologue/images/bestanimal.jpg",
        imgText1:'Dual Aster',
        imgText2: 'Azalea Flower',
        imgText3: 'Solo Aster',
        imgText4: 'Presidential Garden House',
        imgText5: 'Staged Acorn',
        imgText6: 'Best Animal'
    }
})

var intro = new Vue({
    el: '#top',
    data:{
        introduction: "Hi, nice to meet ya! I'm Xylan Moon and I am happy to welcome you to my Portfolio.",
        subheader: "I am a UX Design intern wanting to shift into UX research.",
        buttonDown: "Explore"
    }
})

var about = new Vue({
    el: '#about',
    data:{
        aboutme: "Hello, thanks for viewing my portfolio! Here's a little more about me: I am a Cog. Science major at UGA about to go into my fourth year. I love playing games, collecting books, and learning about cosplay and historical fashion. I also enjoy photography and want to learn more about it.",
    }
})

var contact = new Vue({
    el: '#contact',
    data:{
        contactinfo: "Wanna keep in touch or have some feedback on the site? \nEnter your name and email below and I'll respond ASAP!"
    }
})

var list = new Vue({
    el: '#list',
    data:{
        link5: 'My List',
        favorites: ['Macademia Nut Cookies','Bean Burritos','Apple Crumble Pie']
    }
})

var conditional = new Vue({
    el: '#conditional',
    data:{
        teacherName: '',
        siteAnswer: ''
    }
})

var getcolor = new Vue({
    el: '#function',
    data:{
        bgColor: '',
        colors: ['red','green','blue'],
    },
    methods: {
        changeColor(color){
            this.bgColor = color
        }
    }
})