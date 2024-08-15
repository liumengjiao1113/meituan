<template>
  <div class="workcontent">
    <div class="worktitle">
      <h5 class="text">工作在美团</h5>
      <div class="textbg">MEITUAN</div>
    </div>
    <div class="work">
      <div class="workitem1">
        <div class="textwarp">
          <div class="texttitle">人才成长</div>
          <p class="textdesc">
            完整的方法论，多元的业务落地场景和顶尖的团队，帮助你在实践中学习，成为更好的自己！
          </p>
          <div class="buttonwrap">
            <routerLink to="/rencai">
              <button class="mtdbut">
                <span>了解详情</span>
              </button></routerLink
            >
          </div>
        </div>
      </div>
      <div class="workitem2">
        <div class="textwarp">
          <div class="texttitle">人文关怀</div>
          <p class="textdesc">时刻关心你的工作体验与生活状态，希望你的每一天都丰富而美好！</p>
          <div class="buttonwrap">
            <routerLink to="renwen">
              <button class="mtdbut">
                <span>了解详情</span>
              </button></routerLink
            >
          </div>
        </div>
      </div>
      <div class="workitem3">
        <div class="textwarp">
          <div class="texttitle">文化活动</div>
          <p class="textdesc">
            与你一起走过每个重要节日，一起庆祝你的每个人生里程碑，一起让生活更好！
          </p>
          <div class="buttonwrap">
            <routerLink to="wenhua">
              <button class="mtdbut">
                <span>了解详情</span>
              </button></routerLink
            >
          </div>
        </div>
      </div>
      <div class="workitem4">
        <div class="textwarp">
          <div class="texttitle">员工公益</div>
          <p class="textdesc">美团人相信，每个人都可以做一点好事，在工作中也有机会做公益。</p>
          <div class="buttonwrap">
            <routerLink to="/yuangong">
              <button class="mtdbut">
                <span>了解详情</span>
              </button></routerLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.workcontent {
  margin: auto;
  width: 1280px;
  min-width: 1280px;
}

.worktitle {
  margin: auto;
  width: 1280px;
  min-width: 1280px;
  margin-bottom: -120px;
  height: 200px;
  color: #000;
}

.text {
  margin: 0;
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #111925;
  line-height: 40px;
}

.textbg {
  opacity: 0.5;
  font-family: MEITUANTYPE-BOLD;
  font-size: 190px;
  line-height: 200px;
  margin-top: -35px;
  background: linear-gradient(to bottom, #eff0f1, #f7f8f9);
  background-clip: text;
  color: transparent;
}

.work {
  position: relative;
  display: flex;
  user-select: none;
  justify-content: space-between;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  font-size: 0;
}

.workitem1,
.workitem2,
.workitem3,
.workitem4 {
  width: 296px;
  height: 464px;
  overflow: hidden;
  transition: all 0.5s;
  background-size: 296px 464px;
  background-position: center;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.workitem1 {
  background-image: url(../../assets/workimage1.png);
}

.workitem2 {
  background-image: url(../../assets/workimage2.png);
}

.workitem3 {
  background-image: url(../../assets/activity.png);
}

.workitem4 {
  background-image: url(../../assets/welfare.png);
}

.textwarp {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin-top: 400px;
  width: 100%;
  transition: all 0.5s;
  padding: 0 32px;
  width: 232px;
}

.texttitle {
  height: 96px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 600;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #fff;
  line-height: 32px;
}

.workitem1:hover .textdesc {
  display: block;
}
.workitem2:hover .textdesc {
  display: block;
}
.workitem3:hover .textdesc {
  display: block;
}
.workitem4:hover .textdesc {
  display: block;
}
.workitem1:hover .buttonwrap {
  display: block;
}
.workitem2:hover .buttonwrap {
  display: block;
}
.workitem3:hover .buttonwrap {
  display: block;
}
.workitem4:hover .buttonwrap {
  display: block;
}

.textdesc {
  display: none;
  margin-top: 12px;
  font-weight: 400;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 22px;
  padding: 0 4px;
}

.buttonwrap {
  text-align: center;
  display: none;
  margin: 28px 0;
}

p {
  margin: 0;
  padding: 0;
  word-break: break-all;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.mtdbut {
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
  position: relative;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  background: #ffd000;
  border-radius: 6px;
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #000;
  line-height: 22px;
  border-color: #ffd100;
  display: inline-block;
}

.mtdbut {
  display: inline-block;
  outline: 0;
  vertical-align: top;
}
</style>
