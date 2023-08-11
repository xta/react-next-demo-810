import { ApolloWrapper } from "@/lib/apollo-provider";

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body>
                <ApolloWrapper>{children}</ApolloWrapper>
            </body>
        </html>
    );
}