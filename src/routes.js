import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import formOne from './views/nav1/FormOne.vue'
import user from './views/nav1/user.vue'

import chefUser from './views/nav1/chefUser.vue'
import managerUser from './views/nav1/managerUser.vue'

import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '餐厅管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            
            { path: '/formOne', component: formOne, name: '菜单管理1' },
            { path: '/form', component: Form, name: '菜单管理2' },
            { path: '/user', component: user, name: '余额管理' },

            { path: '/chefUser', component: chefUser, name: '后厨管理' },
            { path: '/table', component: Table, name: '服务员管理' },
            { path: '/managerUser', component: managerUser, name: '管理员管理' },
            
        ]
    },
    {
        path: '/',
        component: Home,
        name: '收银',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        leaf:true,
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '打印机设置' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '优惠卷管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;