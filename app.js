var app = new Vue({
    el: "#app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ],
        newQuestion:"",
        newAnswer:"",
        newCategory:"",
    },
    methods:{
        submitCard:function(){
            this.cards.push({
                question: this.newQuestion,
                answer: this.newAnswer,
                category: this.newCategory,
                flipped: false})

            this.newQuestion="";
            this.newAnswer="";
            this.newCategory="";
        },

        flip:function(card){
            this.cards[card].flipped=!this.cards[card].flipped;
        }

    }
})