import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import RickAndMortyLayout from "./RickAndMortyLayout";
import ListOfCharacters from "./ListOfCharacters";
import RickAndMortyAbout from "./RickAndMortyAbout";
import RickAndMortyNotMath from "./RickAndMortyNotMath";

import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {queryClient} from "./queryClient";


export default function RickAndMortyApp() {
    return (
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<RickAndMortyLayout />}>
                            <Route index element={<ListOfCharacters />} />
                            <Route path="about" element={<RickAndMortyAbout />} />
                            <Route path="*" element={<RickAndMortyNotMath />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Container>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}