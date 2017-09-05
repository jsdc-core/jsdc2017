(function($) {
  var botui = new BotUI('jobs');
  var companys = [
    {
      text: '摩速科技',
      value: 'mlytics',
      jobs: [
        {
          text: 'Software Engineer (Frontend)',
          value: 'F2E',
          intro: ['薪資：能力 + 態度 = 40k ~ 能力越好越高', '條件：5 年開發經驗佳，會 React、Vue、Angular 其中一項且有與設計師溝通經驗者優先考量', '能獨自管理開發項目、能辨別開發項目的難易度'],
          url: 'https://github.com/jsdc-core/jsdc2017/issues/4'
        },
      ]
    },
  ];
  var jobCount = 0;
  companys.forEach(function(company){
    jobCount += company.jobs.length;
  });

  var currentData = {
    company: '',
    job: '',
  }

  jobsBot();
  window.jobsBot = jobsBot;

  function jobsBot(){
    botui.message.removeAll();
    botui.message.add({
      content: '哈囉！我是 JSDC 徵才 Bot'
    }).then(function () {

      botui.message.add({
        loading: true,
        delay: 500,
        content: '今年有 '+ companys.length +' 家公司，總計提供 '+ jobCount +' 個職缺！'
      });
      botui.message.add({
        delay: 500,
        content: '想了解有哪些公司呢？'
      });

      return botui.action.button({
        delay: 500,
        action: companys
      });
    }).then(function(result){
      currentData.company = result.value;
      currentData.job = '';

      if (result.jobs.length > 0) {
        botui.message.add({
          content: result.text + ' 有 ' + result.jobs.length + ' 個職缺，你想要了解哪一個職缺？'
        });

        return botui.action.button({
          delay: 500,
          action: result.jobs
        });
      } else {
        currentData.company = '';
        currentData.job = '';

        return botui.message.add({
          content: '查詢職缺發生錯誤，請與我們聯絡 hq@jsdc.tw'
        });
      }
    }).then(function(result){
      if (typeof result === 'number') {
        return botui.message.add({
          delay: 10000,
          content: 'JSDC 徵才 Bot 將在 10 秒後重新載入'
        });
      } else {
        result.intro.forEach(function(data){
          botui.message.add({
            delay: 0,
            content: data
          });
        });
        return botui.message.add({
          // type: 'embed',
          delay: 1000,
          content: '<i class="fa fa-hand-o-right" style="marign-bottom:20px;"><a href="'+result.url+'" target="_blank"> 詳細職缺資訊</a><br><br><br><i class="fa fa-hand-o-right" style="marign-bottom:20px;"><a href="javascript:jobsBot();">了解其他職缺</a>'
        });
      }
    });
  }
})(jQuery);
