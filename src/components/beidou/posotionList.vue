<template>
  <div class="planjob">
    <div v-for="job in activejobs" :key="job.jobname" class="poslist">
      <RouterLink to="/xiangqing">
        <div class="content">
          <div class="listitem">
            <div class="job">
              <div class="jobtitle">
                <div class="jobname">{{ job.jobname }}</div>
              </div>
              <div class="linebox">
                <div class="boxitem">
                  <i class=""
                    ><el-icon><Reading /></el-icon
                  ></i>
                  <span>应届</span>
                </div>
                <div class="boxitem">
                  <i
                    ><el-icon><Location /></el-icon
                  ></i>
                  <span>{{ job.location }}</span>
                </div>
                <div class="boxitem">
                  <i
                    ><el-icon><Clock /></el-icon
                  ></i>
                  <span> 更新于2024/07/25</span>
                </div>
              </div>
              <div class="posduty">
                <div class="dutyname">岗位职责</div>
                <div class="desc hidden-ellipsis">{{ job.duty }}</div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeCity: { type: Array, default: () => [] },

    jobs: { type: Array, default: () => [] }
  },
  computed: {
    activejobs() {
      if (!Array.isArray(this.activeCity)) {
        return this.jobs
      }
      if (this.activeCity.length === 0) {
        return this.jobs
      }
      return this.jobs.filter((job) => this.activeCity.some((city) => job.location.includes(city)))
    },
    jobcount() {
      return this.activejobs.length
    }
  },
  watch: {
    activejobs() {
      this.$emit('updatecount', this.jobcount)
    }
  }
}
</script>

<style scoped>
.poslist {
  width: 988px;
  padding: 28px 0 0 28px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  font-family: PingFangSC-Regular;
  border-radius: 16px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.poslist:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
}

.content {
  display: flex;
  padding: 0 28px 27px 0;
}

.listitem {
  width: 988px;
  padding: 28px 0 0 28px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  font-family: PingFangSC-Regular;
  border-radius: 16px;
}

.job {
  flex: 1;
  overflow: hidden;
}

.jobtitle {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
}

.jobname {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  max-width: 700px;
  word-break: break-all;
  font-family: PingFangSC-Medium;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}
.linebox {
  padding: 12px 0;
  display: flex;
}

.boxitem {
  display: flex;
  align-items: center;
  opacity: 0.7;
  padding-left: 16px;
}

.boxitem span {
  margin-left: 4px;
}

.dutyname {
  padding: 4px 0;
  font-weight: 600;
  text-align: justify;
  font-family: PingFangSC-Medium;
}

.desc {
  max-width: 770px;
  padding-top: 8px;
  word-break: break-all;
  color: rgba(0, 0, 0, 0.7);
}

.hidden-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}
a {
  all: unset;
}
</style>
