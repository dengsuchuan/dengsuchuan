const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

let monthNames = ["1","2","3","4", "5","6","7","8", "9", "10","11","12"];

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# 嗨，你好啊! <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="35" />

![](https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966)

### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="45" /> About Me:
- 🏦 我是一名全栈开发工程师，我来自四川，目前在广州工作 
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 📝 我有自己的技术博客，但我不经常更新 [博客](https://succes.cool/)
- 💻 我使用这些语言 **.php**, **.js**, **.py**,  **.sql**, **.go**, **.java**, **.c**
- 📖 我正在学习嵌入式开发，使用**ESP266** 或 **ESP32** 实现一些有趣的想法
- 👯 我有一位很爱我的妻子
- 🧑‍💻 我使用的技术 :

<p align="center">
      <img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="php" width="65" height="65"/> 
       <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" width="65" height="65"/> 
      <img src="https://www.vectorlogo.zone/logos/golang/golang-vertical.svg" alt="golang" width="65" height="65"/> 
      <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="java" width="65" height="65"/> 
      <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Nodejs" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg" alt="raspberrypi" width="55" height="55"/> 
      <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="GIT" width="55" height="55"/> 
      <img src="https://www.vectorlogo.zone/logos/docker/docker-official.svg" alt="docker" width="60" height="50"/>
      <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mysql" width="45" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" width="45" height="55"/>
</p>

---
### <img src='https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47x2g034i9pzwtzzsd3xgg2w9nr94t4tflbbgo3008&rid=giphy.gif' width='25' /> My Github Stats:
![Apoorv's github stats](https://github-readme-stats.vercel.app/api?username=dengsuchuan&show_icons=true&title_color=ffc857&icon_color=8ac926&text_color=daf7dc&bg_color=151515&hide=issues&count_private=true&include_all_commits=true&locale=cn)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=dengsuchuan&layout=compact&text_color=daf7dc&bg_color=151515&locale=cn)](https://github.com/anuraghazra/github-readme-stats)
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=dengsuchuan&theme=dark&locale=zh)](https://git.io/streak-stats)

<!--START_SECTION:waka-->

<!--END_SECTION:waka-->

⏳ **今年已经过了** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getFullYear()+'-'+(new Date().getDate())+'-'+ monthNames[new Date().getMonth()]}

---

### <img src = "https://media1.giphy.com/media/JZ40cnfnN11KycrvMF/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width = '23' /> 写过的博客:
<!-- BLOG-POST-LIST:START -->
- [EduSoho开发指南 - 数据库](https://www.succes.cool/index.php/archives/23/)
- [Python 通过图片查找在屏幕中的位置并模拟点击](https://www.succes.cool/index.php/archives/16/)
- [PyWinAuto学习推荐博客](https://www.succes.cool/index.php/archives/9/)
- [Docker-Ubuntu20.04-Xfce4桌面环境配置](https://www.succes.cool/index.php/archives/32/)
<!-- BLOG-POST-LIST:END -->

---

### <img alt="GIF" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/hmm.gif" width="20" /> 一些大佬说过的话:
<a href="https://github.com/marketplace/actions/quote-readme">
<!--STARTS_HERE_QUOTE_README-->
• <i>“I’m not one of those who think Bill Gates is the devil.  I simply suspect that if Microsoft ever met up with the devil, it wouldn’t need an interpreter.”— Nicholas Petreley   </i>
<!--ENDS_HERE_QUOTE_README-->
</a>

---

### <img align ='center' src='https://media2.giphy.com/media/UQDSBzfyiBKvgFcSTw/giphy.gif?cid=ecf05e47p3cd513axbek3f56ti3jzizq8hincw20jauyyfyw&rid=giphy.gif' width ='29' /> 笑口常开，好彩自然来:
<img src="https://readme-jokes.vercel.app/api" alt="Error fetching resource, Refresh again to view Jokes Card" width = '11000' />
`
console.log(readme)
