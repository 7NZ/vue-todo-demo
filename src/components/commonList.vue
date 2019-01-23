<template>
  <div class="todo-list">
    <a class="item" v-for="(im,index) in dataList" :key="index" v-bind:class="{hasDone: im.status}">
      <p>{{ im.txt }}  <br>-- {{ im.date }}</p>
      <span class="icon-cross" ></span>
      <div class="opts" @click="showOpt(index)">
        <span class="icon-more"></span>
        <ul v-show="showlist[index]">
          <!-- v-on:click.stop stopPropagation -->
          <li v-show="!im.status" v-on:click="markTodo(index)">mark as done</li>
          <li @click="removeTodo(index)">remove</li>
        </ul>
      </div>
    </a>
  </div>
</template>

<script>
function curDate() {
  let d = new Date();
  let year = d.getFullYear();
  let mon = d.getMonth() + 1;
  let day = d.getDate();
  let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  let min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  let sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
  let curDateTime = `${year}-${mon}-${day} ${hour}:${min}:${sec}`;
  return curDateTime;
}

  export default {
    props: {
      todoTxt: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        dataList: [
          {
            txt: 'description 1',
            date: '2018-9-20 12:20:20',
            status: 0
          },
          {
            txt: 'description 2',
            date: '2018-9-20 16:42:30',
            status: 1
          }
        ],
        showlist: []
      };
    },
    created () {
      this.dataList.map(() => this.showlist.push(false));
      let todoData = localStorage.getItem('todos');
      if(todoData){
        this.dataList = JSON.parse(todoData);
      }
    },
    methods: {
      setTodoStorage () {
        let todoData = JSON.stringify(this.dataList);
        localStorage.setItem('todos',todoData);
      },
      addNew () {
        if (this.todoTxt == '') {
          alert('required!');
          return;
        }
        this.dataList.push({
          txt: this.todoTxt,
          date: curDate(),
          status: 0
        });
        this.setTodoStorage();
      },
      showOpt (index) {
        this.$set(this.showlist, index, !this.showlist[index]);
      },
      markTodo (index) {
        // 利用索引直接设置一个项不能动态更新，这里先复制一下，再更改其中一项的值，之后再赋值
        // https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B
        let temObj = this.dataList[index];
        temObj.status = 1;
        this.$set(this.dataList, index, temObj);
        this.setTodoStorage();
      },
      removeTodo (index) {
        this.dataList.splice(index, 1);
        this.setTodoStorage();
      }
    }
  };
</script>
