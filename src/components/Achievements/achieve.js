import React from "react";

function achieve() {
  return (
    <div>
      <h1>Achievements</h1>
      <p>Here are some of my achievements:</p>

      {/* Add your video here */}
      <video width="320" height="240" controls>
        <source src="Portfoliosoumya/src/components/Achievements/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>Other achievements...</p>
    </div>
  );
}

export default achieve;
