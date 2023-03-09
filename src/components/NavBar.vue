<template>
    <div>
        <nav class="flex text-center text-xl w-screen bg-indigo-50 drop-shadow-2xl gap-10 text-fuchsia-600">
        
            <div class="nav-item">
                <router-link to="/">Dashboard</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/people">People</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/report">Report</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/service">Services</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/contact">Contact</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/about">About</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            meal: ''
        }
    },
    methods: {
        getMeal() {

        }
    }
}    
</script>