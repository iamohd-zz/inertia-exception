<template>
    <div class="p-6 max-w-xl mx-auto">
        <Draggable
            v-model="project.columns"
            group="columns"
            item-key="id"
            class="flex flex-shrink-0 h-full space-x-2"
        >
            <template #item="{element: column}">
                <div class="max-w-sm w-full bg-red-200 p-6">{{ column.name }}</div>
            </template>
        </Draggable>

        <div class="mt-6 space-x-4">
            <button @click="doSomething" type="button" class="hover:underline">Call Inertia.put</button>
            <InertiaLink href="/another-url" class="hover:underline">To another page</InertiaLink>
        </div>
    </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import Draggable from 'vuedraggable'

export default {
    components: {
        Draggable,
    },
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    setup() {
        const doSomething = () => {
            Inertia.post('/put-url', {data: 'dummy'});
        }

        return {
            doSomething,
        }
    }
}
</script>
