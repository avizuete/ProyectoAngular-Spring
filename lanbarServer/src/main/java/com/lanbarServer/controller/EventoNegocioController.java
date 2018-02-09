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
import org.springframework.web.bind.annotation.RestController;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.service.EventoNegocioService;

@CrossOrigin(origins = "http://192.168.0.97:4200", allowCredentials = "false")
@RestController
@RequestMapping("/eventonegocio")
public class EventoNegocioController {
	@Autowired
	EventoNegocioService eventoNegocioService;
	//lista eventos negocio
	@GetMapping
	public List<EventoNegocio> getEventoNegocio() {
		return eventoNegocioService.getEventoNegocio();
	}
	//insert evento negocio
	@PostMapping
	public EventoNegocio saveEventoNegocio(@RequestBody EventoNegocio eN) {
		return eventoNegocioService.saveEventoNegocio(eN);
	}
	//recoger evento negocio por id
	@GetMapping(path = "/{id}")
	public EventoNegocio getEventoNegocio(@PathVariable(value = "id") int id) {
		return eventoNegocioService.getEventoNegocio(id);

	}
	//borrar evento negocio
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<EventoNegocio> deleterEventoNegocio(@PathVariable(value = "id") int id) {
		EventoNegocio eN = eventoNegocioService.getEventoNegocio(id);
		eventoNegocioService.deleteEventoNegocio(eN);
		return ResponseEntity.ok().build();
	}
	
	
	@PostMapping(path = "/update/{id}")
	public void updateEventoNegocio(@PathVariable(value = "id") int id, @RequestBody EventoNegocio eventonegocioupdate) {
		EventoNegocio eN = eventoNegocioService.getEventoNegocio(id);

		eN.setNombre(eventonegocioupdate.getNombre());
		eN.setDescripcion(eventonegocioupdate.getDescripcion());
		eN.setFecha(eventonegocioupdate.getFecha());
		eN.setNegocio(eventonegocioupdate.getNegocio());
		

		eventoNegocioService.saveEventoNegocio(eN);
	}
	
	//listar eventos negocio por id
	@GetMapping(path = "/eventos/{id}")
	public List<EventoNegocio> getEventoNegocioId(@PathVariable(value = "id") int id) {
		return eventoNegocioService.getEventoNegocioId(id);

	}
	
	@PostMapping(path = "/eventosNegocios")
	public List<EventoNegocio> mostrarEventosNegocios(@RequestBody EventoNegocio eventonegocio) {
		System.out.println("2222222222222222"+eventonegocio.getNegocio().getNombreN());
		return eventoNegocioService.getEventoNegocio(eventonegocio);
	}
	
	

	
}
