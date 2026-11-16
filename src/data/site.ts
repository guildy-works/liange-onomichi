export const site = {
    name: "Liange",
    nameJa: "リアンジュ",
    tagline: "尾道の女性専用 脱毛・エステティックサロン",
    tel: "080-8244-7899",
    telHref: "tel:08082447899",
    instagram: "https://www.instagram.com/liange0702/",
    instagramId: "@liange0702",
    postal: "〒722-0018",
    address: "広島県尾道市平原 3-21-15",
    building: "グランシャリオ平原 301号室",
    hours: "月曜日〜土曜日 9:00〜19:00",
    closed: "日曜日・祝日",
    parking: "「301」「I」「B」の番号の区画をご利用ください",
    mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.4909912322055!2d133.17409245108826!3d34.414281480413294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3551002af6fa2997%3A0xacc7f39cc95c5178!2z44CSNzIyLTAwMTgg5bqD5bO255yM5bC-6YGT5biC5bmz5Y6f77yT5LiB55uu77yS77yR4oiS77yR77yVIOOCsOODqeODs-OCt-ODo-ODquOCquW5s-WOnyAzMDE!5e0!3m2!1sja!2sjp!4v1614094794108!5m2!1sja!2sjp",
};

export const navItems = [
    { href: "#concept", en: "Concept", ja: "コンセプト" },
    { href: "#menu", en: "Menu", ja: "メニュー" },
    { href: "#hair-removal", en: "Hair Removal", ja: "光脱毛" },
    { href: "#profile", en: "Profile", ja: "プロフィール" },
    { href: "#access", en: "Access", ja: "アクセス" },
];

export type MenuItem = { name: string; time?: string };

export type MenuCategory = {
    id: string;
    en: string;
    ja: string;
    description: string;
    items: MenuItem[];
    note?: string;
};

export const menuCategories: MenuCategory[] = [
    {
        id: "facial",
        en: "Facial",
        ja: "フェイシャル",
        description: "お肌の状態に合わせて、うるおいと透明感を引き出すコースです。",
        items: [
            { name: "Wクレンジングコース", time: "50分" },
            { name: "クレンジング＋保湿コース", time: "60分" },
            { name: "保湿ケアコース", time: "60分" },
            { name: "美白ケアコース", time: "70分" },
            { name: "保湿＋美白 Wケアコース", time: "85分" },
            { name: "スペシャルケアコース", time: "90分" },
        ],
    },
    {
        id: "facial-option",
        en: "Facial Option",
        ja: "フェイシャルオプション",
        description: "コースに組み合わせて、さらに深いリラックスを。",
        items: [
            { name: "ショルダーマッサージ", time: "15分" },
            { name: "ハンドマッサージ", time: "15分" },
            { name: "フットマッサージ", time: "15分" },
            { name: "イオン導入" },
            { name: "Q10マッサージ" },
            { name: "オゾンマッサージ" },
            { name: "クリオネマッサージ" },
        ],
    },
    {
        id: "body",
        en: "Body",
        ja: "ボディ",
        description: "めぐりを整え、日頃の疲れをやさしくほぐします。",
        items: [
            { name: "リンパマッサージ 上半身 or 下半身", time: "60分" },
            { name: "リンパマッサージ 全身", time: "60分" },
            { name: "リンパマッサージ 全身", time: "90分" },
            { name: "デトックスマッサージ 上半身 or 下半身", time: "60分" },
            { name: "デトックスマッサージ 全身", time: "60分" },
            { name: "デトックスマッサージ 全身", time: "90分" },
        ],
    },
    {
        id: "body-option",
        en: "Body Option",
        ja: "ボディオプション",
        description: "気になる部分を集中的にアプローチ。",
        items: [
            { name: "空気圧マッサージ", time: "10分" },
            { name: "超音波マッサージ", time: "10分" },
            { name: "キャビテーションマッサージ", time: "10分" },
        ],
    },
    {
        id: "hair-removal",
        en: "Hair Removal",
        ja: "光脱毛",
        description: "お肌にやさしい光脱毛。部位・回数はカウンセリングでご相談ください。",
        items: [
            { name: "全身脱毛" },
            { name: "各部位の脱毛" },
        ],
        note: "詳しくはお問い合わせください",
    },
    {
        id: "package",
        en: "Package",
        ja: "お得なパッケージ",
        description: "続けやすい価格で、理想の自分へ。",
        items: [
            { name: "フェイシャル 得！得！パッケージ" },
            { name: "フェイシャル 集中パッケージ" },
            { name: "ボディ 集中 月4回パッケージ" },
            { name: "ボディ 集中 月3回パッケージ" },
            { name: "光フェイシャル 3回 / 6回 パッケージ" },
            { name: "光スペシャルフェイシャル 3回 / 6回 パッケージ" },
        ],
    },
];
