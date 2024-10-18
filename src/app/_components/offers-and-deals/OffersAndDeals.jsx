import React from "react";
import GameDeal from "./GameDeal";

const MOCK_DEALS = [
    {
        id: 1,
        homeTeam: "Oilers",
        awayTeam: "Flyers",
        date: "2024-10-15",
        time: "8:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 2,
        homeTeam: "Oilers",
        awayTeam: "Predators",
        date: "2024-10-17",
        time: "6:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 3,
        homeTeam: "Oilers",
        awayTeam: "Stars",
        date: "2024-10-19",
        time: "2:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 4,
        homeTeam: "Oilers",
        awayTeam: "Hurricanes",
        date: "2024-10-22",
        time: "7:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 5,
        homeTeam: "Oilers",
        awayTeam: "Penguins",
        date: "2024-10-25",
        time: "7:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 6,
        homeTeam: "Oilers",
        awayTeam: "Red Wings",
        date: "2024-10-27",
        time: "4:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 7,
        homeTeam: "Oilers",
        awayTeam: "Blue Jackets",
        date: "2024-10-28",
        time: "5:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 8,
        homeTeam: "Oilers",
        awayTeam: "Predators",
        date: "2024-10-31",
        time: "6:00 p.m.",
        deal: "20% off on all orders",
    },
    {
        id: 9,
        homeTeam: "Oilers",
        awayTeam: "Flames",
        date: "2024-11-3",
        time: "6:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 10,
        homeTeam: "Oilers",
        awayTeam: "Devils",
        date: "2024-11-4",
        time: "6:30 p.m.",
        deal: "To be Announced",
    },
    {
        id: 11,
        homeTeam: "Oilers",
        awayTeam: "Golden",
        date: "2024-11-6",
        time: "6:30 p.m.",
        deal: "To be Announced",
    },
    {
        id: 12,
        homeTeam: "Oilers",
        awayTeam: "Canucks",
        date: "2024-11-9",
        time: "8:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 13,
        homeTeam: "Oilers",
        awayTeam: "Islanders",
        date: "2024-11-12",
        time: "6:30 p.m.",
        deal: "To be Announced",
    },
    {
        id: 14,
        homeTeam: "Oilers",
        awayTeam: "Predators",
        date: "2024-11-14",
        time: "7:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 15,
        homeTeam: "Oilers",
        awayTeam: "Maple Leafs",
        date: "2024-11-16",
        time: "5:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 16,
        homeTeam: "Oilers",
        awayTeam: "Canadies",
        date: "2024-11-18",
        time: "5:30 p.m.",
        deal: "To be Announced",
    },
    {
        id: 17,
        homeTeam: "Oilers",
        awayTeam: "Senators",
        date: "2024-11-19",
        time: "5:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 18,
        homeTeam: "Oilers",
        awayTeam: "Wild",
        date: "2024-11-21",
        time: "7:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 19,
        homeTeam: "Oilers",
        awayTeam: "Rangers",
        date: "2024-11-23",
        time: "8:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 20,
        homeTeam: "Oilers",
        awayTeam: "Utah",
        date: "2024-11-29",
        time: "7:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 21,
        homeTeam: "Oilers",
        awayTeam: "Avalanche",
        date: "2024-11-30",
        time: "8:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 22,
        homeTeam: "Oilers",
        awayTeam: "Golden Knights",
        date: "2024-12-3",
        time: "8:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 23,
        homeTeam: "Oilers",
        awayTeam: "Blue Jackets",
        date: "2024-12-5",
        time: "8:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 24,
        homeTeam: "Oilers",
        awayTeam: "Blues",
        date: "2024-12-7",
        time: "8:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 25,
        homeTeam: "Oilers",
        awayTeam: "Lightning",
        date: "2024-12-10",
        time: "7:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 26,
        homeTeam: "Oilers",
        awayTeam: "Wilds",
        date: "2024-12-12",
        time: "6:30 p.m.",
        deal: "To be Announced",
    },
    {
        id: 27,
        homeTeam: "Oilers",
        awayTeam: "Goldeen Knights",
        date: "2024-12-14",
        time: "2:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 28,
        homeTeam: "Oilers",
        awayTeam: "Panthers",
        date: "2024-12-16",
        time: "6:30 p.m.",
        deal: "To be Announced",
    },
    {
        id: 29,
        homeTeam: "Oilers",
        awayTeam: "Bruins",
        date: "2024-12-19",
        time: "7:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 30,
        homeTeam: "Oilers",
        awayTeam: "Sharks",
        date: "2024-12-21",
        time: "2:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 31,
        homeTeam: "Oilers",
        awayTeam: "Senators",
        date: "2024-12-22",
        time: "6:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 32,
        homeTeam: "Oilers",
        awayTeam: "Kings",
        date: "2024-12-28",
        time: "2:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 33,
        homeTeam: "Oilers",
        awayTeam: "Ducks",
        date: "2024-12-29",
        time: "2:00 p.m.",
        deal: "To be Announced",
    },
    {
        id: 34,
        homeTeam: "Oilers",
        awayTeam: "Utah",
        date: "2024-12-31",
        time: "7:00 p.m.",
        deal: "To be Announced",
    },
];

export default function OffersAndDeals() {
    const isUpcoming = (date) => {
        const gameDate = new Date(date);
        const today = new Date();
        return gameDate >= today;
    };

    const isOilersGame = (homeTeam, awayTeam) => {
        return homeTeam === "Oilers" || awayTeam === "Oilers";
    };

    return (
        <div className="offers-and-deals">
            <div className="game-list">
                {MOCK_DEALS.map((deal) => (
                    <GameDeal
                        key={deal.id}
                        deal={deal}
                        isUpcoming={isUpcoming(deal.date)}
                        isOilersGame={isOilersGame(
                            deal.homeTeam,
                            deal.awayTeam
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
