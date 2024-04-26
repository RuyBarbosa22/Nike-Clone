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
        imgURL: shoe5,
        name: "Nike Air Max 95",
        price: "R$1149,49",
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
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
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