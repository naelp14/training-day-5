<template>
    <div>
        <div>
            <label>Full Name:
                <input 
                type="text" 
                class="contact-input"
                v-model="formData.fullName"></label>
        </div>
        <div>
            <label>Email:
                <input
                type="email" 
                v-model="formData.email">
            </label>
        </div>
        <label>Description: 
            <textarea v-model="formData.description"></textarea></label>
        <div><button>Submit</button></div>
        <div>
            Data:
            <div>
                {{formData}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUsPage',
    data(){
        return{
            formData:{
                fullName:'',
                email:'',
                description:''
            }
        }
    }
}
</script>


<style <style scoped>
    label{
        display: block;
        padding-top: 20px;
    }
</style>

