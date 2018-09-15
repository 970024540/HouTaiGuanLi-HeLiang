<template>
	<div>
		 <el-select style='margin-top:20px;' v-model="value" placeholder="请选择筛选条件">
			<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value">
			</el-option>
		</el-select>
		<el-table
			:data="tableData"
			border
			style="width: 100%;margin-top:20px;">
			<el-table-column
				prop="id"
				label="编号">
			</el-table-column>
			<el-table-column
				prop="table"
				label="桌号">
			</el-table-column>
			<el-table-column
				prop="vipId"
				label="会员编号">
			</el-table-column>
			<el-table-column
				prop="foodId"
				label="菜品编号">
			</el-table-column>
			<el-table-column
				prop="quanTity"
				label="数量">
			</el-table-column>
			<el-table-column
				prop="totalPrice"
				label="价格">
			</el-table-column>
			<el-table-column
				prop='orderDate'
				label="日期">
			</el-table-column>
			<el-table-column
			label="操作"
			width="280">
			<template slot-scope="scope">
				<el-radio-group v-model="scope.row.status">
					<el-radio label="initial">待确认</el-radio>
					<el-radio label="making">制作中</el-radio>
					<el-radio label="finished">已结单</el-radio>
				</el-radio-group>
			</template>
			</el-table-column>

		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				options:[
					{
						value:'initial',
						label:'未完成'
					},
					{
						value:'making',
						label:'进行中'
					},
					{
						value:'finished',
						label:'已完成'
					}
				],
				tableData:[
					{
						id:'1',
						table:'1',
						vipId:'65',
						foodId:'27',
						quanTity:'1',
						totalPrice:'18￥',
						orderDate:"2018/05/02",
						status:'initial',
					},
					{
						id:'2',
						table:'3',
						vipId:'21',
						foodId:'14',
						quanTity:'5',
						totalPrice:'15￥',
						orderDate:"2018/05/02",
						status:'initial',
					}
				]
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>
