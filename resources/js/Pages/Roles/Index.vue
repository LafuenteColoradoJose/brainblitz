<script>
export default {
    name: 'RolesIndex',
}
</script>


<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-[#353531] leading-tight">Roles</h2>
        </template>

        <section class="flex flex-col justify-center items-center m-3 gap-8"
            v-if="$page.props.user.permissions.includes('read roles')">


            <article>
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>

                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>


                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="role in roles.data" :key="role">

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ role.name }}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="mt-8">
                    "Creation, editing, and deletion of Roles is not implemented in this version."
                </p>
            </article>



        </section>
    </AppLayout>


</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';

defineProps({
    roles: {
        type: Object,
        required: true
    }
})


</script>

<style scoped></style>
