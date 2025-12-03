<template>

    <div class="works flex scroll-y w-full h-full flex gap-xlg color-brand-two">

        <div class="transition-panel w-full h-full bg-color-brand-two"></div>

        <SidebarNavigation
            layout="goback"
            theme="bg-color-brand-two"
        />

        <div 
            class="about-content flex"
        >

            <div class="about-information w-half flex flex-column gap-xlg scroll-y">

                
                <p class="font-lg bold" >
                    Trabalhos
                </p>
                <p class="font-md w-half">
                    Esta é uma vitrine dos meus trabalhos, com informações rápidas sobre cada um deles. 
                    Aqui você encontrará desde o desenvolvimento de páginas até a criação de serviços e exemplos de sistemas.
                </p>

            </div>

            <div class="about-works flex flex-column gap-xlg scroll-y">

                <div class="flex flex-column gap-md">
                    <h1 
                        class="grandslang"
                        style="font-size: 60px;"
                    >
                        Calm Life
                    </h1>
                    <p class="font-md w-half">
                        - Uma aplicação web view em Vue JS para organizar o dia a dia do usuario, ainda em desenvolvimento.
                        <br><a href="https://calm-life.vercel.app/">Site</a>, <a href="https://github.com/LucasSnSouza/CalmLife">Github</a>
                    </p>
                    <div class="flex gap-lg">
                        <img class="rounded-lg w-1-4" src="/projects/calm-life.png"></img>
                        <img class="rounded-lg w-1-4" src="/projects/calm-life-2.png"></img>
                        <img class="rounded-lg w-1-4" src="/projects/calm-life-3.png"></img>
                    </div>
                </div>

                <div class="flex flex-column gap-md">
                    <h1 
                        class="grandslang"
                        style="font-size: 60px;"
                    >
                        Cortex
                    </h1>
                    <p class="font-md w-half">
                        - Uma biblioteca em python com o objetivo de facilitar o desenvolvimento de games no motor Range engine
                        <br><a href="https://github.com/LucasSnSouza/Cortex">Github</a>
                    </p>
                </div>

                <div class="flex flex-column gap-md">
                    <h1 
                        class="grandslang"
                        style="font-size: 60px;"
                    >
                        3 AM
                    </h1>
                    <p class="font-md w-half">
                        - Uma plataforma para unir grupos de jogos propulares para conversas em forums ou troca de conhecimentos
                        <br><a href="https://3-am-five.vercel.app/">Site</a>
                    </p>
                    <div class="flex gap-lg">
                        <img class="rounded-lg w-1-4" src="/projects/3am-1.png"></img>
                        <img class="rounded-lg w-1-4" src="/projects/3am-2.png"></img>
                    </div>
                </div>

                <div class="flex flex-column gap-md">
                    <h1 
                        class="grandslang"
                        style="font-size: 60px;"
                    >
                        2 Dots
                    </h1>
                    <p class="font-md w-half">
                        - Um motor web 2d usando canvas, pratico e portable
                        <br><a href="https://github.com/LucasSnSouza/2DoTs">Github</a>
                    </p>
                </div>

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
