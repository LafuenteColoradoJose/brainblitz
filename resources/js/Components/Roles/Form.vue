<script>
export default {
  name: 'RolesForm',
}
</script>

<template>
    <FormSection @submitted="$emit('submit')" >
        <template #title>
       Create New Role
        </template>
        <template #description>
            Fill in the details of the new role
        </template>
        <template #form>
            <div class="">
                <div class="">
                    <InputLabel for="name" value="Role Name" />
                    <TextInput type="text" autocomplete="name" class="mt-1 block" v-model="form.name" />
                    <InputError :message="$page.props.errors.name" class="mt-2"/>
                </div>
            </div>
        </template>
        <template #actions >
            <PrimaryButton :loading="$page.props.processing" class="mt-2" >
                Create Role
            </PrimaryButton>
        </template>

    </FormSection>
  
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import FormSection from '@/Components/FormSection.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'

defineProps({
  form: {
    type: Object,
    required: true
  },

 
})

defineEmits(['submit'])
</script>



