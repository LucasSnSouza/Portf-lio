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

            <div class="about-works">

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
