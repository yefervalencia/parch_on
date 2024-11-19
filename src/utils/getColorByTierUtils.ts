export const getColorByTier = (tier: string): string => {
    switch (tier) {
        case "General":
            return "bg-blue-500";
        case "Meet and Greet":
            return "bg-purple-500";
        case "VIP":
            return "bg-red-500";
        case "Platino":
            return "bg-gray-400";
        case "Oro":
            return "bg-yellow-500";
        case "Plata":
            return "bg-[#8a9597]";
        case "Bronce":
            return "bg-amber-950";
        default:
            return "bg-gray-300";
    }
};
