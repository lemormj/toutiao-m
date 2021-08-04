<template>
    <h1>{{msg}}</h1>
    <br>
    <table id='myTable'>
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>住址</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>王飒</td>
                <td>35</td>
                <td>洪山广场</td>
            </tr>
            <tr>
                <td>胡春丽</td>
                <td>32</td>
                <td>北京</td>
            </tr>
            <tr>
                <td>王红我的</td>
                <td>33</td>
                <td>北京朝阳</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="less">
#myTable{
    margin: 0px,auto;
    border: 1px;
}
</style>
