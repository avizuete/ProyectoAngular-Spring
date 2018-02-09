package com.lanbarServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.EventoUsuario;
import com.lanbarServer.domain.Usuario;
import com.lanbarServer.service.EventoUsuarioService;

@CrossOrigin(origins = "http://192.168.0.97:4200", allowCredentials = "false")
@RestController
@RequestMapping("/eventousuario")
public class EventoUsuarioController {
	@Autowired
	EventoUsuarioService eventoUsuarioService;

	@GetMapping
	public List<EventoUsuario> getEventoUsuario() {
		return eventoUsuarioService.getEventoUsuario();
	}

	@PostMapping
	public EventoUsuario saveEventoUsuario(@RequestBody EventoUsuario eU) {
		return eventoUsuarioService.saveEventoUsuario(eU);
	}

	@GetMapping(path = "/{id}")
	public List<EventoUsuario> getEventoUsuario(@PathVariable(value = "id") int id) {
		return eventoUsuarioService.getEventoUsuarioE(id);

	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<EventoUsuario> deleterEventoUsuario(@PathVariable(value = "id") int id) {
		EventoUsuario eU = eventoUsuarioService.getEventoUsuario(id);
		eventoUsuarioService.deleteEventoUsuario(eU);
		return ResponseEntity.ok().build();
	}

	@PostMapping(path = "/update/{id}")
	public void updateEventoUsuario(@PathVariable(value = "id") int id, @RequestBody EventoNegocio eventousuarioupdate) {
		EventoUsuario eU = eventoUsuarioService.getEventoUsuario(id);

		eU.setIdEventoUsuario(eventousuarioupdate.getIdEventoNegocio());
		

		eventoUsuarioService.saveEventoNegocio(eU);
	}

}
