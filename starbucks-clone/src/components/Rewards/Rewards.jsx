import "./Rewards.css";

export function Rewards() {
  return (
    <section className="rewards inner">
      <div className="rewardsContents">
        <h3 className="rewardsContentTitle">
          FREE COFFEE
          <br />
          IS A TAP AWAY
        </h3>
        <div className="rewardsContentSub">
          Join now to start earning Rewards.
          <br />
          <a href="#" className="joinNow greenRound">
            Join now
          </a>
          <br />
          Or
          <a href="#" className="joinNow">
            &nbsp;join in the app&nbsp;
          </a>
          for the best experience
        </div>
      </div>
    </section>
  );
}
