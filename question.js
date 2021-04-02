class Question {
    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput(" Your Name ");
      this.input2 = createInput("Your Answer");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.op1 = createElement('h4');
      this.op2 = createElement('h4');
      this.op3 = createElement('h4');
      this.op4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("MyQuiz Game");
      this.title.position(350, 0);
  
      this.question.html("What is the Chemical symbol for Sulphuric Acid?" );
      this.question.position(150, 80);
      this.op1.html("1. H2SO3");
      this.op1.position(150,100);
      this.op2.html("2. HSO4");
      this.op2.position(150,120);
      this.op3.html("3. H2SO4");
      this.op3.position(150,140);
      this.op4.html("4. HSO2");
      this.op4.position(150,160);
      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.button.position(290, 300);
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  