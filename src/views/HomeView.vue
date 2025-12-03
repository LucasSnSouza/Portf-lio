<template>

    <div class="home flex scroll-y w-full h-full flex gap-xlg bg-color-brand-two color-brand-one">

        <SidebarNavigation
            layout="contact"
            theme="bg-color-brand-one"
        />

        <div class="panel-information flex flex-column x-center y-end p-xlg w-half">

            <div class="frame-information h-half w-full flex flex-column y-start x-end gap-lg">
                <h1 class="font-lg">Lucas dos Santos Souza</h1>
                <p class="w-half">Front end Developer / Backend Developer / UI and UIX Skills.</p>
                <p class="w-half">
                    Atualmente estou em busca de novas oportunidades, enquanto dedico meu tempo ao desenvolvimento dos meus projetos pessoais.
                </p>
            </div>

        </div>

        <div class="panel-navigation flex flex-column x-center y-center text-start p-xlg w-half">

            <div class="frame-navigation h-half w-full flex flex-column y-start x-end">
                <p 
                    class="navigation-text w-full pointer"
                    @click="$router.push({ path: '/about' })"
                >
                    Informações
                </p>
                <p 
                    class="navigation-text w-full pointer"
                    @click="$router.push({ path: '/works' })"
                >
                    Projetos
                </p>
                <p 
                    class="navigation-text w-full pointer"
                    @click="$router.push({ path: '/contact' })"
                >
                    Contato
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
    .home{
        flex-direction: column;
        
        .panel-information{
            width: 100%;
            justify-content: flex-end;

            .frame-information{
                width: 100%;
                p{
                    width: 100%;
                }
            }
            
        }
        .panel-navigation{
            width: 100%;

            .navigation-text{

                font-size: 40px;
                transition: 0.5s;
                display: inline-block;
                font-family: grandslang;

                &:hover{
                    font-size: 50px;
                    transform: skewX(-12deg);
                }

            }

        }

    }
}

.home{
    animation: fade-in 1s ease;
}

.navigation-text{

    font-size: 80px;
    transition: 0.5s;
    display: inline-block;
    font-family: grandslang;

    &:hover{
        font-size: 90px;
        transform: skewX(-12deg);
    }

}

@keyframes fade-in {
    from{
        height: 0%;
    }to{
        height: 100%;
    }
}

</style>
