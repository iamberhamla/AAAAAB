const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log("我準備好了！")
})

bot.on('message', msg => {
    if(msg.content == "嗨你好"){
        msg.reply("你好我叫阿杰，大家都叫我杰哥")
    }
})
bot.on('message', msg => {
    if(msg.content == "你是不是俊燁"){
        msg.reply("我是阿杰啦")
    }
})
bot.on('message', msg => {
    if(msg.content == "聽話"){
        msg.reply("讓我看看！")
    }
})
bot.on('message', msg => {
    if(msg.content == "王世堅"){
        msg.reply("大青蛙愛吹牛")
    }
})
bot.on('message', msg => {
    if(msg.content == "yo"){
        msg.reply("battle（滑倒")
    }
})
bot.on('message', msg => {
    if(msg.content == "馬保國"){
        msg.reply("閃電鞭")
    }
})
bot.on('message', msg => {
    if(msg.content == "巴嘎nono"){
        msg.reply("巴ㄙㄟ巴ㄙㄟ")
    }
})
bot.on('message', msg => {
    if(msg.content == "不要！"){
        msg.reply("（ㄆㄧㄚ")
    }
})
bot.on('message', msg => {
    if(msg.content == "潘志遠的名言"){
        msg.reply("我是潘志遠醫師，我信賴普拿疼")
    }
})
bot.on('message', msg => {
    if(msg.content == "豬育憨"){
        msg.reply("好胖，專業買爛車，鎵汞右眼瞎，宜牛中風癱，來跳陣頭囉")
    }
})
bot.on('message', msg => {
    if(msg.content == "1+1是多少"){
        msg.reply("我數學沒有很好，但我知道我家很大")
    }
})
bot.on('message', msg => {
    if(msg.content == "木林妹妹"){
        msg.reply("木榮哥哥")
    }
})
bot.on('message', msg => {
    if(msg.content == "木榮哥哥！"){
        msg.reply("木林妹妹！")
    }
})
bot.on('message', msg => {
    if(msg.content == "掰掰"){
        msg.reply("下次再來我家玩啊ㄅㄅ")
    }
})
bot.on('message', msg => {
    if(msg.content == "阿韋"){
        msg.reply("夠勁兒")
    }
})
bot.on('message', msg => {
    if(msg.content == "現在放棄的話，暑假就開始囉"){
        msg.reply("我放棄 放暑假囉")
    }
})
bot.on('message', msg => {
    if(msg.content == "溥儀牛的本名"){
        msg.reply("混沌暗黑力量錫箔鉛球斯文豪氏攀木蜥蜴虛晃一波黑闇大法師紅寶石溥儀牛Pro Max 512G（完全進化型態）")
    }
})
bot.on('message', msg => {
    if(msg.content == "育安扮女裝"){
        msg.reply("有前途啊")
    }
})
bot.on('message', msg => {
    if(msg.content == "母哈哈哈哈哈"){
        msg.reply("母哈哈哈哈哈～～想要好康的嗎")
    }
})
bot.on('message', msg => {
    if(msg.content == "中華民國 在心中"){
        msg.reply("台北的未來 在丁守中")
    }
})
bot.on('message', msg => {
    if(msg.content == "台北的未來"){
        msg.reply("在丁守中")
    }
})
bot.on('message', msg => {
    if(msg.content == "好無聊喔"){
        msg.reply("我房裡有些好康的喔")
    }
})
bot.on('message', msg => {
    if(msg.content == "臭竹"){
        msg.reply("好臭")
    }
})


  

bot.login("ODYwNzYwNjU2MzQ5MjMzMTUy.YN_71A.f1lU5pwO56N8fQQlohTUZmvWUqI")
