<template>
    <div>
        List of Products
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            <div v-for="i in items" v-bind:key="i">
                <tr>
                    <td>{{i.id}}</td>
                    <td><a :href="'/products/'+ i.id">{{i.productName}}</a></td>
                </tr>
            </div>
        </table>
    </div>
</template>

<script type= "text/javascript">
import axios from 'axios'
export default {
    name: 'ProductPage',
    data(){
        return{
            items:[]
        }
    },
    created(){
        axios.get('/products').then((resp)=>{
            this.items = resp.data
        })
    }
}
</script>

