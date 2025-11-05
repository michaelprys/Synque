<script setup lang="ts">
// import { ref } from 'vue';

// const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];

// const model = ref(null);
// const options = ref([...stringOptions]);

// function filterFn(val: string, update: (callback: () => void) => void): void {
//     if (val === '') {
//         update(() => {
//             options.value = [...stringOptions];
//         });
//         return;
//     }

//     update(() => {
//         const needle = val.toLowerCase();
//         options.value = stringOptions.filter((v) => v.toLowerCase().includes(needle));
//     });
// }
</script>

<template>
    <q-page class="q-ma-sm">
        <section class="column items-center" style="margin-top: 13rem">
            <q-img src="~assets/synque-logo.png" width="120px" />
            <span class="text-h4 q-mt-md" style="color: #005a8b">Synque</span>
            <span class="text-h4 text-center q-mt-lg">Learn in sync with your mind</span>
            <div class="flex q-gutter-x-lg q-mt-xl">
                <q-btn
                    :to="{ name: 'learn' }"
                    size="lg"
                    text-color="white"
                    color="accent"
                    style="
                        width: 12.8769rem;
                        font-weight: 400;
                        font-size: 1rem;
                        background-color: #002e5a;
                    "
                >
                    Choose Language
                </q-btn>
                <q-btn
                    :to="{ name: 'learn' }"
                    size="lg"
                    text-color="white"
                    style="
                        width: 12.8769rem;
                        font-weight: 400;
                        font-size: 1rem;
                        background-color: #002e5a;
                    "
                >
                    Learn recent
                </q-btn>
            </div>
        </section>
    </q-page>
</template>

<style lang="scss" scoped></style>
