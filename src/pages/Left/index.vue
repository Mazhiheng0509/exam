<template>
  <div class="left">
    <dl v-for="(item,index) in list" :key="index">
      <dt>
        <img :src="item.img" alt />
      </dt>
      <dd>
        <h3>{{item.title}}</h3>
        <p>{{item.info}}</p>
      </dd>
      <span>{{item.time}}</span>
    </dl>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios({ url: "/api/getData" }).then(res => {
      this.list = res.data.list;
    });
  }
};
</script>

<style>
.left{
  margin-top: 15px;
}
dl{
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 5px 0;
}
dl dt img{
  border-radius: 50%
}
dl dd{
  line-height: 35px;
  text-align: left
}
dl dd p{
  color: #666;
  font-size: 14px;
}
dl dd h3{
  font-size: 20px;
}
dl span{
  color: #666;
  font-weight: bold;
  font-size: 14px;
}
</style>