const { styler, value, listen, spring, pointer } = window.popmotion;

const ball = document.querySelector(".avatar");
const divStyler = styler(ball);
const ballXY = value({x:0, y: 0}, divStyler.set);

listen(ball, "mousedown touchstart")
  .start((e) => {
      e.preventDefault();
      pointer(ballXY.get()).start(ballXY)
  });

listen(document, "mouseup touchend")
  .start(() => {
      spring({
          from: ballXY.get(),
          velocity: ballXY.getVelocity(),
          to: {x:0, y: 0},
          stiffness: 200,
      }).start(ballXY);
  })