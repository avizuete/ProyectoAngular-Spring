package com.lanbarServer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.lanbarServer.service.StorageService;

@SpringBootApplication
public class App  implements CommandLineRunner{
	
	@Autowired
	StorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
	//upload images
	@Override
	public void run(String... arg) throws Exception {
	/*	storageService.deleteAll();
		storageService.init();*/
	}
	
}
