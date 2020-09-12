<template>
  <div class="hello">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="Grid-cell">
            <el-input
              placeholder="请输入内容"
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
        <el-col :span="4">
          <div class="Grid-cell">
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-date"
              v-model="input3">
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="Grid-cell">
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-date"
              v-model="input4">
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="Grid-cell">
            <el-button type="primary">查询</el-button>
          </div>
        </el-col>
      </el-row>

      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="subject"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="body"
          label="项目"
          width="180">
        </el-table-column>
        <el-table-column
          prop="url"
          label="内容">
        </el-table-column>
      </el-table>


	<p>Subject</p>
    <input type="text" placeholder="Hello" v-model="subject">
    <p>Message</p>
    <input type="text" placeholder="From the other side" v-model="msgBody">
    <br><br>
    <input
      type="submit"
      value="Add"
      @click="addMessage({ subject: subject, body: msgBody })"
      :disabled="!subject || !msgBody">

    <hr/>
    <h3>Messages on Database</h3>
    <p v-if="messages.length === 0">No Messages</p>
    <div class="msg" v-for="(msg, index) in messages" :key="index">
        <p class="msg-index">[{{index}}]</p>
        <p class="msg-subject" v-html="msg.subject"></p>
        <p class="msg-body" v-html="msg.body"></p>
        <input type="submit" @click="deleteMessage(msg.pk)" value="Delete" />
    </div>



  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Vue from 'vue'



export default{
  data() {
      return {
        tableData: [],
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        subject: "",
        msgBody: "",
      }
    },
    computed: mapState({
    messages: state => state.messages.messages
  }),
    methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
    ...mapActions('messages', ['addMessage','deleteMessage']),
    },
    created() {
    this.$store.dispatch('messages/getMessages');


    },
    mounted() {
    for (var i in this.messages) {
      //console.log("1111111111111")
      console.log(this.messages)
      //console.log(this.tableData)
      }
    this.tableData = this.messages
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
