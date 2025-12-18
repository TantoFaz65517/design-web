var contatos = [
{    nome: "gersiney",
    cel: "40028922",
    foto: "art1.jpg",
    favorito: false
},
{    nome: "gersicley",
    cel: "40028922",
    foto: "art2.jpg",
    favorito: true
},
{    nome: "gersdei",
    cel: "40028922",
    foto: "art3.jpg",
    favorito: false
},
{    nome: "gerselson",
    cel: "40028922",
    foto: "art4.jpg",
    favorito: true
}
]
const agenda = {
    data(){
        return {
            titulo: "Agenda de contatos",
            contatos: window.contatos
        }
    }
}

Vue.createApp(agenda).mount("#app");