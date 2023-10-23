package com.example.demo;

import java.util.Random;

public class Loteria {
    public static Resultado jugar(int numeroUsuario, int valorUsuario) {
        Random rand = new Random();
        int numeroAleatorio = rand.nextInt(9000) + 1000;  // Genera un número aleatorio de 4 cifras.
        int ganancia = 0;

        if (numeroAleatorio == numeroUsuario) {
            if (String.valueOf(numeroUsuario).length() == 4) {
                ganancia = valorUsuario * 400;
            } else if (String.valueOf(numeroUsuario).length() == 6) {
                ganancia = valorUsuario * 600;
            } else if (String.valueOf(numeroUsuario).length() == 8) {
                ganancia = valorUsuario * 1200;
            }
        }

        return new Resultado(numeroAleatorio, ganancia);
    }
}
