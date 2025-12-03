<template>
    <div class="division-wrapper w-full"></div>
</template>

<script>

export default{
    data(){
        return{
            
        }
    },
    props: {
        theme: {
            type: String,
            default: "bg-color-brand-one"
        }
    }
}

</script>

<style lang="scss">

.division-wrapper{
    border-bottom: 1px solid v-bind(theme);
}

</style>