import React, { useState } from "react";
import { FormControl, Container, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

function FormularioCadastro() {

    const [tipo, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container className="container" component="article" maxWidth="md">
            <form>
                <TextField id="descricao" label="Descrição" variant="outlined"  margin="normal"/>
                <TextField id="valor" label="Valor" variant="outlined"  margin="normal" />
                <FormControl sx={{m: 2, minWidth: 120 }}>
                    <InputLabel id="tipo">Tipo</InputLabel>
                    <Select
        
                        labelId="tipo"
                        id="tipo"
                        value={tipo}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Entrada</MenuItem>
                        <MenuItem value={20}>Saída</MenuItem>
                    </Select>
                </FormControl>
            </form>
        </Container>
    );

}

export default FormularioCadastro;