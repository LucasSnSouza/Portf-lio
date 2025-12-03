<template>

    <div class="sidebar-navigation flex flex-column p-md">

        <div class="side-navigation-buttons flex flex-column h-full">
            <div 
                v-if="layout == 'contact'"
                class="side-navigation-contact flex flex-column gap-md"
            >
                <ButtonBasic class="w-full aspect-ratio bg-none flex x-center y-center pointer">
                    <MiscIcon
                        icon="linkedin-icon"
                        :class="theme"
                        :size="[24,24]"
                    />
                </ButtonBasic>
                <ButtonBasic class="w-full aspect-ratio bg-none flex x-center y-center pointer">
                    <MiscIcon
                        icon="github-icon"
                        :class="theme"
                        :size="[24,24]"
                    />
                </ButtonBasic>
            </div>
            <div 
                v-else
                class="side-navigation-goback"
            >
                <p class="pointer" @click="$router.back()">Home</p>
            </div>
        </div>

        <div 
            class="side-navigation-rights flex x-center y-center"
            style="padding-bottom: 40px;"
        >
            <p style="transform: rotate(90deg);">@ 2025</p>
        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            
        }
    },
    props: {
        layout: {
            type: String,
            default: "contact"
        },
        theme: {
            type: String,
            default: ""
        }
    },
    components: {
        ...Misc,
        ...Button
    }
}

</script>

<style lang="scss" scoped>

@media screen and (max-width: 800px) {

    .sidebar-navigation{
        width: 100%;
        height: 80px;
        flex-direction: row;

        .side-navigation-buttons{
            flex-direction: row;
            width: 100%;
            padding-left: 20px;

            .side-navigation-contact{
               flex-direction: row;
            }
            .side-navigation-goback{
                width: 100%;
                padding-top: 0px;
                align-items: center;
                justify-content: flex-start;
                display: flex;
                p{
                    transform: rotate(0deg);
                }
            }
        }
        .side-navigation-rights{
            display: none;
        }
    }

    .division-wrapper{
        transform: rotate(0deg);
        margin-top: 0px;
    }

}

@media screen and (min-width: 800px) {

    .sidebar-navigation{
        width: 80px;
        height: 100%;

        .side-navigation-buttons{
            
            .side-navigation-goback{
                padding-top: 40px;
                p{
                    transform: rotate(90deg);
                }
            }
        }
    }

}

</style>