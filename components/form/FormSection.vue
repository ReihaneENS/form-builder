<template>
	<div class="form-section mt-4">
		<div class="flex items-center justify-between mb-4">
			<InputText v-model="sectionData.title" class="form-input" placeholder="عنوان پرسش" />
			<Button icon="pi pi-trash" severity="danger" text @click="$emit('delete:section', section.id)" />
		</div>

		<FormField
			v-for="field in sectionData.fields"
			:key="field.id"
			:field="field"
			@update:field="updateField"
			@delete:field="deleteField"
		/>

		<div class="mt-4">
			<Button
				icon="pi pi-plus"
				label="پرسش جدید"
				severity="secondary"
				text
				@click="addField"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FormSection, FormField } from '~/types/form'

const props = defineProps<{
	section: FormSection
}>()

const emit = defineEmits<{
	'update:section': [string, FormSection]
	'delete:section': [string]
}>()

const sectionData = ref<FormSection>({ ...props.section })

watch(sectionData, () => {
	emit('update:section', props.section.id, { ...sectionData.value })
}, { deep: true })

const addField = () => {
	sectionData.value.fields.push({
		id: crypto.randomUUID(),
		type: 'short',
		title: '',
		required: false
	})
}

const updateField = (fieldId: string, updatedField: FormField) => {
	const index = sectionData.value.fields.findIndex(f => f.id === fieldId)
	if (index !== -1) {
		sectionData.value.fields[index] = updatedField
	}
}

const deleteField = (fieldId: string) => {
	sectionData.value.fields = sectionData.value.fields.filter(f => f.id !== fieldId)
}
</script>