import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [ erros, validarCampos, possoEnviar ] = useErros(validacoes);


    

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id='nome'
                label='Nome'
                name='nome'
                required
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField
                value={ sobrenome }
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                name='sobrenome'
                variant='outlined'
                id='sobrenome'
                label='Sobrenome'
                required
                margin='normal'
                fullWidth
            />
            <TextField
                value={ cpf }
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                name='cpf'
                variant='outlined'
                id='cpf'
                label='CPF'
                required
                margin='normal'
                fullWidth
            />

            <FormControlLabel
                checked={promocoes}
                label='Promoções'
                control={<Switch onChange={(event) => {
                    setPromocoes(event.target.checked)
                }} name='promocoes'/>}
            />

            <FormControlLabel
                checked={novidades}
                label='Novidades'
                control={<Switch onChange={(event) => {
                    setNovidades(event.target.checked)
                }} name="novidades" />}
            />

            <Button type='submit' variant="contained">Próximo</Button>
        </form>
    )
}

export default DadosPessoais;