const Question = (props) => {
  return (
    <section className="question-box" id="question-box1">
      <p>{props.question}</p>
      <label htmlFor={props.questionId}>
        {props.answer1}
        <input
          name={props.questionNum}
          id={props.questionId1}
          value={props.answer1}
          type="radio"
        />
      </label>

      <label htmlFor={props.questionId}>
        {props.answer2}
        <input
          name={props.questionNum}
          id={props.questionId2}
          value={props.answer2}
          type="radio"
        />
      </label>
      <label htmlFor={props.questionId}>
        {props.answer3}
        <input
          name={props.questionNum}
          id={props.questionId3}
          value={props.answer3}
          type="radio"
        />
      </label>
      <label htmlFor={props.questionId}>
        {props.answer4}
        <input
          name={props.questionNum}
          id={props.questionId4}
          value={props.answer4}
          type="radio"
        />
      </label>
    </section>
  );
};

export default Question;
