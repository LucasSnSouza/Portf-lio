<template>

    <div class="home w-full h-full flex gap-xlg">

        <div class="flex flex-column x-center y-center p-xlg w-half">

            <div class="h-half flex flex-column y-start x-end">
                <h1 class="font-lg">Lucas dos Santos Souza</h1>
            </div>

        </div>

        <div class="flex flex-column x-center y-center p-xlg w-half">

            <p class="navigation-text pointer">Informações</p>
            <p class="navigation-text pointer">Trabalhos</p>

        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button
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

.navigation-text{

    font-size: 64px;
    transition: 0.5s;
    display: inline-block;

    &:hover{
        font-size: 74px;
        transform: skewX(-12deg);
    }

}

</style>
