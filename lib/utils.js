import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  // tailwind merge concatena strings
  /* 
    tw-merge es una biblioteca de JavaScript que amplía las capacidades de 
    Tailwind CSS al proporcionar una forma conveniente de fusionar y componer clases de Tailwind
    Es particularmente útil en aplicaciones basadas en componentes como ReactJS donde 
    el estilo dinámico basado en el estado, accesorios u otras condiciones es común.

    La libreria clsx permite combinar nombres de clases
  */
  return twMerge(clsx(inputs))
}
