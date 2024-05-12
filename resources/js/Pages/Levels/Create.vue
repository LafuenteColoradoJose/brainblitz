<script>

    export default {
        name: 'LevelsCreate',
    
    }
</script>

<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-[#353531] leading-tight">Create Levels</h2>
        </template>

        <section class="flex flex-col justify-center items-center m-3 gap-8">
            <article>
                <LevelForm :form="form" @submit="form.post(route('levels.store'))" />
            </article>
        </section>
    </AppLayout>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue';
import LevelForm from '@/Components/Levels/Form.vue';

const form = useForm({
    name: ''
})

</script>

<style scoped>
</style>

