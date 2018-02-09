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

import com.lanbarServer.domain.FotosUsuario;
import com.lanbarServer.service.FotosUsuarioService;

@CrossOrigin(origins = "http://192.168.0.97:4200", allowCredentials = "false")
@RestController
@RequestMapping("/fotosusuario")
public class FotosUsuarioController {
	@Autowired
	FotosUsuarioService fotosUsuarioService;

	@GetMapping
	public List<FotosUsuario> getFotoUsuario() {
		return fotosUsuarioService.getFotosUsuario();
	}

	@PostMapping
	public FotosUsuario saveFotosUsuario(@RequestBody FotosUsuario fu) {
		return fotosUsuarioService.saveFotosUsuario(fu);
	}

	@GetMapping(path = "/{id}")
	public FotosUsuario getFotosUsuario(@PathVariable(value = "id") int id) {
		return fotosUsuarioService.getFotosUsuario(id);

	}
	

	@PostMapping(path = "/{id}")
	public void deleterFotosUsuario(@PathVariable(value = "id") int id) {
		FotosUsuario fu = fotosUsuarioService.getFotosUsuario(id);
		fotosUsuarioService.deleteFotosUsuario(fu);
	}

	@PostMapping(path = "/update/{id}")
	public void updateFotosUsuario(@PathVariable(value = "id") int id, @RequestBody FotosUsuario fotosusuarioupdate) {
		FotosUsuario fu = fotosUsuarioService.getFotosUsuario(id);

		fu.setTitulo(fotosusuarioupdate.getTitulo());
		fu.setUrl(fotosusuarioupdate.getUrl());
		fu.setUsuario(fotosusuarioupdate.getUsuario());

		fotosUsuarioService.saveUsuario(fu);
	}

}
