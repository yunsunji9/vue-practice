<template>
    <div>
        <ListItem></ListItem>
    </div>
</template>

<script>
import ListItem from '../components/ListItem';
//import ListMixin from '../mixins/ListMixin.js';
import bus from '../utils/bus';

export default {
    components: {
        ListItem
    },
    mounted() {
        bus.$emit('end:spinner');
    }
    //mixins: [ ListMixin ],
    // created() {
    //     bus.$emit('start:spinner');
    //     this.$store.dispatch('FETCH_NEWS')
    //         .then(() => {
    //             console.log('success');
    //             setTimeout(() => {
    //                 bus.$emit('end:spinner');
    //             }, 1000)
                
    //         })
    //         .catch(err => console.log(err));
    // }
}
</script>
