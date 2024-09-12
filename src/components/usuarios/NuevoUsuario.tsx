import { ChangeEvent, useState } from "react";
import { appsettings } from "../../settings/appsettings";
import { useNavigate } from "react-router-dom";

const initalUsuario = {
    nombre: "",
    apellido: "",
    mail: "",
    telefono: "",
    password: "",
    rolId: 2,
};

const NuevoUsuario = () => {
    const [usuario, setUsuario] = useState<Usuario>(initalUsuario);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        /* console.log(inputName, inputValue); */
        setUsuario({ ...usuario, [inputName]: inputValue });
    };
    const handleGuardar = async () => {
        usuario.estado = true;
        /* console.log(JSON.stringify(usuario)); */
        const response = await fetch(appsettings.apiurlusuarios, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        if (response.ok) {
            console.log("Usuario creado con éxito");
        } else {
            console.log("Error al crear el usuario");
        }
    };
    const volver = () => {
        navigate(appsettings.frontbaseurl);
    };

    return (
        <div>
            <h1>Crear nuevo usuario</h1>
            <form>
                {Object.keys(usuario).map((key) => (
                    <div className="mb-3" key={key}>
                        <label
                            htmlFor={`input${
                                key.charAt(0).toUpperCase() + key.slice(1)
                            }`}
                            className="form-label"
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            type={
                                key === "mail"
                                    ? "email"
                                    : key === "password"
                                    ? "password"
                                    : key === "rol"
                                    ? "number"
                                    : "text"
                            }
                            className="form-control"
                            id={`input${
                                key.charAt(0).toUpperCase() + key.slice(1)
                            }`}
                            name={key}
                            value={usuario[key as keyof Usuario] as string}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </form>
            <button className="btn btn-primary" onClick={handleGuardar}>
                Guardar
            </button>
            <button className="btn btn-secondary" onClick={volver}>
                Volver
            </button>
        </div>
    );
};

export default NuevoUsuario;
