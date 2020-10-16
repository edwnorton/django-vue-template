<template>
  <div class="hello">
      <el-row :gutter="18">
        <el-col :span="4">
          <div class="Grid-cell">
            <el-input
              placeholder="请输入项目"
              prefix-icon="el-icon-search"
              v-model="input1"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="Grid-cell">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input2"
              clearable>
            </el-input>
          </div>
        </el-col>

        <el-col :span="0.5">
          <div class="Grid-cell">
            <el-button type="primary" @click="searchGroups(input1)">查询</el-button>
          </div>
        </el-col>
        <el-col :span="0.5">
          <div class="Grid-cell">
            <el-button type="primary" :loading="false" @click="addGroups({ group: input1, number: input2 })">新增</el-button>
          </div>
        </el-col>
      </el-row>

      <el-table
        :data="groups"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange">
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
          prop="group"
          label="告警组"
          width="180">
        </el-table-column>
        <el-table-column
          prop="number"
          label="告警电话">
        </el-table-column>
        <el-table-column label="操作" align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="updateopen(scope.row.pk, scope.row.group, scope.row.number)" type="text">编辑</el-button>
            <el-button size="mini" slot="reference" type="text" @click="delsingle(scope.row.pk)">删除</el-button>
          </template>
        </el-table-column>

        <el-table-column type="expand">
         <template slot-scope="props">
          <el-form label-position="right" inline class="demo-table-expand">
            <el-form-item label="告警组">
              <span>{{ props.row.group }}</span>
            </el-form-item>
            <el-form-item label="告警电话">
              <span>{{ props.row.number }}</span>
            </el-form-item>
          </el-form>
         </template>
        </el-table-column>

      </el-table>
  <div class="box">
     <el-button size="small" type="danger" @click="open(multipleSelection)">删除</el-button>
  </div>

  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import ElementUI from 'element-ui';


export default{
  data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        multipleSelection: [],
        updategroup: "",
        visible: false,
      }
    },
    computed: {
      ...mapState({
        groups: state => state.messages.groups
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
    ...mapActions('messages', ['addGroups','deleteGroups','searchGroups','mulGroupsdelete']),
    indexMethod(index) {
      return index;
    },

    handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },

    open(item) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('messages/mulGroupsdelete', item)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    delsingle(item) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('messages/deleteGroups', item)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    updateopen(item, group, number) {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'textarea',
        inputValue: number,
      }).then(({ value }) => {
        let payload = {index:item, updatedate:{group:group, number:value}}
        this.$store.dispatch('messages/updateGroups', payload)
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }

    },
    created() {
    this.$store.dispatch('messages/getGroups');

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
  .box{
    display: flex;
    margin-top: 20px;
    justify-content:flex-end;
  }


  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>
