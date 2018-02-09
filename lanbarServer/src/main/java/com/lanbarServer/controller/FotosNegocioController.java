package com.lanbarServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lanbarServer.domain.FotosNegocio;
import com.lanbarServer.domain.FotosUsuario;
import com.lanbarServer.service.FotosNegocioService;

@CrossOrigin(origins = "http://192.168.0.97:4200", allowCredentials = "false")
@RestController
@RequestMapping("/fotosnegocio")
public class FotosNegocioController {
	@Autowired
	FotosNegocioService fotosNegocioService;

	@GetMapping
	public List<FotosNegocio> getFotoNegocio() {
		return fotosNegocioService.getFotosNegocio();
	}

	@PostMapping
	public FotosNegocio saveFotosNegocio(@RequestBody FotosNegocio fon) {
		return fotosNegocioService.saveFotosNegocio(fon);
	}

	@GetMapping(path = "/{id}")
	public FotosNegocio getFotosNegocio(@PathVariable(value = "id") int id) {
		return fotosNegocioService.getFotosNegocio(id);

	}

	@PostMapping(path = "/{id}")
	public void deleterFotosUsuario(@PathVariable(value = "id") int id) {
		FotosNegocio fon = fotosNegocioService.getFotosNegocio(id);
		fotosNegocioService.deleteFotosNegocio(fon);
	}

	@PostMapping(path = "/update/{id}")
	public void updateFotosNegocio(@PathVariable(value = "id") int id, @RequestBody FotosNegocio fotosnegocioupdate) {
		FotosNegocio fon = fotosNegocioService.getFotosNegocio(id);

		fon.setTitulo(fotosnegocioupdate.getTitulo());
		fon.setUrl(fotosnegocioupdate.getUrl());
		fon.setNegocio(fotosnegocioupdate.getNegocio());

		fotosNegocioService.saveNegocio(fon);
	}
}
