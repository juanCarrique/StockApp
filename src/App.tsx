import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Lista from "./components/usuarios/Lista";
import NuevoUsuario from "./components/usuarios/NuevoUsuario";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Lista />} />
                    <Route path="/nuevousuario" element={<NuevoUsuario />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
