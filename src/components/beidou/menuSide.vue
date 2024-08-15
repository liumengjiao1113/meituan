<template>
  <div>
    <el-row>
      <el-menu class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <h3>所在城市</h3>
          </template>

          <div class="city">
            <div class="citylist" v-for="(cityRow, rowIndex) in cities" :key="rowIndex">
              <div
                class="chengshi"
                v-for="(city, cityIndex) in cityRow"
                :key="cityIndex"
                :class="{ active: activeCity.includes(city) }"
                @click="xuanze(city)"
              >
                {{ city }}
              </div>
            </div>
          </div>
        </el-sub-menu>
      </el-menu>
      <el-menu class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <h3>职位类别</h3>
          </template>
          <el-sub-menu index="1-1">
            <template #title>技术类</template>
            <el-menu-item index="1-1-1"><div></div></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-2">
            <template #title>产品类</template>
            <el-menu-item index="1-2-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-3">
            <template #title> 商业分析类</template>
            <el-menu-item index="1-3-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-4">
            <template #title> 零售类</template>
            <el-menu-item index="1-4-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-5">
            <template #title> 运营类</template>
            <el-menu-item index="1-5-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-6">
            <template #title> 设计类</template>
            <el-menu-item index="1-6-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-7">
            <template #title> 市场营销类</template>
            <el-menu-item index="1-7-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-8">
            <template #title> 职能类</template>
            <el-menu-item index="1-8-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-9">
            <template #title> 金融类</template>
            <el-menu-item index="1-9-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-10">
            <template #title>销售、客服与支持类</template>
            <el-menu-item index="1-10-1"></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-11">
            <template #title> 综合类</template>
            <el-menu-item index="1-11-1"></el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
      <el-menu class="el-menu-vertical-demo">
        <el-sub-menu index="2">
          <template #title>
            <h3>部门</h3>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCity: [],
      cities: [
        ['北京', '上海'],
        ['深圳', '成都'],
        ['香港', '利雅得'],
        ['广州', '武汉'],
        ['杭州', '西安'],
        ['重庆', '南京'],
        ['厦门', '郑州']
      ]
    }
  },
  methods: {
    xuanze(city) {
      const index = this.activeCity.indexOf(city)
      if (index > -1) {
        this.activeCity.splice(index, 1)
      } else {
        this.activeCity.push(city)
      }
      this.$emit('update:activeCity', [...this.activeCity])
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 400px;
}

.city {
  padding-top: 16px;
}
.citylist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.chengshi {
  width: 112px;
  height: 36px;
  margin-bottom: 12px;
  text-align: center;
  line-height: 36px;
  background: #f4f5f7;
  border-radius: 6px;
  font-weight: 400;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  cursor: pointer;
}

.chengshi.active {
  font-weight: 600;
  background: #ffe366;
}
</style>
