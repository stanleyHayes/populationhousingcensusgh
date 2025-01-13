const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};


const calculateStats = households => {
    const totalVisits = households.reduce((sum, household) => sum + household.front_page.total_visits, 0);

    const completedCount = households.filter(household => household.front_page.date_completed).length;
    const totalStarted = households.length;

    const uniqueRegions = new Set(households.map(household => household.front_page.region.name));
    const uniqueDistricts = new Set(households.map(household => household.front_page.district.name));

    return {
        totalVisits,
        completedCount,
        totalStarted,
        totalRegions: uniqueRegions.size,
        totalDistricts: uniqueDistricts.size
    };
};

export const HELPERS = {getSystemTheme, calculateStats};