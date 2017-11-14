function doIt(){
    var month = document.getElementById("Month").value;
    var day = document.getElementById("Day").value;
    var today = new Date();
    var cm = today.getMonth();
    var cd = today.getDate();
    var name1 = document.getElementById("Name").value;
    var sign = determineSign(day, month);
    var name = printName(name1);
    var horoscope = printHoroscope(sign,cm,cd,month,day,name1,name);
    var image = getImage(sign);
    document.getElementById("Sign").innerHTML = sign;
    document.getElementById("image").innerHTML = image;
    document.getElementById("output").innerHTML =  horoscope;
}

function doDays(month){
    var mDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    var result = "";
    for(var i = 1; i<=mDays[month]; i++){
        result += "<option value ='"+i+"'>"+i+"</option>"
    }
    document.getElementById("Day").innerHTML = result;
}

function determineSign(day, month) {
    var zodiac = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    var last_day = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
}

function printName(name1){
    return "Hi " + name1 + ", your Horoscope is: ";
}

function printHoroscope(sign,cm,cd,month,day,name1,name){
    if (cm == month && cd == day){
        return "Happy Birthday " + name1 + "!  Today is your special day.  Take time off and enjoy yourself, treat yourself, you only get one Birthday a year!"
    }
    else {
        switch (sign) {
            case "Capricorn":
                return name + "Your imagination might soar into the wild blue yonder today. You may envision wonderful new plans for your future. Some money may be coming your way. There's the possibility of a pending raise. Let your imagination roam freely. Over the next day, make a list of your options. Weed out the unworkable ones. Don't rush to decide.";

            case "Aquarius":
                return name + "Your mind could be of service to others today. You've been doing very well for yourself, and you're thinking in terms of sharing your good fortune somehow. A friend may have ideas for groups that you could get involved with. Before you commit to anything, make sure you really want to do it. You don't want to be entrusted with a cause and then let others down.";

            case "Pisces":
                return name + "Career matters are probably going well for you, but you might be unsure if you want to continue along this track. You might consider other options, perhaps some you've always wanted to try but have never been in a position to do. Don't feel you have to decide now. You have plenty of time. Don't make a move until you're sure.";

            case "Aries":
                return name + "Are you planning to attend a lecture or workshop? This is a good day for it. Your mind and emotions are working together to bring insights your way. Your common sense is operating at a very high level, so this is also a good day to make practical decisions. Communication with those who share your interests should be both gratifying and enlightening.";

            case "Taurus":
                return name + "Inspiration and insights that come through dreams could give you the boost you need to get your career on track. You may have been kicking different ideas around for a while, but what you realize today could motivate you to act. Formulate a strategy before you begin. As long as you make the effort to stay focused, efficient, and practical, whatever you decide today might work.";

            case "Gemini":
                return name + "Communication with your romantic partner could be more psychic than verbal today, although the conversation should be heartfelt, honest, and gratifying. You'll share your feelings as well as ideas gained from reading. The subject of traveling together may come up. A stronger sense of unity and understanding could result. Make the most of it.";

            case "Cancer":
                return name + "Ideas for creative projects that might earn more money could buzz through your mind. There might be so many that you have to scramble to write them down so you don't forget any. Discussions with friends or your partner could give you even more ideas instead of paring down the list. Let them come for now. You can make sense of them later. What's important now is to get them in writing.";

            case "Leo":
                return name + "Romance is at the top of your priority list today. A deep conversation may take place with your partner, perhaps to sort out your feelings about the relationship. Other matters of interest to you both could come up, and this bodes well for your future. Don't give in to the temptation to point out your partner's faults. Just say quietly what it is that you need.";

            case "Virgo":
                return name + "Young visitors bring out the best in you today. Have you prepared some delicious food for your guests? When you want to, you can be a great host, keeping guests entertained and even enthralled. In return, they're thoroughly enjoyable company. This should be a happy interlude for you since you like being sociable. You may receive a welcome delivery some time during the day, too.";

            case "Libra":
                return name + "Today an organization dedicated to spiritual pursuits may open its doors in your neighborhood. This might be of special interest to you and your partner. You might want to go and check the place out. You could meet some interesting new people, hear about some fascinating ideas, and perhaps discover some new books. Be prepared for a fun evening.";

            case "Scorpio":
                return name + "Today you need to address financial issues. You may have to find a bit of extra money in your bank account or budget. Chances are this isn't a large sum, but enough to make a difference to you now. Take care of it and then settle down for a peaceful evening at home. You won't feel like going out, but you'll enjoy your evening.";

            case "Sagittarius":
                return name + "Good news may come today. Whatever it is should make you very happy and cause you to be too hyper to sit still. You'll probably want to take a quick walk around the neighborhood to work off some of the energy. This could put you in an optimistic space, looking forward to the future. Enjoy your evening.";
        }
    }
}


function getImage(sign){
    switch(sign){
        case "Capricorn":
            return "<img src='img/Cap.jpg'>";

        case "Aquarius":
            return "<img src='img/Aquarius.jpg'>";

        case "Pisces":
            return "<img src='img/Pisces.jpg'>";

        case "Aries":
            return "<img src='img/Aries.jpg'>";

        case "Taurus":
            return "<img src='img/Taurus.jpg'>";

        case "Gemini":
            return "<img src='img/Gemini.jpg'>";

        case "Cancer":
            return "<img src='img/Cancer.jpg'>";

        case "Leo":
            return "<img src='img/Leo.jpg'>";

        case "Virgo":
            return "<img src='img/Virgo.jpg'>";

        case "Libra":
            return "<img src='img/Libra.jpg'>";

        case "Scorpio":
            return "<img src='img/Scorpio.jpg'>";

        case "Sagittarius":
            return "<img src='img/Sag.jpg'>";
    }
}