import { App, plugin } from '@inertiajs/inertia-vue3'
import { createApp, h } from 'vue'

const el = document.getElementById('app')

const app = createApp({
    render: () => h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => import(`./views/${name}`).then(module => module.default),
    })
})
    .use(plugin);

app.mount(el);
