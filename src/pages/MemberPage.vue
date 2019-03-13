<template>
    <div style="text-align:center">
        List of Members
        <table border="1">
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            <div v-for="i in items" v-bind:key="i">
                <tr>
                    <td>{{i.id}}</td>
                    <td><a :href="'/members/' +i.id">{{i.name}}</a></td>
                </tr>               
            </div>
        </table>
    </div>
</template>

<script type= "text/javascript">
import axios from 'axios'
export default {
    name: 'MemberPage',
    data(){
        return{
            items:[]
        }
    },
    created(){
        axios.get('/members').then((resp)=> {
            this.items = resp.data
        })
    }
}
</script>