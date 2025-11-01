<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar> </q-toolbar>
        </q-header>

        <q-drawer show-if-above bordered>
            <q-list>
                <q-item-label header> Essential Links </q-item-label>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts"></script>
