<template>
  <div class="hello">
      <el-row :gutter="18">
        <el-col :span="4">
          <div class="Grid-cell">
            <el-input
              placeholder="请输入项目"
              suffix-icon="el-icon-date"
              v-model="input1">
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="Grid-cell">
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-date"
              v-model="input2">
            </el-input>
          </div>
        </el-col>

        <el-col :span="0.5">
          <div class="Grid-cell">
            <el-button type="primary" @click="searchMessages(input1)">查询</el-button>
          </div>
        </el-col>
        <el-col :span="0.5">
          <div class="Grid-cell">
            <el-button type="primary" :loading="false" @click="addMessage({ subject: input1, body: input2 })">新增</el-button>
          </div>
        </el-col>
      </el-row>

      <el-table
        :data="messages"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="subject"
          label="项目"
          width="180">
        </el-table-column>
        <el-table-column
          prop="body"
          label="内容">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteMessage(scope.row.pk)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>



  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'



export default{
  data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        subject: "",
        msgBody: "",
        pk: "",
      }
    },
    computed: {
      ...mapState({
        messages: state => state.messages.messages
        }),

      },
    methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 === 0) {
          return 'warning-row';
        } else if (rowIndex%2 !== 0) {
          return 'success-row';
        }
        return '';
      },
    ...mapActions('messages', ['addMessage','deleteMessage','searchMessages']),
    indexMethod(index) {
      return index;
    }
    },
    created() {
    this.$store.dispatch('messages/getMessages');

    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-table .warning-row {
    background: #FFFFFF;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
