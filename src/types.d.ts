/* Aca solo irian definiciones del modelo de negocio */
/* En TypeScript, si defines una interfaz en un archivo de declaración de tipos (.d.ts), 
esa interfaz estará disponible globalmente en tu proyecto. No necesitas importarla explícitamente 
en cada archivo donde la uses. Sin embargo, si prefieres mantener las cosas explícitas y claras, 
puedes optar por importar la interfaz. */
/* exportando explicitamente seria asi:
export interface Todo {
    id: number;
    title: string;
    description: string;
}
import { Todo } from '../path/to/typed.d.ts'; // Ajusta la ruta según la ubicación de tu archivo typed.d.ts
*/

interface Usuario {
    id?: number;
    nombre: string;
    apellido: string;
    mail: string;
    password: string;
    telefono: string;
    rolId: number;
    estado?: boolean;
}