<template>
	<div class="form-container">
		<Card>
			<template #title>
				<div class="flex items-center justify-between mb-4">
					<h1 class="text-2xl font-bold">ساخت فرم</h1>
					<Button icon="pi pi-save" label="ذخیره فرم" severity="primary" @click="saveForm" />
				</div>
			</template>

			<div class="form-section">
				<div class="form-group">
					<label class="form-label">نام فرم</label>
					<InputText v-model="form.title" class="w-full" placeholder="یک عنوان برای این فرم" />
				</div>

				<div class="form-group">
					<label class="form-label">دسته بندی</label>
					<Dropdown
						v-model="form.category"
						:options="categories"
						class="w-full"
						optionLabel="name"
						optionValue="id"
						placeholder="انتخاب کنید"
					/>
				</div>

				<div class="form-group">
					<label class="form-label">توضیحات فرم</label>
					<Textarea v-model="form.description" rows="3" class="w-full" placeholder="توضیحات درباره این فرم" />
				</div>
			</div>

			<FormSection
				v-for="section in form.sections"
				:key="section.id"
				:section="section"
				@update:section="updateSection"
				@delete:section="deleteSection"
			/>

			<div class="mt-4">
				<Button
					icon="pi pi-plus"
					label="پرسش جدید"
					severity="secondary"
					text
					@click="addSection"
				/>
			</div>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Form } from '~/types/form'
import FormSection from "~/components/form/FormSection.vue";

const form = ref<Form>({
	id: '',
	title: '',
	description: '',
	category: '',
	sections: []
})

const categories = ref([
	{ id: 'general', name: 'عمومی' },
	{ id: 'specialized', name: 'تخصصی' }
])

const addSection = () => {
	form.value.sections.push({
		id: crypto.randomUUID(),
		title: '',
		fields: []
	})
}

const updateSection = (sectionId: string, updatedSection: FormSection) => {
	const index = form.value.sections.findIndex(s => s.id === sectionId)
	if (index !== -1) {
		form.value.sections[index] = updatedSection
	}
}

const deleteSection = (sectionId: string) => {
	form.value.sections = form.value.sections.filter(s => s.id !== sectionId)
}

const saveForm = () => {
	console.log('Saving form:', form.value)
}
</script>