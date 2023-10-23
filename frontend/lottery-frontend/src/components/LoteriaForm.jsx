import React, { Component } from 'react';

class LoteriaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroUsuario: 0,
            valorUsuario: 0,
            resultado: null
        };
    }

    handleNumeroChange = (e) => {
        this.setState({ numeroUsuario: parseInt(e.target.value) });
    }

    handleValorChange = (e) => {
        this.setState({ valorUsuario: parseInt(e.target.value) });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Realiza una solicitud POST al backend con los datos del usuario
        fetch('/jugar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numeroUsuario: this.state.numeroUsuario,
                valorUsuario: this.state.valorUsuario
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ resultado: data });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    render() {
        return (
            <div>
                <h2>Lotería</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Número de lotería:</label>
                    <input type="number" onChange={this.handleNumeroChange} />
                    <br />
                    <label>Valor:</label>
                    <input type="number" onChange={this.handleValorChange} />
                    <br />
                    <button type="submit">Jugar</button>
                </form>
                {this.state.resultado && (
                    <div>
                        <h3>Resultado:</h3>
                        <p>Número ganador: {this.state.resultado.numeroGanador}</p>
                        <p>Ganancia: {this.state.resultado.ganancia}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default LoteriaForm;
