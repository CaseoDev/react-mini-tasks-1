import './App.css';

function App() {

  const correctAnswers = {
    answer1: "Berlin",
    answer2: "Cheetah",
    answer3: "Kangchenjunga",
    answer4: "Waikato"
  }

  return (
    <div className="App">
      
      <h2>Welcome to the Quiz! please choose the correct answer wisely.</h2>

      <section className='question-box' id='question-box1'>
      <p>Capital City of Germany</p>
      <label htmlFor="answer1-1">Berlin<input name='question1' id='answer1-1' type="radio" /></label>
      <label htmlFor="answer2-1">Paris<input name='question1' id='answer2-1' type="radio" /></label>
      <label htmlFor="answer3-1">London<input  name='question1' id='answer3-1' type="radio" /></label>
      <label htmlFor="answer4-1">Hamburg<input  name='question1' id='answer4-1' type="radio" /></label>
      </section>
      
      <button>Next Page</button>

      <section className='question-box' id='question-box2'>
      <p>Fastest Animal on Earth</p>
      <label htmlFor="answer1-2">Lion<input name='question2' type="radio" id='answer1-2' /></label>
      <label htmlFor="answer2-2">Cheetah<input name='question2' type="radio" id='answer2-2' /></label>
      <label htmlFor="answer3-2">Elephant<input  name='question2' type="radio" id='answer3-2' /></label>
      <label htmlFor="answer4-2">Giraffe<input  name='question2' type="radio" id='answer4-2' /></label>
      </section>
      
      <section className='question-box' id='question-box3'>
      <p>Highest Mountain in India</p>
      <label htmlFor="answer1-3">Zugspitze<input name='question2' type="radio" id='answer1-3' /></label>
      <label htmlFor="answer2-3">Kangchenjunga<input name='question2' type="radio" id='answer2-3' /></label>
      <label htmlFor="answer3-3">Nanda Devi<input  name='question2' type="radio" id='answer3-3' /></label>
      <label htmlFor="answer4-3">Jongson Peak<input  name='question2' type="radio" id='answer4-3' /></label>
      </section>


      <section className='question-box' id='question-box3'>
      <p>Longest River in New Zealand</p>
      <label htmlFor="answer1-4">Nelson<input name='question2' type="radio" id='answer1-4' /></label>
      <label htmlFor="answer2-4">Mackenzie<input name='question2' type="radio" id='answer2-4' /></label>
      <label htmlFor="answer3-4">Waikato<input  name='question2' type="radio" id='answer3-4' /></label>
      <label htmlFor="answer4-4">Tongariro<input  name='question2' type="radio" id='answer4-4' /></label>
      </section>



    </div>
  );
}

export default App;
