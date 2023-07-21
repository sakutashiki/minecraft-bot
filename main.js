bot.once('spawn', function () {
    bot.chat('Я снова вернулся в ваш грязный мир ;>')
})

bot.on('chat', function (username,message){
    if(username === "Frosty") return;
    if(message === "Привет Frosty" || message === "Привет фрости" || message === "привет фрости" || message === "Привет Фрости" && username === "yuun1sh") {
        setTimeout( () => bot.chat(username + ", привет! Как ваши дела?"), 3000)
    } else {
        if(message !== "Привет Frosty" || message !== "Привет фрости" || message !== "привет фрости" || message !== "Привет Фрости") return;
        setTimeout( () => bot.chat(username + ", я тебя не знаю....."), 3000)
    }
})

bot.on('chat', function (username, message) {
    if(username == "Frosy") return;
    if (message === "отдай" || message === "верни" && username === "yuun1sh"){
        function tossNext(){
            if(bot.inventory.items().length === 0) {
                console.log(username + ", у меня ничего нет")
            } else {
              const items = bot.inventory.items()[0]
            bot.tossStack(items,tossNext)  
            }   
        }
        tossNext()
    }
})

bot.on('chat', function (username, message) {
    if(username !== "yuun1sh") return;
    if(message === "Работать, огузок"){
        bot.chat('(')
    }
    if(message === "За мной" || message === "за мной" || message === "пошли раб"){
        const player = bot.players[username]
        bot.pathfinder.setGoal(new GoalFollow(player.entity, 1), true)
    }
    if(message === "ко мне"){
        const player = bot.players[username]
        bot.pathfinder.setGoal(new GoalNear(player.entity.position.x, player.entity.position.y, player.entity.position.z, 1))
    }
    if(message === "Остановись" || message === "будь здесь" || message === "остановись" || message === "стой"){
        bot.pathfinder.setGoal(null, 1)
    }
})