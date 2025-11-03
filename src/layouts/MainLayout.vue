<script setup lang="ts">
import { ref } from 'vue';

const model = ref(null);

const stringOptions = ['Mandarin', 'Cantonese', 'Spanish', 'English', 'Czech'];

const options = ref([...stringOptions]);
</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <div>
            <div class="q-mx-auto" style="max-width: 57.5rem">
                <q-header class="bg-primary" elevated>
                    <q-toolbar class="text-h6 justify-between q-mx-auto" style="max-width: 90rem">
                        <div class="flex items-center">
                            <q-btn to="/" flat dense>
                                <img src="~assets/synque-logo.png" width="32" height="32" />
                            </q-btn>

                            <ul class="flex items-center q-ml-md">
                                <li>
                                    <q-btn to="/" flat color="info">Words</q-btn>
                                </li>
                                <li>
                                    <q-btn to="/" flat color="info">Instructions</q-btn>
                                </li>
                                <li>
                                    <q-select
                                        v-model="model"
                                        class="text-uppercase q-ml-md"
                                        dark
                                        label="language"
                                        label-color="info"
                                        color="info"
                                        borderless
                                        :options="options"
                                        style="width: 140px"
                                    />
                                </li>
                            </ul>
                        </div>

                        <div class="flex items-center q-gutter-x-sm">
                            <q-btn
                                :to="{ name: 'login' }"
                                icon="account_circle"
                                color="info"
                                dense
                                flat
                            />

                            <q-btn icon="settings" dense flat color="info"> </q-btn>
                        </div>
                        <!-- <div>
                        <q-btn icon="menu" flat round />
                    </div> -->
                    </q-toolbar>
                </q-header>

                <q-page-container style="padding-top: 5.5rem">
                    <router-view />
                    <!-- <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view> -->
                </q-page-container>
            </div>

            <footer class="bg-primary flex justify-end" style="width: 100%" elevated>
                <ul class="flex q-pa-sm q-gutter-x-md">
                    <li>
                        <q-btn class="q-px-md" to="/" flat color="info" padding="xs">About</q-btn>
                    </li>
                    <li>
                        <q-btn class="q-px-md" to="/" flat color="info" padding="xs">Terms</q-btn>
                    </li>
                    <li>
                        <q-btn class="q-px-md" to="/" flat color="info" padding="xs">Privacy</q-btn>
                    </li>
                </ul>
            </footer>
        </div>
    </q-layout>
</template>

<style lang="scss" scoped>
.q-field__native span {
    color: $negative;
}
</style>
