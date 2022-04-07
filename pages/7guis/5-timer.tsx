import { useState } from "react";
import { atCS } from "../../utils";

interface TimerProps {
  duration: number;
}
const Timer = (props: TimerProps) => {
  atCS(() => console.log("render/props", props));

  // Display state
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(props.duration);

  // Listeners

  //Event Handlers
  function handleReset() {
    // TODO trigger("timer/reset", { duration: 3, elapsed: 0 });
  }

  function handleDurationChange(e) {}

  return (
    <section>
      <label>
        <span>Elapsed time:</span>
        <output>
          {Math.min(elapsed, duration).toFixed(2)}s / {duration.toFixed(2)}s
        </output>
        <progress max={duration} value={elapsed} />
      </label>
      <label>
        <span>Duration:</span>
        <input
          type="range"
          min={0}
          max={30}
          defaultValue={duration}
          onChange={handleDurationChange}
        />
      </label>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};

export default Timer;

export function getServerSideProps(context): { props: TimerProps } {
  return {
    props: {
      duration: Number(context.query.d || 4.2),
    },
  };
}
