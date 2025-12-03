<template>

    <div 
        class="app h-full flex flex-column"
    >
        <div class="app-information scroll-y h-full p-xlg">
            <RouterView/>
        </div>
    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { Storage } from '@/utils/storage.js'

import * as Button from "@/components/Button"
import * as Modal from "@/components/Modal"
import * as Card from "@/components/Card"
import * as Misc from "@/components/Misc"
import * as View from "@/components/View"

export default {
    data(){
        return{
            amount_craft_item: 0
        }
    },
    components: {
        ...Button,
        ...Misc,
        ...Modal,
        ...Card,
        ...View
    },
    methods: {
    },
    computed: {
    },
    mounted(){
    },
    created(){
    }
}

</script>

<style lang="scss">

.app{
}

</style>
