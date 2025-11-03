<template>
    <q-page class="q-ma-sm">
        <section class="text-center">
            <div class="column items-center q-pa-lg bg-dark" style="border-radius: 0.75rem">
                <div class="full-width">
                    <div
                        class="items-center"
                        style="display: grid; grid-template-columns: repeat(3, 1fr)"
                    >
                        <span
                            content
                            class="col-2 text-h3 text-lowercase"
                            style="grid-column: 2; justify-self: center"
                            >Word</span
                        >
                        <!-- <span
                            class="text-sm text-lowercase text-info"
                            style="grid-column: 3; justify-self: end"
                            >321</span
                        > -->
                    </div>

                    <div class="flex flex-center q-mt-md q-gutter-x-sm">
                        <q-btn
                            icon="volume_down"
                            flat
                            round
                            color="info"
                            size="lg"
                            padding="xs"
                        ></q-btn>
                        <span class="text-lowercase text-h6 text-info">[transcription]</span>
                    </div>
                </div>

                <q-card
                    class="q-mt-lg flex-center flex text-info full-width"
                    style="background-color: #16161d; border-radius: 0.375rem"
                >
                    <q-img
                        class="full-width"
                        style="border-radius: 0.375rem"
                        src="https://unsplash.it/720/370"
                        width="720px"
                        height="370px"
                    />
                </q-card>

                <div class="column items-center">
                    <p
                        class="text-h5 q-mt-lg full-width"
                        style="max-width: 36.25rem; font-weight: 300"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <q-btn
                        class="q-mt-md"
                        icon="volume_down"
                        flat
                        round
                        color="info"
                        size="lg"
                        padding="xs"
                    ></q-btn>
                </div>

                <div class="flex-center q-gutter-x-lg q-mt-xl">
                    <q-btn
                        color="secondary"
                        style="opacity: 75%; width: 140px; border-radius: 0.375rem"
                        size="lg"
                        >I Know
                    </q-btn>
                    <q-btn
                        color="secondary"
                        style="opacity: 75%; width: 140px; border-radius: 0.375rem"
                        size="lg"
                        >Next</q-btn
                    >
                </div>
            </div>
        </section>
    </q-page>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
