import React, { Component } from "react";
import questions from "./questions";

class QCM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      score: 0,
    };
  }

  handleClick = (question, reponse, index) => {
    let questions = this.state.questions.slice();
    questions.splice(index, 1);

    this.setState({
      questions: questions
    });
    if (reponse == question.bonneReponse) {
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      this.setState({
        score: this.state.score - 1,
      });
    }
  };

  render() {
    let fontSize =
      20 + this.state.score * 10 > 0 ? 20 + this.state.score * 10 : 5;
    return (
      <div>
        <h2
          style={{
            color: this.state.score > 0 ? "green" : "red",
            fontSize: fontSize + "px",
          }}
        >
          Score : {this.state.score}
        </h2>
        <div>
          {this.state.questions.map((question, index) => {
            return (
              <div key={index}>
                {question.contenu}
                <br></br>
                {question.reponsesPossibles.map((reponse, i) => {
                  return (
                    <button
                      onClick={() => this.handleClick(question, reponse, index)}
                    >
                      {reponse}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default QCM;
