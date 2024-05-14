<script>
export default {
    name: 'LevelEdit',

}
</script>

<template>
    <AppLayout title="Edit Level">
        <template #header>
            <h2 class="font-semibold text-xl text-[#353531] leading-tight">Update Level</h2>
        </template>

        <section class="flex flex-col justify-center items-center m-3 gap-8">
            <article>
                <LevelForm :updating="true" :form="form" @submit="form.put(route('levels.update', level.id))" />
            </article>
        </section>
    </AppLayout>


</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue';
import LevelForm from '@/Components/Levels/Form.vue';

const props = defineProps({
    level: {
        type: Object,
        required: true
    }
})

const form = useForm({
    name: props.level.name,
    required_score: props.level.required_score,
})

</script>