package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.demo")
@EnableWebMvc
public class LotteryAppApplication {
	public static void main(String[] args) {
		SpringApplication.run(LotteryAppApplication.class, args);
	}
}

