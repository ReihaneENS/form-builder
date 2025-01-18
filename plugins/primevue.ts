import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import Checkbox from 'primevue/checkbox'
import FileUpload from 'primevue/fileupload'
import Card from 'primevue/card'
import ToggleButton from 'primevue/togglebutton'

// Import PrimeVue styles
import 'primevue/resources/themes/saga-blue/theme.css' // Choose a theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })

    // Register PrimeVue components
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Textarea', Textarea)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('RadioButton', RadioButton)
    nuxtApp.vueApp.component('Checkbox', Checkbox)
    nuxtApp.vueApp.component('FileUpload', FileUpload)
    nuxtApp.vueApp.component('Card', Card)
    nuxtApp.vueApp.component('ToggleButton', ToggleButton)
})
