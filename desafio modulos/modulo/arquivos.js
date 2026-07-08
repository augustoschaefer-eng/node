import fs from "fs";

export function salvarUser(usuario){
    fs.writeFileSync(
        "usuarios.json",
        JSON.stringify(usuario),
        "utf8"
    );
}
