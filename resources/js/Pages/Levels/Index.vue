<script>
export default {
    name: 'LevelsIndex',
}
</script>


<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-[#353531] leading-tight">Levels</h2>
        </template>

        <section class="flex flex-col justify-center items-center m-3 gap-8">
            <article>
                <Link :href="route('levels.create')"
                    class="bg-[#35AFAE] hover:bg-[#479d9d] text-white font-bold py-2 px-4 rounded">Create Level</Link>
            </article>
            <article>
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Level
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Score
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="level in levels.data" :key="level">
                            
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ level.name }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ level.requiered_score }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Link :href="route('levels.edit', level.id)" class="text-indigo-600 hover:text-indigo-900 mr-4" >Edit</Link>
                                <Link  @click="deleteLevel(level.id)" class="text-red-600 hover:text-red-900">Delete</Link>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </article>

        </section>
    </AppLayout>


</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';

defineProps({
    levels: {
        type: Object,
        required: true
    }
})

const deleteLevel = async (id) => {
    if (confirm('Are you sure you want to delete this level?')) {
        await $inertia.delete(route('levels.destroy', id));
    }
}
</script>

<style scoped></style>
