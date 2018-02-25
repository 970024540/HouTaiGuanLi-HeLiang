<template>
  <div>
       <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="菜品" name="first">
                <div>
                    <div>
                        类别:
                        <el-select v-model="foodStyleValue" placeholder="菜系选择">
                            <el-option
                            v-for="item in tableData3"
                            :key="item.value"
                            :label="item.date"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input style='width:400px;' v-model="addFoodStyle" placeholder="菜系添加"></el-input> 
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :file-list="fileList2"
                        list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                       
                    </div>
                    <div style='margin:20px 0px;'>
                        时间:
                        <el-time-picker
                            v-model="startTime"
                            :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点">
                        </el-time-picker>
                        &nbsp;至&nbsp;
                        <el-time-picker
                            arrow-control
                            v-model="endTime"
                            :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点">
                        </el-time-picker>
                        <el-input style='width:150px;' v-model="jinge" placeholder="单价金额"></el-input>
                        <el-input style='width:150px;' v-model="jingeYou" placeholder="优惠价"></el-input>
                        <el-button style='margin-left:20px;' type="warning">添加</el-button>
                    </div>
                    <div style='margin-top:20px;'>
                        <el-table
                            ref="multipleTable"
                            :data="tableData4"
                            tooltip-effect="dark"
                            style="width: 100%">
                            <el-table-column
                            label="菜系名称"
                            prop="date"
                            width="300">
                            </el-table-column>
                            <el-table-column
                            label="单价金额"
                            prop="jinge"
                            width="220">
                            </el-table-column>
                            <el-table-column
                            label="单位"
                            prop="danwei"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            label="已售数量"
                            prop="Number"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            label="图"
                            prop="img"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            label="操作"
                            >
                            <template slot-scope="scope">
                                <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">
                                    查看
                                </el-button>
                                <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">
                                    售空
                                </el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div style='float:right;margin-top:20px;'>
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3"
                        :page-size="10"
                        layout="prev, pager, next, jumper"
                        :total="50">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="菜系" name="second">
                <el-input style='width:400px;' v-model="addFoodStyle" placeholder="菜系添加"></el-input>
                <el-button style='margin-left:20px;' type="warning">添加</el-button>
                <div style='margin-top:20px;'>
                     <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                        type="selection">
                        </el-table-column>
                        <el-table-column
                        label="菜系名称"
                        prop="date"
                        width="750">
                        
                        </el-table-column>
                        <el-table-column
                        label="操作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">
                                删除
                            </el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
  </div>
</template>
<style scoped>
    .upload-demo{
        width:400px;
        float:right;
    }
</style>

<script>
export default {
  data(){
      return{
          fileList2:[],
          startTime:'',
          endTime:'',
          activeName:"first",
          jinge:'',
          jingeYou:'',
          addFoodStyle:'',
          foodStyleValue:'',
          tableData3: [
            {
            date: '烧鹅',
            value:'1'
            }, 
            {
            date: '西瓜',
            value:'2'
            }
            ],
            tableData4:[
                {
                    date:'鱼香肉丝',
                    jinge:'$119',
                    danwei:'份',
                    Number:'2',
                    img:'fasfas'
                },
                {
                    date:'鱼香肉丝',
                    jinge:'$119',
                    danwei:'份',
                    Number:'2',
                    img:'fasfas'
                },
                {
                    date:'鱼香肉丝',
                    jinge:'$119',
                    danwei:'份',
                    Number:'2',
                    img:'fasfas'
                },
                {
                    date:'鱼香肉丝',
                    jinge:'$119',
                    danwei:'份',
                    Number:'2',
                    img:'fasfas'
                }
            ],
            currentPage3:5
      }
  },
  methods:{
      handleClick(val,path){
        //   debugger
      },
      handleSelectionChange(){

      },
      handleEdit(index,row){//点击查看

      },
      handleDelete(index,row){//点击售空

      },
      handleSizeChange(val){//每页几条

      },
      handleCurrentChange(val){//当前页

      }
  }
}
</script>
