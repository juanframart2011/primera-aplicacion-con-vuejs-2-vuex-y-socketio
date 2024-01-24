<template>
    <div class="users-sidebar">
        <div class="card">
            <ul v-if="users">
                <li>usuario conectados</li><hr />
                <li v-for="user in users">
                    <b v-if="user === username">{{ user }}</b>
                    <span v-else>{{ user }}</span>
                </li>
            </ul>
            <p v-else>Ni un usuario conectado</p>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default{
        name: 'users-sidebar',
        methods:{
            
        },
        computed:{
            ...mapGetters(['users','username'])
        }
    }
</script>
<style scoped>
li{
    list-style: none;
    text-align: left;
}
.card{
    padding: 20px !important;
}
</style>