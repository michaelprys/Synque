<script setup lang="ts">
import { ref } from 'vue';

const modelTerms = ref(false);
const modelAbout = ref(false);
</script>

<template>
    <q-dialog v-model="modelTerms">
        <q-layout
            view="Lhh lpR fff"
            container
            class="bg-secondary"
            style="max-height: 800px; max-width: 1200px"
        >
            <q-page-container>
                <q-page padding>
                    <div class="flex flex-center">
                        <h3>Terms</h3>
                        <p class="text-h6 q-mt-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt optio
                            praesentium dolorem illum aspernatur debitis aut quibusdam dolore. Non
                            adipisci vitae soluta dolorem vero quaerat voluptates voluptatem minus
                            blanditiis totam. Cupiditate est fugit excepturi aliquid cum eum impedit
                            rerum tempora, ut eos. Culpa necessitatibus sequi maiores magni
                            aspernatur fugiat modi qui ullam molestiae, ducimus soluta tenetur
                            incidunt, voluptatem quasi ipsum. Cumque nemo consequatur tempora iure
                            similique adipisci perferendis sed facere deleniti autem illum sit
                            suscipit ad assumenda officia obcaecati optio dolorum, corrupti amet
                            dicta quaerat earum ducimus? Corporis, labore sunt. Porro, ipsum natus
                            fugiat tenetur culpa qui eos eaque ipsa adipisci nihil eum numquam
                            ipsam, nobis provident officia fuga debitis quibusdam temporibus, nulla
                            pariatur autem reiciendis nostrum ratione odit. Obcaecati? Possimus
                            earum fuga recusandae quisquam, totam voluptate. Natus porro, debitis
                            necessitatibus a error repellendus aliquam sed delectus neque ullam
                            repudiandae atque quis autem cupiditate voluptates repellat,
                            perspiciatis facilis eos. Impedit? Unde ab officiis error fugiat,
                            accusantium ipsam in? Atque omnis consequuntur deserunt quidem cum a,
                            molestias reprehenderit inventore in tempora facilis commodi consectetur
                            numquam voluptatem hic? Nam rerum odio at. Alias fugit doloribus
                            accusamus tempora. Molestias suscipit nihil quod repudiandae. Tenetur,
                            dicta quis ex quaerat nisi quibusdam perferendis, libero consectetur
                            natus molestias excepturi inventore minima doloribus asperiores quidem
                            voluptatem illum. Quo nulla ut dolores provident laboru. Atque omnis
                            consequuntur deserunt quidem cum a, molestias reprehenderit inventore in
                            tempora facilis commodi consectetur numquam voluptatem hic? Nam rerum
                            odio at. Alias fugit doloribus accusamus tempora. Molestias suscipit
                            nihil quod repudiandae. Tenetur, dicta quis ex quaerat nisi quibusdam
                            perferendis, libero consectetur natus molestias excepturi inventore
                            minima doloribus asperiores quidem voluptatem illum. Quo nulla ut
                            dolores provident laboru. Quo nulla ut dolores provident.
                        </p>

                        <q-btn
                            v-close-popup
                            class="q-mt-lg q-mx-auto"
                            color="dark"
                            style="width: 200px"
                            >Close</q-btn
                        >
                    </div>
                </q-page>
            </q-page-container>
        </q-layout>
    </q-dialog>

    <q-dialog v-model="modelAbout">
        <q-layout
            view="Lhh lpR fff"
            container
            class="bg-secondary"
            style="max-height: 800px; max-width: 1200px"
        >
            <q-page-container>
                <q-page padding>
                    <div class="flex flex-center">
                        <h3>What is Synque?</h3>
                        <p class="q-mt-lg text-h6 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt optio
                            praesentium dolorem illum aspernatur debitis aut quibusdam dolore. Non
                            adipisci vitae soluta dolorem vero quaerat voluptates voluptatem minus
                            blanditiis totam. Cupiditate est fugit excepturi aliquid cum eum impedit
                            rerum tempora, ut eos. Culpa necessitatibus sequi maiores magni
                            aspernatur fugiat modi qui ullam molestiae, ducimus soluta tenetur
                            incidunt, voluptatem quasi ipsum. Cumque nemo consequatur tempora iure
                            similique adipisci perferendis sed facere deleniti autem illum sit
                            suscipit ad assumenda officia obcaecati optio dolorum, corrupti amet
                            dicta quaerat earum ducimus? Corporis, labore sunt. Porro, ipsum natus
                            fugiat tenetur culpa qui eos eaque ipsa adipisci nihil eum numquam
                            ipsam, nobis provident officia fuga debitis quibusdam temporibus, nulla
                            pariatur autem reiciendis nostrum ratione odit. Obcaecati? Possimus
                            earum fuga recusandae quisquam, totam voluptate. Natus porro, debitis
                            necessitatibus a error repellendus aliquam sed delectus neque ullam
                            repudiandae atque quis autem cupiditate voluptates repellat,
                            perspiciatis facilis eos. Impedit? Unde ab officiis error fugiat,
                            accusantium ipsam in? Atque omnis consequuntur deserunt quidem cum a,
                            molestias reprehenderit inventore in tempora facilis commodi consectetur
                            numquam voluptatem hic? Nam rerum odio at. Alias fugit doloribus
                            accusamus tempora. Molestias suscipit nihil quod repudiandae. Tenetur,
                            dicta quis ex quaerat nisi quibusdam perferendis, libero consectetur
                            natus molestias excepturi inventore minima doloribus asperiores quidem
                            voluptatem illum. Quo nulla ut dolores provident laboru. dicta quis ex
                            quaerat nisi quibusdam perferendis, libero consectetur natus molestias
                            excepturi inventore minima doloribus asperiores quidem voluptatem illum.
                            Quo nulla ut dolores provident laboru. dicta quis ex quaerat nisi
                            quibusdam perferendis, libero consectetur natus molestias excepturi
                            inventore minima doloribus asperiores quidem voluptatem illum. Quo nulla
                            ut dolores provident laboru. Quo nulla ut dolores provident laboru.
                            dicta quis ex quaerat nisi quibusdam perferendis, libero consectetur
                            natus molestias excepturi inventore minima doloribus asperiores quidem
                            voluptatem illum. Quo nulla ut dolores provident laboru. Quo nulla ut
                            dolores provident laboru. dicta quis ex quaerat nisi quibusdam
                            perferendis, libero consectetur natus molestias excepturi inventore
                            minima doloribus asperiores quidem voluptatem illum. Quo nulla ut
                            dolores provident laboru. Quo nulla ut dolores provident laboru. dicta
                            quis ex quaerat nisi quibusdam perferendis, libero consectetur natus
                            molestias excepturi inventore minima doloribus asperiores quidem
                            voluptatem illum. Quo nulla ut dolores provident laboru. Quo nulla ut
                            dolores provident laboru. dicta quis ex quaerat nisi quibusdam
                            perferendis, libero consectetur natus molestias excepturi inventore
                            minima doloribus asperiores quidem voluptatem illum. Quo nulla ut
                            dolores provident laboru. Quo nulla ut dolores provident laboru. dicta
                            quis ex quaerat nisi quibusdam perferendis, libero consectetur natus
                            molestias excepturi inventore minima doloribus asperiores quidem
                            voluptatem illum. Quo nulla ut dolores provident laboru. Quo nulla ut
                            dolores provident laboru. dicta quis ex quaerat nisi quibusdam
                            perferendis, libero consectetur natus molestias excepturi inventore
                            minima doloribus asperiores quidem voluptatem illum. Quo nulla ut
                            dolores provident laboru. Quo nulla ut dolores provident laboru. dicta
                            quis ex quaerat nisi quibusdam perferendis, libero consectetur natus
                            molestias excepturi inventore minima doloribus asperiores quidem
                            voluptatem illum. Quo nulla ut dolores provident laboru. Quo nulla ut
                            dolores provident laboru. dicta quis ex quaerat nisi quibusdam
                            perferendis, libero consectetur natus molestias excepturi inventore
                            minima doloribus asperiores quidem voluptatem illum. Quo nulla ut
                            dolores provident laboru.
                        </p>

                        <q-btn
                            v-close-popup
                            class="q-mt-lg q-mx-auto"
                            color="dark"
                            size="lg"
                            style="width: 300px"
                            >Close</q-btn
                        >
                    </div>
                </q-page>
            </q-page-container>
        </q-layout>
    </q-dialog>

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
                                    <q-btn to="/" flat color="info">Home</q-btn>
                                </li>
                                <li>
                                    <q-btn to="/" flat color="info">Words</q-btn>
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
                    </q-toolbar>
                </q-header>

                <q-page-container style="padding-top: 5.5rem">
                    <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </q-page-container>
            </div>

            <footer class="bg-primary" elevated>
                <div class="flex justify-end q-mx-auto" style="max-width: 90rem; width: 100%">
                    <ul class="flex q-pa-sm q-gutter-x-md">
                        <li>
                            <q-btn
                                class="q-px-md"
                                :to="{ name: 'about' }"
                                flat
                                color="info"
                                padding="xs"
                                @click="modelAbout = true"
                                >About</q-btn
                            >
                        </li>
                        <li>
                            <q-btn
                                class="q-px-md"
                                to="/"
                                flat
                                color="info"
                                padding="xs"
                                @click="modelTerms = true"
                                >Terms</q-btn
                            >
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    </q-layout>
</template>

<style lang="scss" scoped>
.q-field__native span {
    color: $negative;
}
</style>
