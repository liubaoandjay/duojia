<template>
  <div class="wrap">
      <header class="header">
         <h3>多家网</h3>
         <input type="text" placeholder="热门搜索">
      </header>
      <main class="main">
          <router-view/>
      </main>
      <footer class="footer">
          <ul class="list">
              <router-link to="/home/myHome" tag="li">首页</router-link>
              <router-link to="/home/my" tag="li">我的</router-link>
          </ul>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction:column;
        .header{
            width: 100%;
            height: 60px;
        }
        .main{
            flex:1
        }
        .footer{
            width: 100%;
            height: 40px;
            .list{
                width: 100%;
                height: 40px;
                display: flex;
                li{
                    width: 50%;
                    text-align: center;
                }
            }
        }
    }
</style>