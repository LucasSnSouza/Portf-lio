<template>

    <div class="about flex scroll-y w-full h-full flex gap-xlg color-brand-two">

        <div class="transition-panel w-full h-full bg-color-brand-two"></div>

        <SidebarNavigation
            layout="goback"
            theme="bg-color-brand-two"
        />

        <div 
            class="about-content flex"
        >

            <div class="about-information w-half flex flex-column gap-xlg scroll-y">

                <h1 
                    class="grandslang"
                    style="font-size: 60px;"
                >
                    Sobre mim
                </h1>
                <h2 class="grandslang font-xlg">
                    Muito prazer! Eu sou o Lucas, desenvolvedor front e back-end, apaixonado por criar interfaces eficientes e experiências digitais bem pensadas.
                </h2>
                <p class="font-md">
                    Sou um desenvolvedor que adora transformar ideias soltas em aplicações fluidas e bem estruturadas. 
                    Trabalha no front e no back como quem troca de ferramenta na bancada: naturalmente. 
                    Tem um carinho especial por interfaces intuitivas e acredita que boa experiência do usuário é metade da magia de 
                    qualquer projeto. Sempre buscando aprender, testar e evoluir, 
                    encara cada novo desafio como mais uma chance de deixar o código e o mundo digital um pouco melhor.
                </p>

                <p class="font-md">
                    Uma de minhas sitações favoritas é de Isaac Newton que dizia:
                </p>

                <h2 class="grandslang font-xlg w-half">
                    "If I have seen further it is by standing on the shoulders of giants."
                </h2>

                <p class="font-md">
                    Essa frase me toca profundamente, pois conversa diretamente com a minha história. Se cheguei onde cheguei, foi graças às pessoas que estiveram ao meu lado.
                </p>

                <h2 class="grandslang font-xlg w-half">
                    EXPERIÊNCIAS
                </h2>

                <p class="font-md">
                    <li> Trabalho já a 5 anos com o Framework Vuejs</li>
                    <li> A 8 anos trabalhando com o nativo HTML, CSS e JS e 6 anos usando os mesmo profissinalmente.</li>
                    <li> 1 Ano e meio desenvolvendo sistemas internos em HTML e JS e usando python no backend em Flask na PromoAttitude</li>
                    <li> 3 Anos de desenvolvendo sistemas internos em Vuejs e Laravel PHP na Interlink Cotia</li>
                    <li> 2 Anos de desenvolvimento front end de aplicações mobile e desktop em Vuejs na Trade up</li>      
                </p>

                <h2 class="grandslang font-xlg w-half">
                    HABILIDADES
                </h2>

                <p class="font-md">
                    Vue JS / React / NuxtJS / Python 
                    / Laravel / MySQL / Maria DB / Firebase 
                    / Supabase /  / Figma UI, UX
                </p>

            </div>


        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Sidebar from "@/components/Sidebar"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Sidebar
    },
    methods: {
    },
    computed: {
    },
    async mounted(){
    },
    created(){
        
    }
}

</script>

<style lang="scss">

@media screen and (max-width: 800px) {

    .about{
        flex-direction: column;
    }

    .about-content{
        padding: var(--scale-brand-xlg);
    }

}

.about-content{
    padding: 124px;
}

.transition-panel{
    position: absolute;
    top: 0px;
    left: 0px;
    animation: fade-out 1s forwards;
}

@keyframes fade-out {
    from{
        height: 100%;
    }to{
        height: 0%;
    }
}

</style>
