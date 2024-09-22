
export let PORT = 370; // 端口

export interface Proxy {
    domain: string;
    url: string;
    enable: boolean;
    replaces?: {
        old: string,
        new: string
    }[];
}

// 代理
export let proxys: Proxy[] = [
    {
        domain: "easy-reverse-proxy-eight.vercel.app",
        url: "https://www.google.com/"
    }
];
