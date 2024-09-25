import "@/styles/globals.css";
import {JetBrains_Mono} from 'next/font/google'

import {Header} from "@/components/Header";
import {PageTransition} from "@/components/PageTransition";
import {StairTransition} from "@/components/StairTransition";

export const metadata = {
    title: "Sakil Ahmed",
    description: "Generated by create-t3-app",
    icons: [{rel: "icon", url: "/favicon.ico"}],
};

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: '--font-jetBrainsMono',
});


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={jetBrainsMono.variable}>
        <body>
            <Header/>
            <StairTransition/>
            <PageTransition>
                {children}
            </PageTransition>

        </body>
        </html>
    );
}
