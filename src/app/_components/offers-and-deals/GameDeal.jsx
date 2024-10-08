import React from 'react';

export default function GameDeal({ deal, isUpcoming, isOilersGame }) {
  return (
    <div
      className={`game-deal ${isUpcoming ? 'upcoming' : ''} ${
        isOilersGame ? 'oilers-game' : ''
      }`}
    >
      <div className="game-info">
        <h3>
          <i className="fas fa-hockey-puck" />
          {deal.homeTeam} vs {deal.awayTeam}
        </h3>
        <div className="teams">
          <span className="team">{deal.homeTeam}</span>
          <span className="vs">VS</span>
          <span className="team">{deal.awayTeam}</span>
        </div>
        <div className="date-time">
          <p>
            <i className="fas fa-calendar-alt" /> {deal.date}
          </p>
          <p>
            <i className="fas fa-clock" /> {deal.time}
          </p>
        </div>
      </div>
      <div className="deal-info">
        <h4>Special Offer</h4>
        <p className="deal-description">{deal.deal}</p>
      </div>
    </div>
  );
}
