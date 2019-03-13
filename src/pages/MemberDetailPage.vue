<template>
    <div>
        Ini member detail
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