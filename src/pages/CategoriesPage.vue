<template>
    <div>
        List of Categories
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            <div v-for="i in items" v-bind:key="i">
                <tr>
                    <td>{{i.id}}</td>
                    <td>{{i.name}}</td>
                    <td><router-link to "/categories/delete" class="button">Delete</router-link></td>
                </tr>
            </div>
        </table>
    </div>
</template>

<script type= "text/javascript">
import axios from 'axios'
export default {
    name: 'CategoriesPage',
    data(){
        return{
            items:[]
        }
    },
    created(){
        axios.get('/categories/all').then((resp)=> {
            this.items = resp.data
        })
    }
}
</script>

<style scoped>
    .button{
        padding: 5px;
        border-radius:5px;
        text-decoration: none;
        color: black;
        font-weight: bold;
        background-color: red;
    }
</style>
