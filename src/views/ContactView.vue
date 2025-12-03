<template>

    <div class="abount flex scroll-y w-full h-full flex gap-xlg color-brand-two">

        <div class="transition-panel w-full h-full bg-color-brand-two"></div>

        <SidebarNavigation
            layout="goback"
            theme="bg-color-brand-two"
        />

        <div 
            class="about-content flex"
            style="padding: 124px;"
        >

            <div class="about-information w-half flex flex-column gap-xlg scroll-y">

                <h1 
                    class="grandslang"
                    style="font-size: 60px;"
                >
                    Olá.
                </h1>

                <p class="font-md">
                    Precisa de um desenvolvedor que cuide do seu site, 
                    que domine o backend ou até mesmo crie automações em Python? Entre em contato.
                </p>

                <div class="flex flex-column gap-md">
                    <p class="font-md">
                        Telefone e Whatsapp: (+55) 11 97570-6282
                    </p>
                    <p class="font-md">
                        Email: lucassantospublico@gmail.com
                    </p>
                    <p class="font-md">
                        Na internet: 
                        <a href="https://www.linkedin.com/in/lucasszsouza/">Linkedin</a>,
                        <a href="https://github.com/LucasSnSouza/">Github</a>
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
    
}

a{
    appearance: none;
    color: white
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
