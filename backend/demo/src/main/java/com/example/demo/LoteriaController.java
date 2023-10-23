package com.example.demo;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoteriaController {

    @PostMapping(path = "/jugar", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Resultado jugar(@RequestBody Jugada jugada) {
        int numeroUsuario = jugada.getNumeroUsuario();
        int valorUsuario = jugada.getValorUsuario();

        // Llama al método jugar de la clase Loteria para calcular el resultado
        Resultado resultado = Loteria.jugar(numeroUsuario, valorUsuario);

        return resultado;
    }
}
