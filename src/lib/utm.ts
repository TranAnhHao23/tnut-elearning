export type UTMParams = {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
};

export function saveUTMParamsToLocalStorage() {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign"];

    utmKeys.forEach((key) => {
        const value = params.get(key);
        if (value) {
            localStorage.setItem(key, value);
        }
    });
}

export function getUTMParamsFromStorage(): UTMParams {
    if (typeof window === 'undefined') return {
        utm_source: '',
        utm_medium: '',
        utm_campaign: ''
    };

    const utm_source = localStorage.getItem("utm_source") || "";
    const utm_medium = localStorage.getItem("utm_medium") || "";
    const utm_campaign = localStorage.getItem("utm_campaign") || "";

    return {
        utm_source,
        utm_medium,
        utm_campaign,
    };
}
