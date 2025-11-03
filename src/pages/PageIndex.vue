<script setup lang="ts"></script>

<template>
    <q-page class="q-ma-sm">
        <section class="column items-center" style="margin-top: 13rem">
            <q-img src="~assets/synque-logo.png" width="120px" />
            <span class="text-h4 q-mt-md" style="color: #005a8b">Synque</span>
            <span class="text-h4 text-center q-mt-lg">Learn in sync with your mind</span>
            <div class="flex q-gutter-x-lg q-mt-xl">
                <!-- <q-btn size="lg" color="accent" style="width: 12.8769rem">Start learning</q-btn> -->
                <q-btn color="accent" style="width: 12.8769rem; font-weight: 400; font-size: 1rem"
                    >Choose language</q-btn
                >
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
