<template>
    <header class="bg-white">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900 text-left">
                {{title}}
            </h1>
            <slot name="header"></slot>
        </div>
    </header>
    <main class="bg-gray-100 w-full">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-gray-100">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
                <slot></slot>
            </div>
            <!-- /End replace -->
        </div>
    </main>
</template>

<script setup>
const prop = defineProps({
    title: String,

})
</script>

<style scoped>

</style>