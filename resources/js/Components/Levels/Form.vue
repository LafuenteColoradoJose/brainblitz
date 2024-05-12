<script>
export default {
  name: 'LevelsForm',
}
</script>

<template>
    <FormSection @submitted="$emit('submit')" >
        <template #title>
        {{ updating ? 'Update Level' : 'Create New Level' }}
        </template>
        <template #description>
            {{ updating ? 'Update the level details' : 'Fill in the details of the new level' }}
        </template>
        <template #form>
            <div class="">
                <div class="">
                    <InputLabel for="name" value="Level Name" />
                    <TextInput type="text" autocomplete="name" class="mt-1 block" v-model="form.name" />
                    <InputError :message="$page.props.errors.name" class="mt-2"/>
                </div>
                <div>
                    <InputLabel for="required_score" value="Required Score" />
                    <TextInput type="text" autocomplete="required_score" class="mt-1 block" v-model="form.required_score" />
                    <InputError :message="$page.props.errors.required_score" class="mt-2"/>
                </div>
            </div>
        </template>
        <template #actions>
            <PrimaryButton :loading="$page.props.processing" class="mt-2">
                {{ updating ? 'Update Level' : 'Create Level' }}
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

  updating: {
    type: Boolean,
    required: false,
    default: false
  }
})

defineEmits(['submit'])
</script>



