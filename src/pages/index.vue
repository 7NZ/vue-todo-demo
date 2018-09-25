<template>
  <div class="index-cont">
    <div class="ipt-wrap">
      <input type="text" placeholder="add new" v-model="newTodoText">
      <button class="ipt-btn" @click="addTodo">add</button>
    </div>
    <!-- 子组件 -->
    <CommonList ref='sonC' :todoTxt="newTodoText"></CommonList>
  </div>
</template>

<script>
import CommonList from '@/components/commonList.vue';

  export default {
    name: 'clist',
    components: { CommonList },
    data () {
      return {
        newTodoText: '',
      };
    },
    created () {
    },
    methods: {
      addTodo () {
        let txt = this.newTodoText;
        this.$refs.sonC.addNew(txt); // 向子组件传递参数
        this.newTodoText = '';
      }
    }
  };
</script>