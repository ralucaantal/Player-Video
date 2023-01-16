"use strict";

console.log("hello");

const video = document.getElementById("videoPrincipal");

const canvas = document.getElementById("videoCanvas");
const ctx = canvas.getContext("2d");

// canvas.width = video.videoWidth;
// canvas.height = video.videoHeight;

ctx.drawImage(video, 0, 0);

let requestId;

let effect;

//un click pe oricare buton de efect va schimba valoarea lui EFFECT in efectul aferent
document
  .getElementById("btnNormal")
  .addEventListener("click", () => (effect = "normal"));
document
  .getElementById("btnGrayScale")
  .addEventListener("click", () => (effect = "grayscale"));
document
  .getElementById("btnSepia")
  .addEventListener("click", () => (effect = "sepia"));
document
  .getElementById("btnInvert")
  .addEventListener("click", () => (effect = "invert"));

const btnStart = document.getElementById("btnStart");

var videos = ["media/v1.mp4", "media/v2.mp4", "media/v3.mp4", "media/v4.mp4"];

const video1 = document.getElementById("pisica1");
const video2 = document.getElementById("pisica2");
const video3 = document.getElementById("pisica3");
const video4 = document.getElementById("pisica4");

const textVideo1 = document.getElementById("pisica1T");
const textVideo2 = document.getElementById("pisica2T");
const textVideo3 = document.getElementById("pisica3T");
const textVideo4 = document.getElementById("pisica4T");

//atunci cand dau click pe titlul unui video sau pe video sa ruleze acela si sa continue redarea automata de la un video la celalalt
textVideo1.addEventListener("click", () => {
  video.src = videos[0];
  video.play();
  video.addEventListener("ended", () => {
    let i = 1;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

textVideo2.addEventListener("click", () => {
  video.src = videos[1];
  video.play();
  video.addEventListener("ended", () => {
    let i = 2;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

textVideo3.addEventListener("click", () => {
  video.src = videos[2];
  video.play();
  video.addEventListener("ended", () => {
    let i = 3;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

textVideo4.addEventListener("click", () => {
  video.src = videos[3];
  video.play();
  video.addEventListener("ended", () => {
    let i = 0;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

video1.addEventListener("click", () => {
  video.src = videos[0];
  video.play();
  video.addEventListener("ended", () => {
    let i = 1;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

video2.addEventListener("click", () => {
  video.src = videos[1];
  video.play();
  video.addEventListener("ended", () => {
    let i = 2;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

video3.addEventListener("click", () => {
  video.src = videos[2];
  video.play();
  video.addEventListener("ended", () => {
    let i = 3;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

video4.addEventListener("click", () => {
  video.src = videos[3];
  video.play();
  video.addEventListener("ended", () => {
    let i = 0;
    if (i < videos.length) {
      video.src = videos[i];
      video.play();
      video.addEventListener("ended", () => {
        console.log("video ended");
        i++;
        if (i === videos.length) i = 0;
        video.src = videos[i];
        video.play();
      });
    }
  });
});

btnStart.addEventListener("click", () => {
  let i = 0;

  if (i < videos.length) {
    video.src = videos[i];
    video.addEventListener("ended", () => {
      console.log("video ended");
      i++;
      if (i === videos.length) i = 0;

      video.src = videos[i];
      video.play();
    });
  }

  console.log("video status", video.paused);

  // if (video.paused) video.play();
  // else video.pause();
  video.play();
});

video.addEventListener("pause", () => {
  // btnStart.textContent = "Start";

  cancelAnimationFrame(requestId);
});

//canvasul sa ia dimensiunile videoului
video.addEventListener("canplay", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
});
let flagNext = true;
let flagPrev = true;

video.addEventListener("play", () => {
  //btnStart.textContent = "Stop";

  flagNext = true;
  flagPrev = true;
  updateCanvas();
});

//functia prin care se deseneaza canvasul in functie de continutul videoului
function updateCanvas() {
  ctx.drawImage(video, 0, 0);

  ctx.globalAlpha = 0.4;

  //desenare buton Play
  const buttonXPlay = 20;
  const buttonYPlay = 300;
  const buttonWidthPlay = 50;
  const buttonHeightPlay = 40;
  ctx.fillStyle = "#fb90b7";
  ctx.fillRect(buttonXPlay, buttonYPlay, buttonWidthPlay, buttonHeightPlay);
  ctx.fillStyle = "#0f1021";
  ctx.fillText("Play", buttonXPlay + 10, buttonYPlay + 20);

  canvas.addEventListener("click", function (event) {
    var x = event.offsetX;
    var y = event.offsetY;

    if (
      x >= buttonXPlay &&
      x <= buttonXPlay + buttonWidthPlay &&
      y >= buttonYPlay &&
      y <= buttonYPlay + buttonHeightPlay
    ) {
      if (video.paused) {
        video.play();
      }
    }
  });

  //desenare buton pauza
  const buttonXPause = 80;
  const buttonYPause = 300;
  const buttonWidthPause = 50;
  const buttonHeightPause = 40;
  ctx.fillStyle = "#fb90b7";
  ctx.fillRect(buttonXPause, buttonYPause, buttonWidthPause, buttonHeightPause);
  ctx.fillStyle = "#0f1021";
  ctx.fillText("Pause", buttonXPause + 10, buttonYPause + 20);

  canvas.addEventListener("click", function (event) {
    var x = event.offsetX;
    var y = event.offsetY;

    if (
      x >= buttonXPause &&
      x <= buttonXPause + buttonWidthPause &&
      y >= buttonYPause &&
      y <= buttonYPause + buttonHeightPause
    ) {
      if (video.played) {
        video.pause();
      }
    }
  });

  //desenare buton care duce spre videoul anterior
  const buttonXPrev = 140;
  const buttonYPrev = 300;
  const buttonWidthPrev = 60;
  const buttonHeightPrev = 40;
  ctx.fillStyle = "#fb90b7";
  ctx.fillRect(buttonXPrev, buttonYPrev, buttonWidthPrev, buttonHeightPrev);
  ctx.fillStyle = "#0f1021";
  ctx.fillText("Previous", buttonXPrev + 10, buttonYPrev + 20);

  //atunci cand dau click pe buton ma duce la videoul anterior
  canvas.addEventListener("click", function (event) {
    if (flagPrev) {
      flagPrev = false;
      var x = event.offsetX;
      var y = event.offsetY;

      if (
        x >= buttonXPrev &&
        x <= buttonXPrev + buttonWidthPrev &&
        y >= buttonYPrev &&
        y <= buttonYPrev + buttonHeightPrev
      ) {
        var comparatie = video.src.substr(video.src.length - 12);

        if (comparatie === videos[0]) {
          video.pause();
          video.src = videos[3].substr(videos[3].length - 12);
          video.play();
        } else if (comparatie === videos[1]) {
          video.pause();
          video.src = videos[0].substr(videos[0].length - 12);
          video.play();
        } else if (comparatie === videos[2]) {
          video.pause();
          video.src = videos[1].substr(videos[1].length - 12);
          video.play();
        } else if (comparatie === videos[3]) {
          video.pause();
          video.src = videos[2].substr(videos[2].length - 12);
          video.play();
        }
      }
    }
  });

  //desenare buton next
  const buttonXNext = 210;
  const buttonYNext = 300;
  const buttonWidthNext = 50;
  const buttonHeightNext = 40;
  ctx.fillStyle = "#fb90b7";
  ctx.fillRect(buttonXNext, buttonYNext, buttonWidthNext, buttonHeightNext);
  ctx.fillStyle = "#0f1021";
  ctx.fillText("Next", buttonXNext + 10, buttonYNext + 20);

  //atunci cand dau click pe buton ma duce la urmatorul video
  canvas.addEventListener("click", function (event) {
    if (flagNext) {
      flagNext = false;
      var x = event.offsetX;
      var y = event.offsetY;
      if (
        x >= buttonXNext &&
        x <= buttonXNext + buttonWidthNext &&
        y >= buttonYNext &&
        y <= buttonYNext + buttonHeightNext
      ) {
        var comparatie = video.src.substr(video.src.length - 12);

        if (comparatie === videos[0]) {
          video.pause();
          video.src = videos[1].substr(videos[1].length - 12);
          video.play();
        } else if (comparatie === videos[1]) {
          video.pause();
          video.src = videos[2].substr(videos[2].length - 12);
          video.play();
        } else if (comparatie === videos[2]) {
          video.pause();
          video.src = videos[3].substr(videos[3].length - 12);
          video.play();
        } else if (comparatie === videos[3]) {
          video.pause();
          video.src = videos[0].substr(videos[0].length - 12);
          video.play();
        }
      }
    }
  });

  //aici se schimba efectele
  //fiecare efect se calculeaza dupa o formula
  switch (effect) {
    case "normal":
      break;
    case "grayscale":
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const average = Math.round((r + g + b) / 3);

        data[i] = data[i + 1] = data[i + 2] = average;
      }

      ctx.putImageData(imgData, 0, 0);

      break;
    case "sepia":
      const imgDataS = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const dataS = imgDataS.data;

      for (let i = 0; i < dataS.length; i += 4) {
        dataS[i] =
          0.393 * dataS[i] + 0.769 * dataS[i + 1] + 0.189 * dataS[i + 2];
        dataS[i + 1] =
          0.394 * dataS[i] + 0.686 * dataS[i + 1] + 0.168 * dataS[i + 2];
        dataS[i + 2] =
          0.272 * dataS[i] + 0.534 * dataS[i + 1] + 0.131 * dataS[i + 2];
      }
      ctx.putImageData(imgDataS, 0, 0);

      break;

    case "invert":
      const imgDataI = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const dataI = imgDataI.data;

      for (let i = 0; i < dataI.length; i += 4) {
        dataI[i] = dataI[i] ^ 255;
        dataI[i + 1] = dataI[i + 1] ^ 255;
        dataI[i + 2] = dataI[i + 2] ^ 255;
      }

      ctx.putImageData(imgDataI, 0, 0);

      break;
  }

  requestId = requestAnimationFrame(() => updateCanvas());
}
