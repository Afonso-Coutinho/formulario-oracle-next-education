import { Button, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuarios({ aoEnviar }) {
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    
    const validacoes = useContext(ValidacoesCadastro);

    const [ erros, validarCampos, possoEnviar ] = useErros(validacoes);


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()) {
                aoEnviar({ email, senha });
            }
            
        }}>
            <TextField
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                value={ email }
                id='emai'
                label='email'
                type='email'
                required
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                value={ senha }
                id='senha'
                name='senha'
                label='senha'
                type='password'
                required
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <Button type='submit' variant="contained"> Próximo </Button>
        </form>
    )
}

export default DadosUsuarios;