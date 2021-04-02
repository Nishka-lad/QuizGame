class Quiz {
  constructor(){}
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   start(){
    if(gameState === 0){
      contestant = new Contestant();
        contestant.getCount();
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    Contestant.getcontestantInfo();
    if(allcontestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

      for(var plr in allcontestants){
        debugger;
        var correctAns = "3";
        if (correctAns === allcontestants[plr].answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        text(allcontestants[plr].name + ": " + allcontestants[plr].answer, 250,display_Answers)
      }
    }
  }
}