import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Image from "next/image";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container container-fluid flex">
          <div className="row flex-row">
            <div className="col-lg">
                <div className="nav p-3 bg-light sidenav">
                      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                      <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 1471.2 381.8" viewBox="0 0 1471.2 381.8" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Umbrage Logo">
                        <g>
                        <path d="M89.8 69.7V45.5C39.8 59 2.6 104.1 1.2 157.9l23.1 3c.1-42.3 27.6-78.3 65.6-91.2Z" fill="#ffffff" data-color="1"></path>
                        <path d="M25.5 303.5v-64.7c0-.7-.2-1.3-.3-2L.3 233c3.2 29.7 12.1 57.6 25.9 80.9-.4-3.4-.6-6.9-.6-10.4h-.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="m137.1 189 5.9 82.7-22.2 6.1-22.2-6.1 5.9-82.7L0 175.4v39.7l43.2 6.6v81.8c0 41.6 34.8 75.4 77.6 75.8 42.8-.4 77.5-34.2 77.6-75.8v-81.8l43.2-6.6v-39.7l-104.5 13.5Z" fill="#ffffff" data-color="1"></path>
                        <path d="M216 236.9v66.6c0 3.1-.2 6.1-.5 9.1 13.4-23 22-50.4 25.1-79.5l-24.6 3.7Z" fill="#ffffff" data-color="1"></path>
                        <path d="m217.3 160.9 23.1-3c-1.4-53.9-38.7-99-88.7-112.4v24.2c38.1 12.9 65.6 48.9 65.7 91.2h-.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M134.2 169.5V1.6C129.8.3 125.5 0 121 0s-9.1.3-13.7 1.6v167.9l13.4 1.7 13.4-1.7Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1287.2 99.7h-48.9v13.6c-9.3-11.3-22.6-14.9-36-14.9-34.9 0-63.2 28.4-63.2 63.2s28.4 63.2 63.2 63.2 25.8-4.2 36-11.3v7.5c-.2 19.7-16.2 35.6-35.9 35.6s-19-4.1-25.5-10.7l-19.3 19.3c11.5 11.5 23.9 18.7 41.4 18.7 34.6 0 66.2-28 66.6-62.5v-94.8h21.5v-27h.1Zm-84.8 97.9c-19.8 0-35.9-16.1-35.9-35.9s16.1-35.9 35.9-35.9 35.9 16.1 35.9 35.9-16.1 35.9-35.9 35.9Z" fill="#ffffff" data-color="1"></path>
                        <path d="M374.8 167.5c0 32.2 26.9 58.4 60.1 58.7 33.1-.3 60-26.5 60.1-58.7V75.2h21.5V47.9h-48.9v119.6c0 17.2-14.6 31.1-32.8 31.4-18.1-.3-32.8-14.3-32.8-31.4V47.8h-48.9v27.3h21.5v92.3h.2Z" fill="#ffffff" data-color="1"></path>
                        <path d="M755.4 224.8H783V215c10.2 7 22.6 11.1 36 11.1 35.3 0 63.9-28.6 63.9-63.9S854.3 98.3 819 98.3c-13.3 0-25.7 4.1-36 11.1V47.7h-48.9v27.6h21.3v149.5Zm62.8-99.1c20.2 0 36.6 16.4 36.6 36.6s-16.4 36.6-36.6 36.6-36.6-16.4-36.6-36.6 16.4-36.6 36.6-36.6Z" fill="#ffffff" data-color="1"></path>
                        <path d="M916.3 162v35.7h-15v27h57.5v-27h-15.1v-38.2c0-15.9 7.9-33.8 36.9-33.8h19.7V98.4h-25.6c-22.8 0-31 14.9-31 14.9V99.7h-48.9V127h21.5v35Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1053.4 142.2c-22.8.4-41.3 19.1-41.3 42s19 43.3 46.3 41.9c12.7-.7 22.2-6.9 26.6-13.7v12.2h42.3v-27H1112V146c-.3-26.4-21.5-47.8-47.6-47.9h-42.1v27.3h42c10.4 0 18.9 9.2 20.4 19.4-4.5-1.7-9.4-2.7-14.5-2.7h-16.8Zm32.3 39.8c0 8.3-6.6 14.9-14.8 15.1h-16.6c-8.2 0-14.9-6.8-14.9-15.1s6.7-15 14.9-15.1h16.5c8.2 0 14.9 6.8 14.9 15.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1451.1 182.6c-11.3 0-20.2 9-20.2 20s9 19.8 20.2 19.8 20.1-8.7 20.1-19.9-8.7-19.9-20.1-19.9Zm0 36.5c-9.2 0-16.5-6.5-16.5-16.4s6.9-16.6 16.5-16.6 16.4 6.7 16.4 16.5-7.2 16.5-16.4 16.5Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1459 198.7c0-4.2-3-6.2-7.8-6.2h-7.4v19.6h5v-7.3h1.7l4.3 7.3h5.3l-4.9-8.2c2.2-.8 3.8-2.4 3.8-5.3Zm-4.9.3c0 1.7-1.1 2.5-3.1 2.5h-2.2v-5.1h2.2c1.9 0 3.1.6 3.1 2.5Z" fill="#ffffff" data-color="1"></path>
                        <path d="M550 197.7h-15.3v27h57.5v-27H577V144c0-10 8.7-18.3 19.3-18.4h3.5c10.7.2 19.4 8.5 19.4 18.4v80.7h27V144c0-10 8.7-18.3 19.3-18.4h3.6c10.7.2 19.4 8.5 19.4 18.4v80.7h42.1v-27h-15v-53.8c0-24.8-20.8-45.2-46.4-45.4h-3.6c-12.8 0-24.4 5.3-32.8 13.6-8.4-8.3-17.7-13.6-28.8-13.6s-20.3 4.2-26.7 13.3V99.7h-48.9v27h21.5v70.9h.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1357.9 98.5c-35.2 0-63.8 28.6-63.8 63.8s28.6 63.8 63.8 63.8 47.2-14.8 57.5-36.2h-34.1c-.6.5-1.3 1.1-2 1.6-.2.2-.4.3-.6.5-.6.4-1.1.8-1.7 1.1-.4.2-.8.5-1.2.7-.5.3-1 .5-1.5.8-.6.3-1.1.6-1.7.8-.4.2-.8.3-1.2.5-.7.3-1.5.6-2.3.8-.3 0-.5.2-.8.3-1 .3-2 .6-3 .8h-.2c-2.3.5-4.8.8-7.3.8-5 0-9.7-1-14-2.9h-.2c-.9-.4-1.9-.9-2.8-1.3-.2 0-.3-.2-.5-.2-1-.5-1.9-1.1-2.8-1.7-.9-.6-1.7-1.2-2.6-1.9-.2-.2-.5-.4-.7-.6-.5-.5-1.1-.9-1.6-1.4l-.8-.8c-.5-.5-.9-1-1.4-1.6-.2-.3-.5-.5-.7-.8-.6-.7-1.2-1.5-1.7-2.3-.3-.4-.5-.8-.8-1.2-.3-.5-.6-1-.9-1.4s-.5-.9-.7-1.3c-.3-.5-.5-1-.8-1.6-.2-.4-.4-.8-.6-1.3h95.8c1-4.4 1.5-9.1 1.5-13.8s-.5-9.3-1.5-13.8c-6.3-28.6-31.9-50.1-62.3-50.1h.2Zm-34.2 51.7c4.1-11.6 13.8-20.4 25.9-23.2.8-.2 1.6-.3 2.4-.5h.7c.8 0 1.6-.2 2.4-.3h5.8c.8 0 1.6.2 2.4.3h.7c.8 0 1.6.3 2.4.5 12.1 2.8 21.8 11.7 25.9 23.2h-68.6Z" fill="#ffffff" data-color="1"></path>
                        <path d="M408.2 302.6c-3.3-1.6-7-2.4-11.2-2.4h-23.1v63.3h10.2V339H397c4.2 0 8-.8 11.2-2.5s5.8-4 7.6-6.9c1.8-2.9 2.7-6.3 2.7-10.1s-.9-7.1-2.7-10.1c-1.8-2.9-4.3-5.2-7.6-6.9Zm-3.1 24.5c-2 1.9-4.7 2.8-8.3 2.8h-12.7v-20.6h12.7c3.6 0 6.3.9 8.3 2.8s2.9 4.4 2.9 7.5-1 5.6-2.9 7.5Z" fill="#ffffff" data-color="1"></path>
                        <path d="M460.2 320.4c-3.5-3.4-8.2-5.1-14-5.1s-7.8.8-11.2 2.5c-3.4 1.7-6.3 4.2-8.6 7.6l5.9 6c2-2.3 4-4.1 6-5.2s4.4-1.7 7-1.7 5.7.9 7.4 2.6c1.8 1.7 2.6 4.2 2.6 7.4v3.1H442c-5.3 0-9.5 1.2-12.7 3.6-3.1 2.4-4.7 5.7-4.7 9.8s1.5 7.4 4.5 9.9 7 3.7 11.9 3.7 6.1-.6 8.6-1.6c2.6-1.1 4.7-2.7 6.4-4.7v5.3h9.4v-28.5c0-6.3-1.8-11.2-5.3-14.6h.1Zm-4.9 25.1c0 3.4-1.2 6.1-3.6 8.3-2.4 2.2-5.2 3.3-8.6 3.3s-4.4-.6-6-1.7c-1.5-1.1-2.3-2.8-2.3-4.8s.7-3.5 2.2-4.5 3.5-1.5 6.2-1.5h12.1v.9Z" fill="#ffffff" data-color="1"></path>
                        <path d="M502.6 316.4c-2.7 0-5.2.6-7.6 1.7s-4.4 2.7-6.1 4.8v-6.5h-9.4v47.1h10.1v-25c0-4.1 1.3-7.3 3.9-9.6 2.6-2.3 5.9-3.4 9.9-3.4h3.1v-8.6c-1.1-.3-2.4-.5-3.8-.5h-.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M530.3 353.6c-1.6-1.2-2.3-3.3-2.3-6.3v-21.9h14v-9.1h-14v-12.4h-10.2v12.4h-7.7v9.1h7.7v22.8c0 5.4 1.5 9.5 4.6 12.2s7.3 4 12.7 4 5.2-.4 8.3-1.1v-8.5c-2.7.3-4.8.5-6.2.5-3.1 0-5.4-.6-7-1.8h.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M615 318.6c-3.8-2.2-8.1-3.3-12.7-3.3s-8.7 1.1-12.5 3.3c-3.8 2.2-6.8 5.1-9 8.9-2.2 3.7-3.3 7.9-3.3 12.4s1.1 8.6 3.3 12.4 5.2 6.8 9 9 7.9 3.3 12.5 3.3 8.8-1.1 12.7-3.3c3.8-2.2 6.8-5.2 9.1-9 2.2-3.8 3.3-7.9 3.3-12.4s-1.1-8.6-3.3-12.4-5.2-6.7-9.1-8.9Zm.1 29.2c-1.3 2.3-3 4.2-5.3 5.6-2.2 1.4-4.7 2-7.5 2s-5.2-.7-7.4-2-3.9-3.2-5.2-5.5-1.9-5-1.9-7.9.6-5.5 1.9-7.9c1.3-2.4 3-4.3 5.3-5.6 2.2-1.4 4.8-2 7.5-2s5.1.7 7.4 2c2.2 1.3 4 3.2 5.3 5.6s1.9 5.1 1.9 7.9-.6 5.4-1.9 7.8Z" fill="#ffffff" data-color="1"></path>
                        <path d="M645.1 294.5c-3 2.7-4.5 6.8-4.5 12.3v9.5h-6.7v9.1h6.7v38h10.1v-38h11.1v-9.1h-11.1v-8.6c0-3 .8-5.1 2.3-6.3 1.5-1.2 3.8-1.8 6.9-1.8s2.5.1 4 .3v-8.5c-1.8-.6-4-.9-6.5-.9-5.2 0-9.3 1.4-12.3 4.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M739 334.7c-2.1-2.8-5-4.9-8.7-6.1 1.7-1.4 3-3.2 3.9-5.2s1.3-4.2 1.3-6.6-.8-6.1-2.3-8.6c-1.6-2.5-3.8-4.5-6.7-5.9s-6.2-2.1-10-2.1h-22.2v63.3h27.1c4.1 0 7.7-.8 10.8-2.4s5.5-3.8 7.2-6.6c1.7-2.8 2.5-6 2.5-9.6s-1-7.3-3.1-10.1h.2Zm-34.6-25.4h11.2c3.1 0 5.5.7 7.2 2.2 1.7 1.4 2.5 3.4 2.5 6s-.9 4.6-2.5 6.1c-1.7 1.5-4.1 2.3-7.2 2.3h-11.2v-16.5Zm24.5 42.4c-2 1.7-4.7 2.6-8.2 2.6h-16.3v-19.5h16.3c3.5 0 6.3.9 8.2 2.7 2 1.8 2.9 4.1 2.9 7.1s-1 5.3-2.9 7.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M785.1 320.4c-3.5-3.4-8.2-5.1-14-5.1s-7.8.8-11.2 2.5-6.3 4.2-8.6 7.6l5.9 6c2-2.3 4-4.1 6-5.2s4.4-1.7 7-1.7 5.7.9 7.4 2.6c1.8 1.7 2.6 4.2 2.6 7.4v3.1h-13.3c-5.3 0-9.5 1.2-12.7 3.6-3.1 2.4-4.7 5.7-4.7 9.8s1.5 7.4 4.5 9.9 7 3.7 11.9 3.7 6.1-.6 8.6-1.6c2.6-1.1 4.7-2.7 6.4-4.7v5.3h9.4v-28.5c0-6.3-1.8-11.2-5.3-14.6Zm-4.8 25.1c0 3.4-1.2 6.1-3.6 8.3-2.4 2.2-5.2 3.3-8.6 3.3s-4.4-.6-6-1.7c-1.5-1.1-2.3-2.8-2.3-4.8s.7-3.5 2.2-4.5c1.4-1 3.5-1.5 6.2-1.5h12.1v.9Z" fill="#ffffff" data-color="1"></path>
                        <path fill="#ffffff" d="M814.5 316.4v47.1h-10.1v-47.1h10.1z" data-color="1"></path>
                        <path d="M809.5 292.1c-1.9 0-3.6.7-4.9 2-1.3 1.3-2 2.9-2 4.7s.7 3.4 2 4.7c1.3 1.3 3.1 1.9 4.9 1.9s3.4-.6 4.8-1.9c1.3-1.3 2-2.8 2-4.7s-.7-3.4-2-4.7c-1.3-1.3-2.9-2-4.8-2Z" fill="#ffffff" data-color="1"></path>
                        <path d="M865.5 320.4c-3.1-3.4-7.5-5.1-12.9-5.1s-10.5 1.9-14.1 5.7v-4.6h-9.4v47.1h10.1v-28.1c0-3.2 1-5.8 3-7.9 2-2 4.7-3.1 7.7-3.1s5.5 1 7.4 3 2.8 4.7 2.8 7.9v28.1h10.1V334c0-5.6-1.6-10.1-4.7-13.6Z" fill="#ffffff" data-color="1"></path>
                        <path d="m960.7 339.3 2.8-4-8.1-5.6c-1.4 2-2.4 3.6-3.1 4.6-3.1 4.7-5.1 7.6-6 8.7l-11.4-13.7c3.8-2.9 6.5-5.7 8.3-8.4 1.7-2.7 2.6-5.5 2.6-8.4s-1.4-7.2-4.2-9.7-6.2-3.7-10.7-3.7-8.2 1.3-11 4-4.2 6.2-4.2 10.5.5 4.7 1.5 7 2.5 4.8 4.7 7.5c-5 3.8-8.5 7.2-10.5 10.1s-3 6.1-3 9.4.9 6.2 2.5 8.8c1.7 2.6 4.1 4.6 7.1 6 3.1 1.4 6.5 2.2 10.4 2.2s6.7-.6 9.6-1.8c2.9-1.2 5.6-2.9 8.3-5.2l4.9 6h12l-10.6-12.7c1.7-2.1 4.4-5.9 8.1-11.3v-.3Zm-34-29.7c1-1 2.4-1.5 4.2-1.5s3.1.5 4.1 1.4 1.5 2.2 1.5 3.9-.5 3.1-1.5 4.6c-1 1.4-2.7 3.1-5.2 4.9-1.6-2-2.7-3.7-3.4-5s-1.1-2.7-1.1-4.1.5-3.2 1.5-4.2Zm2.2 45.8c-3 0-5.5-.8-7.3-2.5-1.9-1.7-2.8-3.8-2.8-6.3s.6-3.6 1.7-5.2c1.1-1.5 3.5-3.7 7.1-6.5l12.7 15.3c-3.6 3.4-7.4 5.2-11.3 5.2h-.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1018.7 311.3c3.5-2 7.5-3.1 11.6-3.1s7.9.9 11.1 2.8 6 4.6 8.3 8.2l7.7-5.6c-2.7-4.5-6.5-8-11.3-10.6s-9.8-3.9-15.9-3.9-11.6 1.4-16.7 4.3-9.1 6.8-12.1 11.8-4.5 10.5-4.5 16.6 1.5 11.6 4.5 16.6 7 8.9 12.1 11.8c5.1 2.9 10.9 4.3 16.7 4.3s11.2-1.3 16-3.9 8.5-6.2 11.2-10.6l-7.7-5.6c-2.2 3.6-5 6.3-8.3 8.2-3.3 1.9-6.8 2.8-11.1 2.8s-8.2-1-11.6-3.1c-3.5-2-6.2-4.9-8.2-8.5s-3-7.6-3-12.1 1-8.5 3-12.1 4.7-6.4 8.2-8.5v.2Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1102.5 318.6c-3.8-2.2-8.1-3.3-12.7-3.3s-8.7 1.1-12.5 3.3c-3.8 2.2-6.8 5.1-9 8.9-2.2 3.7-3.3 7.9-3.3 12.4s1.1 8.6 3.3 12.4c2.2 3.8 5.2 6.8 9 9s7.9 3.3 12.5 3.3 8.8-1.1 12.7-3.3c3.8-2.2 6.8-5.2 9.1-9 2.2-3.8 3.3-7.9 3.3-12.4s-1.1-8.6-3.3-12.4c-2.2-3.8-5.2-6.7-9.1-8.9Zm.1 29.2c-1.3 2.3-3 4.2-5.3 5.6-2.2 1.4-4.7 2-7.5 2s-5.2-.7-7.4-2-3.9-3.2-5.2-5.5c-1.3-2.3-1.9-5-1.9-7.9s.6-5.5 1.9-7.9 3-4.3 5.3-5.6c2.2-1.4 4.8-2 7.5-2s5.1.7 7.4 2c2.2 1.3 4 3.2 5.3 5.6s1.9 5.1 1.9 7.9-.6 5.4-1.9 7.8h-.1Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1192.4 320.4c-3.1-3.4-7.4-5.1-12.8-5.1s-6.4.7-9.2 2-5 3.1-6.8 5.4c-1.4-2.3-3.3-4.1-5.7-5.4s-5.3-2-8.5-2-5.4.5-7.7 1.4c-2.3 1-4.3 2.3-6 4v-4.4h-9.4v47.1h10.1v-28.1c0-3.3 1-5.9 2.9-7.9s4.5-3 7.5-3 5.4 1 7.2 3c1.8 2 2.7 4.7 2.7 7.9v28.1h10.1v-28.6c0-3 1-5.5 2.9-7.5s4.5-3 7.5-3 5.4 1 7.1 3 2.6 4.7 2.6 8v28.1h10.2V334c0-5.6-1.6-10.1-4.7-13.6Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1248.8 318.5c-3.5-2.1-7.5-3.2-11.9-3.2s-6.6.7-9.5 2-5.2 3.2-6.9 5.7v-6.6h-9.4v64.4h10.1v-23c1.9 2.2 4.1 3.9 6.9 5 2.7 1.2 5.7 1.8 8.9 1.8s8.4-1.1 11.9-3.2 6.3-5.1 8.3-8.8c2-3.7 3-8 3-12.6s-1-8.8-3-12.5-4.7-6.7-8.3-8.8v-.2Zm-1.1 29.5c-1.3 2.3-3 4.1-5.2 5.4-2.2 1.3-4.6 2-7.3 2s-4.8-.6-7-1.7-3.9-2.9-5.2-5.2-2-5.2-2-8.6.7-6.3 2-8.6 3.1-4 5.2-5.2c2.1-1.1 4.5-1.7 7-1.7s5.1.7 7.3 2 3.9 3.2 5.2 5.5c1.2 2.3 1.9 5 1.9 8.1s-.6 5.7-1.9 8Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1303.7 320.4c-3.5-3.4-8.2-5.1-14-5.1s-7.8.8-11.2 2.5-6.3 4.2-8.6 7.6l5.9 6c2-2.3 4-4.1 6-5.2s4.4-1.7 7-1.7 5.7.9 7.4 2.6c1.8 1.7 2.6 4.2 2.6 7.4v3.1h-13.3c-5.3 0-9.5 1.2-12.7 3.6s-4.7 5.7-4.7 9.8 1.5 7.4 4.5 9.9 7 3.7 11.9 3.7 6.1-.6 8.6-1.6 4.7-2.7 6.4-4.7v5.3h9.4v-28.5c0-6.3-1.8-11.2-5.3-14.6Zm-4.9 25.1c0 3.4-1.2 6.1-3.6 8.3-2.4 2.2-5.2 3.3-8.6 3.3s-4.4-.6-6-1.7-2.3-2.8-2.3-4.8.7-3.5 2.2-4.5 3.5-1.5 6.2-1.5h12.1v.9Z" fill="#ffffff" data-color="1"></path>
                        <path d="M1359.4 320.4c-3.1-3.4-7.5-5.1-12.9-5.1s-10.5 1.9-14.1 5.7v-4.6h-9.4v47.1h10.1v-28.1c0-3.2 1-5.8 3-7.9 2-2 4.7-3.1 7.7-3.1s5.5 1 7.4 3 2.8 4.7 2.8 7.9v28.1h10.1V334c0-5.6-1.6-10.1-4.7-13.6Z" fill="#ffffff" data-color="1"></path>
                        <path d="m1397.1 350.6-13.5-34.2h-10.8l18.8 45-1.9 4.4c-1.1 2.6-2.6 4.4-4.2 5.4-1.7 1-3.7 1.5-6 1.5s-2.6-.1-5.6-.4v8.5c2.6.6 5.2 1 7.8 1 4 0 7.4-1 10.2-3.1 2.7-2.1 5.1-5.4 7.1-9.8l22.9-52.5h-10.7l-13.9 34.2h-.2Z" fill="#ffffff" data-color="1"></path>
                        <path fill="#ffffff" d="M1139.2 262.2v5.9H374.8v-5.9h764.4z" data-color="1"></path>
                        <path fill="#ffffff" d="M1421.7 262.2v5.9h-153v-5.9h153z" data-color="1"></path>
                        </g>
                      </svg>
                      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                      <span className="fs-4"><h1>U-Pitch</h1></span>

                    <hr/>
                    <ul className="nav nav-pills flex-column mb-10">
                      <li className="nav-item">
                        <a href="#" className="nav-link active flex p-2" aria-current="page">
                          <svg className="svg" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#98a3c8" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 18H9" stroke="#98a3c8" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                        <svg className="svg"  viewBox="0 -24.88 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path className="st0" d="M97.13,61.06c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,61.06,97.13,61.06L97.13,61.06z M25.08,14.73v56.31c0,0.58-0.24,1.1-0.61,1.48c-0.38,0.38-0.9,0.61-1.48,0.61h-9.92 c-0.57,0-1.09-0.23-1.47-0.61l0,0l0,0l0,0c-0.38-0.38-0.61-0.9-0.61-1.47V14.73H2.96c-0.82,0-1.56-0.33-2.09-0.87 C0.33,13.32,0,12.58,0,11.77V2.96C0,2.14,0.33,1.4,0.87,0.87S2.14,0,2.96,0h116.96c0.82,0,1.56,0.33,2.09,0.87s0.87,1.28,0.87,2.09 v8.81c0,0.82-0.33,1.56-0.87,2.09c-0.54,0.54-1.28,0.87-2.09,0.87h-0.19v56.31c0,0.57-0.24,1.09-0.61,1.47l-0.01,0.01 c-0.38,0.38-0.9,0.61-1.47,0.61H77.18c-0.58,0-1.1-0.23-1.48-0.61c-0.07-0.07-0.13-0.14-0.19-0.22c-0.27-0.35-0.43-0.79-0.43-1.26 V14.73H25.08L25.08,14.73z M78.54,30.64h37.74V14.73H78.54V30.64L78.54,30.64z M116.28,34.09H78.54V50.3h37.74V34.09L116.28,34.09z M116.28,53.75H78.54v15.93h37.74V53.75L116.28,53.75z M119.43,3.45H3.45v7.83h115.98V3.45L119.43,3.45z M21.63,14.73h-7.21v54.94 h7.21V14.73L21.63,14.73z M97.13,21.27c3.25,0,5.88,0.53,5.88,1.19s-2.63,1.19-5.88,1.19c-3.25,0-5.88-0.53-5.88-1.19 S93.88,21.27,97.13,21.27L97.13,21.27z M97.13,41.13c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,41.13,97.13,41.13L97.13,41.13z"></path> </g> </g></svg>
                          Workspace
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" fill="#98a3c8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#98a3c8" strokeWidth="2" d="M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21"></path> </g></svg>
                          All Templates
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                        <svg className="svg" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 11.5C9 12.8807 7.88071 14 6.5 14C5.11929 14 4 12.8807 4 11.5C4 10.1193 5.11929 9 6.5 9C7.88071 9 9 10.1193 9 11.5Z" stroke="#98a3c8" strokeWidth="1.5"></path> <path opacity="0.5" d="M14.3206 16.8017L9 13.29" stroke="#98a3c8" strokeWidth="1.5" strokeLinecap="round"></path> <path opacity="0.5" d="M14.4207 6.83984L9.1001 10.3515" stroke="#98a3c8" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="#98a3c8" strokeWidth="1.5"></path> <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="#98a3c8" strokeWidth="1.5"></path> </g></svg>
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                        <svg className="svg" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18V6" stroke="#98a3c8" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 6V18" stroke="#98a3c8" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" stroke="#98a3c8" strokeWidth="1.5"></path> <path d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" stroke="#98a3c8" strokeWidth="1.5"></path> <path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18" stroke="#98a3c8" strokeWidth="1.5"></path> </g></svg>
                          Repositories
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                        <svg className="svg" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9" stroke="#98a3c8" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z" stroke="#98a3c8" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                          Archive
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2 mt-80">
                        <svg className="svg" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 10C9 9.40666 9.17595 8.82664 9.50559 8.33329C9.83524 7.83994 10.3038 7.45543 10.852 7.22836C11.4001 7.0013 12.0033 6.94189 12.5853 7.05765C13.1672 7.1734 13.7018 7.45912 14.1213 7.87868C14.5409 8.29824 14.8266 8.83279 14.9424 9.41473C15.0581 9.99667 14.9987 10.5999 14.7716 11.1481C14.5446 11.6962 14.1601 12.1648 13.6667 12.4944C13.1734 12.8241 12.5933 13 12 13V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#98a3c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="12" cy="17" r="1" fill="#98a3c8"></circle> </g></svg>
                          Support
                        </a>
                      </li>
                    </ul>
                    <hr/>
                </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-lg">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
