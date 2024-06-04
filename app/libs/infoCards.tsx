import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";
import { Interface } from "readline";

interface IINfoCard{
    title : string;
    icon: LucideIcon;
    bodyText: string;
    id: number;
};

const infoCards: IINfoCard[] = [
    {
        title: "Increase Sales",
        bodyText: "Insightful's predective analytics identify high value prospects for targeted pitches, boosting conversion rates and sales by up to 20%.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Increase Sales",
        bodyText: "Insightful's predective analytics identify high value prospects for targeted pitches, boosting conversion rates and sales by up to 20%.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Increase Sales",
        bodyText: "Insightful's predective analytics identify high value prospects for targeted pitches, boosting conversion rates and sales by up to 20%.",
        icon: ArrowDownNarrowWide,
        id: 3
    }
]