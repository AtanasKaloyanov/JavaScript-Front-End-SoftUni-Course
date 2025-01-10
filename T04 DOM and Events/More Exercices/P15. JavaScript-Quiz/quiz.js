function solve() {
  // 1. Getting the needed eleemnts:
  let rightAnswers = 0;
  let answers = document.getElementsByClassName('quiz-answer');
  let answer1 = answers[0];
  let answer2 = answers[1];
  let answer3 = answers[2];
  let answer4 = answers[3];
  let answer5 = answers[4];
  let answer6 = answers[5];

  let seenQuestion = document.getElementsByClassName('question')[0];
  let hiddentQuestions = document.getElementsByClassName('question hidden');
  let hiddenQuestions1 = hiddentQuestions[0];
  let hiddenQuestions2 = hiddentQuestions[1];

  // 2. Adding click events:
  answer1.addEventListener('click', question1);
  answer2.addEventListener('click', question1);
  answer3.addEventListener('click', question2);
  answer4.addEventListener('click', question2);
  answer5.addEventListener('click', question3);
  answer6.addEventListener('click', question3);

  // 3. Functions describing:
  function question1(event) {
    let element = event.currentTarget;
    let elementContent = element.textContent;

    if (elementContent == 'onclick') {
      rightAnswers++;
    }
    
    seenQuestion.className = 'question hidden';
    hiddenQuestions1.className = 'question';
  }

  function question2(event) {
    let element = event.currentTarget;
    let elementContent = element.textContent;

    if (elementContent == 'JSON.stringify()') {
      rightAnswers++;
    }

    hiddenQuestions1.className = 'question hidden';
    hiddenQuestions2.className = 'question';
  }

  function question3(event) {
    let element = event.currentTarget;
    let elementContent = element.textContent;
    
    if (elementContent == 'A programming API for HTML and XML documents') {
      rightAnswers++;
    }

    hiddenQuestions2.className = 'question hidden';
    let result = document.getElementById('results');
  
    if (rightAnswers == 1) {
      result.textContent = 'You have 1 right answer';
    } else if (rightAnswers == 3) {
      result.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      result.textContent = `You have ${rightAnswers} right answers`;
    }
  }

}

/*

    <main>
        <h1>JavaScript Quiz</h1>
        <section class="question">
            <h2><span>Question #1:</span> Which event occurs when the user clicks on an HTML element?</h2>
            <ul class="quiz-step">
                <li class="quiz-answer">onclick</li>
                <li class="quiz-answer">onmouseclick</li>
            </ul>
        </section>
        <section class="question hidden">
            <h2><span>Question #2:</span> Which function converting JSON to string?</h2>
            <ul class="quiz-step">
                <li class="quiz-answer">JSON.toString()</li>
                <li class="quiz-answer">JSON.stringify()</li>
            </ul>
        </section>
        <section class="question hidden">
            <h2><span>Question #3:</span> What is DOM?</h2>
            <ul class="quiz-step">
                <li class="quiz-answer">A programming API for HTML and XML documents</li>
                <li class="quiz-answer">The DOM is your source HTML</li>
            </ul>
        </section>
        <div id="results"></div>
    </main>

*/