import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, shoe8 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Sobre" },
    { href: "#products", label: "Produtos" },
    { href: "#contact-us", label: "Fale conosco" },
];

export const shoes = [
    {
        bigShoe: bigShoe1,
    },
    {
        bigShoe: bigShoe2,
    },
    {
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '400+', label: 'Lojas disponíveis' },
    { value: '50k+', label: 'Reviews' },
    { value: '450k+', label: 'Vendas' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike P-6000",
        price: "R$799,90",
    },
    {
        imgURL: shoe6,
        name: "Nike Zoom Vomero 5",
        price: "R$1299,99",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Max Plus OG",
        price: "R$1299,99",
    },
    {
        imgURL: shoe8,
        name: "Nike Dunk Retro SE",
        price: "R$999,99",
    }
];

export const services = [
    {
        imgURL: truckFast,
        label: "Frete grátis",
        subtext: "Compre seus tênis favoritos e receba em casa sem custo extra!"
    },
    {
        imgURL: shieldTick,
        label: "Pagamento seguro",
        subtext: "Suas compras protegidas com total segurança. Pague com confiança!"
    },
    {
        imgURL: support,
        label: "Suporte ao cliente",
        subtext: "Estamos disponíveis 24 horas por dia para ajudar você com qualquer dúvida ou problema."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'David Almeida',
        rating: 4.5,
        feedback: "Perfeito para longas corridas. Amortecimento excelente e muito confortável. Design moderno. Adorei!"
    },
    {
        imgURL: customer2,
        customerName: 'Aliria Fernandes',
        rating: 4.9,
        feedback: "Super confortável e estiloso. A tecnologia Air Max faz toda a diferença. Recomendo!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];