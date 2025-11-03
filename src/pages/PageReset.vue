<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const accept = ref(false);
const newPassword = ref('');
const confirmNewPassword = ref('');
const isPwd = ref(true);
const isConfirmPwd = ref(true);

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
            style="max-width: 30rem; margin-top: 14rem; border-radius: 0.75rem"
        >
            <span content class="col-2 text-h4" style="grid-column: 2; justify-self: center"
                >Reset Password</span
            >

            <q-form class="q-mt-xl full-width" @submit="onSubmit" @reset="onReset">
                <q-input
                    v-model="newPassword"
                    class="q-mt-md"
                    label="New Password"
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

                <q-input
                    v-model="confirmNewPassword"
                    class="q-mt-md"
                    label="Confirm New Password"
                    filled
                    dark
                    :type="isConfirmPwd ? 'password' : 'text'"
                >
                    <template #prepend>
                        <q-icon name="lock" />
                    </template>

                    <template #append>
                        <q-icon
                            :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isConfirmPwd = !isConfirmPwd"
                        />
                    </template>
                </q-input>

                <div class="q-mt-xl">
                    <q-btn
                        color="secondary"
                        style="width: 17.1875rem; opacity: 75%; border-radius: 0.375rem"
                        size="lg"
                        >Set New Password
                    </q-btn>
                </div>

                <div class="flex q-mt-xl flex-center">
                    <RouterLink class="text-h6" :to="{ name: 'login' }"> Back to Login </RouterLink>
                </div>
            </q-form>
        </section>
    </q-page>
</template>

<style lang="scss" scoped></style>
