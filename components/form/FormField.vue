<template>
	<div class="form-group border rounded-lg p-4 mb-4">
		<div class="flex items-center justify-between mb-4">
			<div class="flex-1 mr-4">
				<InputText v-model="fieldData.title" class="form-input" placeholder="عنوان پرسش" />
			</div>
			<div class="flex items-center gap-2">
				<ToggleButton
					v-model="fieldData.required"
					onIcon="pi pi-check"
					offIcon="pi pi-times"
					onLabel="الزامی"
					offLabel="اختیاری"
				/>
				<Button icon="pi pi-trash" severity="danger" text @click="$emit('delete:field', field.id)" />
			</div>
		</div>

		<div class="flex items-center gap-4">
			<Dropdown
				v-model="fieldData.type"
				:options="fieldTypes"
				class="w-48"
				optionLabel="name"
				optionValue="id"
				placeholder="نوع پاسخ"
			/>

			<template v-if="['single', 'multiple', 'list'].includes(fieldData.type)">
				<div class="flex-1">
					<div v-for="(option, index) in fieldData.options" :key="index" class="flex items-center gap-2 mb-2">
						<InputText v-model="fieldData.options[index]" class="form-input" placeholder="گزینه جدید" />
						<Button icon="pi pi-times" severity="danger" text @click="removeOption(index)" />
					</div>
					<Button
						icon="pi pi-plus"
						label="افزودن گزینه جدید"
						severity="secondary"
						text
						@click="addOption"
					/>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FormField } from '~/types/form'

const props = defineProps<{
	field: FormField
}>()

const emit = defineEmits<{
	'update:field': [string, FormField]
	'delete:field': [string]
}>()

const fieldData = ref<FormField>({ ...props.field })

const fieldTypes = ref([
	{ id: 'short', name: 'پاسخ کوتاه' },
	{ id: 'long', name: 'پاسخ بلند' },
	{ id: 'single', name: 'تک پاسخی' },
	{ id: 'multiple', name: 'چند پاسخی' },
	{ id: 'list', name: 'لیست انتخابی' },
	{ id: 'file', name: 'بارگذاری پیوست' }
])

watch(fieldData, () => {
	emit('update:field', props.field.id, { ...fieldData.value })
}, { deep: true })

const addOption = () => {
	if (!fieldData.value.options) {
		fieldData.value.options = []
	}
	fieldData.value.options.push('')
}

const removeOption = (index: number) => {
	fieldData.value.options?.splice(index, 1)
}
</script>