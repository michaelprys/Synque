<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const email = ref('');
const accept = ref(false);
const password = ref('');
const isPwd = ref(true);

const onSubmit = () => {
    if (!accept.value) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
        });
    } else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
        });
    }
};

const onReset = () => {
    accept.value = false;
};
</script>

<template>
    <q-page class="q-ma-sm">
        <section
            class="column text-center items-center q-pa-lg bg-dark q-mx-auto"
            style="max-width: 30rem; margin-top: 13rem; border-radius: 0.75rem"
        >
            <span content class="col-2 text-h4" style="grid-column: 2; justify-self: center"
                >Login</span
            >

            <q-form class="q-mt-lg full-width" @submit="onSubmit" @reset="onReset">
                <q-input v-model="email" standout type="email" dark label="Email">
                    <template #prepend>
                        <q-icon name="mail" />
                    </template>
                </q-input>

                <q-input
                    v-model="password"
                    class="q-mt-md"
                    label="Password"
                    filled
                    dark
                    :type="isPwd ? 'password' : 'text'"
                >
                    <template #prepend>
                        <q-icon name="lock" />
                    </template>

                    <template #append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                    </template>
                </q-input>

                <div class="q-mt-lg">
                    <q-btn
                        color="secondary"
                        style="width: 17.1875rem; opacity: 75%; border-radius: 0.375rem"
                        size="lg"
                        >Login
                    </q-btn>
                </div>

                <div class="flex q-mt-lg flex-center">
                    <RouterLink
                        class="text-subtitle1"
                        :to="{ name: 'forgot-password' }"
                        style="width: 110px"
                    >
                        Forgot</RouterLink
                    >
                    <RouterLink
                        class="text-subtitle1"
                        :to="{ name: 'sign-up' }"
                        style="width: 110px"
                    >
                        Sign Up
                    </RouterLink>
                </div>
            </q-form>
        </section>
    </q-page>
</template>

<style lang="scss" scoped></style>
