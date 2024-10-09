import React from 'react';
import GameDeal from './GameDeal';

const MOCK_DEALS = [
  {
    id: 1,
    homeTeam: 'Jets',
    awayTeam: 'Oilers',
    date: '2023-10-09',
    time: '8:00 p.m.',
    deal: 'Half price wings and Domestic beers $6 for opening week',
  },
  {
    id: 2,
    homeTeam: 'Blackhawks',
    awayTeam: 'Oilers',
    date: '2023-10-12',
    time: '8:00 p.m.',
    deal: 'Half price wings and Domestic beers $6 for opening week',
  },
  {
    id: 3,
    homeTeam: 'Flames',
    awayTeam: 'Oilers',
    date: '2023-10-13',
    time: '6:00 p.m.',
    deal: '',
  },
  {
    id: 4,
    homeTeam: 'Flyers',
    awayTeam: 'Oilers',
    date: '2023-10-15',
    time: '8:00 p.m.',
    deal: '',
  },
  {
    id: 5,
    homeTeam: 'Oilers',
    awayTeam: 'Predators',
    date: '2023-10-17',
    time: '6:00 p.m.',
    deal: '',
  },
];

export default function OffersAndDeals() {
  const isUpcoming = date => {
    const gameDate = new Date(date);
    const today = new Date();
    return gameDate >= today;
  };

  const isOilersGame = (homeTeam, awayTeam) => {
    return homeTeam === 'Oilers' || awayTeam === 'Oilers';
  };

  return (
    <div className="offers-and-deals">
      <div className="game-list">
        {MOCK_DEALS.map(deal => (
          <GameDeal
            key={deal.id}
            deal={deal}
            isUpcoming={isUpcoming(deal.date)}
            isOilersGame={isOilersGame(deal.homeTeam, deal.awayTeam)}
          />
        ))}
      </div>
    </div>
  );
}
