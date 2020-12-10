export class IpLocation {

    constructor(ip) {
        this.apikey = 'LTVWcbSQXSpFj0PVrkXPxN27tZy7t&';
        this.ip = ip;
    }

    async getIpLocation() {
        const URI = `https://geo.ipify.org/api/v1?apiKey=at_${this.apikey}&ipAddress=${this.ip}`;
        const response = await fetch(URI);
        const data = await response.json()
        return data;
    }

    changeIp(newip) {
        this.ip = newip;
    }
}