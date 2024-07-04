import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const Quiz = ({
  questions,
  userName,
  selectedOption,
  customImageUrl,
  selectedCategory,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isCheatingDetected, setIsCheatingDetected] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !showScore) {
        setIsCheatingDetected(true);
        setShowScore(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [showScore]);

  useEffect(() => {
    let interval;
    if (!showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [showScore]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const downloadCertificate = () => {
    const resultSection = document.getElementById("result-section");
    html2canvas(resultSection).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "certificate.png";
      link.click();
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[rgb(0,0,30)]">
      <div className="text-white text-xl font-bold mb-4 animate-gradient">
        Time: {formatTime(timer)}
      </div>
      {showScore ? (
        isCheatingDetected ? (
          <div>
            <div className="flex gap-4 md:flex-row flex-col">
              <p className="text-2xl font-bold">Hey, you can't cheat😠</p>
              <p className="text-gray-300">
                I'm watching you, you can't change Tab during quiz.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                window.location.reload();
              }}
              className="bg-slate-800 px-6 py-2 rounded-lg mt-2 hover:bg-slate-900"
            >
              Restart
            </button>
          </div>
        ) : (
            <>
          <div
            id="result-section"
            className="   rounded shadow-md card-download"
          >
            <div  className="bg-[rgba(0,0,255,0.3)] p-8 py-16 text-center" >
            <p className="text-2xl font-bold text-center md:text-wrap">
              {score >= 3
                ? "Congratulations🏆good command on skills"
                : "Sad🥹, You should work on your skills"}
            </p>
            <div className="flex gap-4 md:gap-[85px] mt-5">
              {selectedOption !== "Custom" && (
                <img
                  src={`https://avatar.iran.liara.run/public/${selectedOption}?username=${userName}`}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              )}
              {selectedOption === "Custom" && customImageUrl && (
                <img
                  src={customImageUrl}
                  alt="your provided url not working"
                  className="w-10 h-10 rounded-full"
                />
              )}
              <p className="text-xl font-bold text-center ">
                {userName}, you scored {score} out of {questions.length}
              </p>
            </div>
            <p>Your selected topic was {selectedCategory}</p>
            </div>
          </div>
          <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          className="bg-slate-800 px-6 py-2 rounded-lg mt-4 md:mt-2 hover:bg-slate-900"
        >
          Restart
        </button>
        </>
        )
      ) : (
        <div className="bg-[rgba(0,0,80,0.3)] p-8 rounded shadow-xl ">
          <div className="mb-6">
            <div className="text-lg font-medium">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="text-2xl font-semibold mt-4">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
                className="bg-[rgba(0,0,200,0.3)] text-white p-2 rounded md:hover:bg-blue-700 transition outline-none"
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
