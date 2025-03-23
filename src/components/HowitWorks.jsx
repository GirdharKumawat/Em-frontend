import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      img: "/src/assets/upload_resume.png",
      title: "Upload Resumes",
      text: "Submit candidate and expert resumes for AI analysis."
    },
    {
      img: "/src/assets/ai_processing.png",
      title: "AI Processing",
      text: "Our AI-powered system evaluates expertise and relevance."
    },
    {
      img: "/src/assets/match_results.png",
      title: "View Matches",
      text: "See the best expert recommendations for your interview."
    }
  ];

  return (
    <div className="container text-center mt-5">
      <h2>How It Works</h2>
      <div className="row mt-4">
        {steps.map((step, index) => (
          <div key={index} className="col-md-4">
            <img src={step.img} alt={step.title} className="img-fluid rounded" />
            <h4 className="mt-3">{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
