var CONFIG={
  //公司性质
  cpNature:['代理公司','制作公司','游戏公司','文化类公司','其他公司','直接客户','FreeLance','音乐公司'],
  cpBackground:['4A','北京','其他国','广州','厦门','杭州','香港','上海','上海其他国','中国其他城市','上海香港','上海台湾','台湾'],
  //背景
  cpBranch:['上海同步'],
  //供应方里面类型
  cpType:['录音室','乐团','配音员','歌手','录音师','劳务','乐手','作曲师','游戏音效师','版权音乐'],
  //我的工作单状态
  myWorkState:['录入','作业','结案','作废待审','作废'],
  //业务性质-录入工作单
  businessEnum:{'ad':'广告','game':'游戏','mv':'影视剧/舞台剧','record':'唱片','scene':'现场','authorize':'播放授权','copyright':'版权交易','other':'其他'},
  business:{
    ad:['TVC','资料片','电台广告','企业歌曲','微电影','网络广告','微信','彩铃','手机APP','其他广告','电影广告','MV'],//广告
    game:['网络游戏','单机游戏','手机游戏'],//游戏
    mv:['电视剧','音乐剧','话剧','舞剧','其他居剧种','电影'],// 影视剧/舞台剧
    record:['歌手专辑','休闲音乐','其他唱片'], //唱片
    scene:['晚会','展会','商业场所','公共场所'], //现场
    authorize:['电台电视网络','商业场所','公共场所','综艺节目'], //播放授权
    copyright:['广告','影视','游戏','手机'], //版权交易
    other:['音效','其他'] //其他
  },
  workNature:['作曲','编曲','AV录音混音','AV录音','AV混音','AUDIO录音','AUDIO录音混音','AUDIO混音','音乐授权','选曲','版权代理','其他','音效'],
  //身份-录入工作单第二部
  identity:['制片','监制','导演','老板'],
  //报价分类
  offerCategory:['作曲','歌手演唱','作曲退稿','jingle制作','jingle歌手演唱','选曲','录音混音','国语配音','广州制作费','粤语混音','粤语演员','北京音棚制作费','增值税发票税收'],

  //排班类别
  schedulingCategory:['ok','修改','前期录音','内部作曲','其他'],
  //排班语音
  pb_language:['国语','粤语','英语','其他语'],
  //排班新建身份
  pb_identity:['乐手','歌手','其他','国语配音','粤语配音','英语配音','其他配音','协力录音室','外部录音室'],
  // call_type:['导演','监制']
  //新建联系人里面类型
  addContactsType:['普通','应收款'],
  //应付款管理新建部门
  payable_department:['公司本部','作曲事务处','录音事务处'],
  //财务账号
  financial_account:['现金业务','嘉秝招行','品观浦发'],
  personnel_type:['制片总监','制片','制片部经理','录音总监','录音师','作曲师'],
  reimbursement:{
    state:["申请","以审","已发放"],
    cause:["工作","加班","出差","探亲","其他"]
  },
  wagesType:['录音提成','作曲提成','游戏音效提成','选曲提成','歌手演唱']
}