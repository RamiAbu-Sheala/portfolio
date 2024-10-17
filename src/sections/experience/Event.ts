type Event = {
    id: string;
    title: string;
    date: Date;
    description: string;
    image: string;
};

const EVENTS: Event[] = [
    {
        id: "n5-tech-challenge",
        title: "N5 Tech Challenge 2023",
        date: new Date(2023, 10, 22),
        description: "An amazing, unique and challenging capture the flag event organized by N5 in Antwerp.",
        image: "/experience/events/n5-tech-challenge.png",
    },
    {
        id: "n5-tech-challenge2",
        title: "N5 Tech Challenge 20232",
        date: new Date(2023, 10, 22),
        description: "An amazing, unique and challenging capture the flag event organized by N5 in Antwerp.",
        image: "/experience/events/n5-tech-challenge.png",
    },
    {
        id: "n5-tech-challenge3",
        title: "N5 Tech Challenge 20233",
        date: new Date(2023, 10, 22),
        description: "An amazing, unique and challenging capture the flag event organized by N5 in Antwerp.",
        image: "/experience/events/n5-tech-challenge.png",
    },
];

export {type Event, EVENTS};