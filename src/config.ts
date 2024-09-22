export interface Proxy
    {
    domain: string;
    url: string;
}

// 代理
export let proxys: Proxy[] = [
    {
        domain: "easy-reverse-proxy-xi.vercel.app",
        url: "https://www.google.com/"
    }
];
