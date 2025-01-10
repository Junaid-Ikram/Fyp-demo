import "./liveVotingIndicator.css";

export default function LiveVotingIndicator() {
  return (
    <div className="live-card">
      <div className="live-content">
        <div>
          <div className="live-loader">
            <div className="live-circle live-red">
              <div className="live-dot"></div>
              <div className="live-outline"></div>
            </div>
          </div>
        </div>
        <h1 className="live-heading">Voting Live</h1>
      </div>
    </div>
  );
}
