<template>
  <div class="poslist">
    <RouterLink to="/xiangqing">
      <div class="content">
        <div class="listitem">
          <div class="job">
            <div class="jodtitle">
              <div class="jobname">【北斗】大模型机器学习引擎工程师</div>
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
                <span>北京市、上海市</span>
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
              <div class="desc hidden-ellipsis">工作城市可选北京、上海</div>
              <div class="desc hidden-ellipsis">
                1.
                基座大模型预训练，包括但不限于不同规模、不同结构的语言模型和多模态模型的数据准备和优化、模型预训练、训练加速与框架优化等；
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script></script>

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
