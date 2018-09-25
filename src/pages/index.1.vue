<template>
  <div class="index-cont">
      <div class="ipt-wrap">
        <input type="text" placeholder="add new" v-model="newTodoText">
        <button class="ipt-btn" @click="addNew">add</button>
      </div>
    <div class="todo-list">
      <a class="item" v-for="(im,index) in dataList" :key="index" v-bind:class="{hasDone: im.status}">
        <p>{{ im.txt }}</p>
        <span class="icon-cross" ></span>
        <div class="opts" @click="showOpt(index)">
          <span class="icon-more"></span>
          <ul v-show="showlist[index]">
            <!-- v-on:click.stop stopPropagation -->
            <li v-show="!im.status" v-on:click="markTodo(index)">mark as done</li>
            <li @click="dataList.splice(index, 1)">remove</li>
          </ul>
        </div>
      </a>
    </div>
    <div id="test">{{ dw }} &nbsp; {{ dh }}  {{ dpr }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataList: [
          {
            txt: 'description 1',
            status: 0,
          },
          {
            txt: 'description 2',
            status: 1,
          }
        ],
        nextTodoId: 3,
        newTodoText: '',
        showlist: [],
        dw: 0,
        dh: 0,
        dpr: 1
      };
    },
    created () {
      var _self = this;
      _self.dw = document.documentElement.clientWidth || document.body.clientWidth;
      _self.dh = document.documentElement.clientHeight || document.body.clientHeight;
      _self.dpr = window.devicePixelRatio;
      for(var x in _self.dataList){
        _self.showlist.push(false);
      }
      let todoData = localStorage.getItem('todos');
      if(todoData){
        _self.dataList = JSON.parse(todoData);
      }
    },
    methods: {
      setTodoStorage () {
        var _self = this;
        let todoData = JSON.stringify(_self.dataList);
        localStorage.setItem('todos',todoData);
      },
      addNew () {
        var _self = this;
        _self.dataList.push({
          id: _self.nextTodoId++,
          txt: _self.newTodoText,
          status: 0
        });
        _self.newTodoText = '';
        _self.setTodoStorage ();
      },
      showOpt (index) {
        this.$set(this.showlist, index, !this.showlist[index]);
      },
      markTodo (index) {
        var _self = this;
        // 利用索引直接设置一个项不能动态更新，这里先复制一下，再更改其中一项的值，之后再赋值
        // https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B
        let temObj = _self.dataList[index];
        temObj.status = 1;
        _self.$set(_self.dataList, index, temObj);
        _self.setTodoStorage ();
      },
      removeTodo (index) {
        dataList.splice(index, 1);
        _self.setTodoStorage ();
      }
    }
  };
</script>