import ListView from './ListView';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    name: name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
              setTimeout(() => {
                  bus.$emit('end:spinner');
              }, 1000)
              
          })
          .catch(err => console.log(err));
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}