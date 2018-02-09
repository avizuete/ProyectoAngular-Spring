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
import com.lanbarServer.domain.ValoracionEvento;
import com.lanbarServer.service.ValoracionEventoService;

@CrossOrigin(origins = "http://192.168.0.97:4200", allowCredentials = "false")
@RestController
@RequestMapping("/valoracionEvento")
public class ValoracionEventoController {

	@Autowired
	ValoracionEventoService valoracionEventoService;
	
	@GetMapping
	public List<ValoracionEvento> getValoracionEvento() {
		return valoracionEventoService.getValoracionEvento();
	}
	
	@PostMapping("/verValoracion")
	public List<ValoracionEvento> getValoracionEvento1(@RequestBody ValoracionEvento ve) {
		return valoracionEventoService.getValoracionEvento1(ve);
	}
	//insert evento negocio
	@PostMapping
	public ValoracionEvento saveValoracionEvento(@RequestBody ValoracionEvento ve) {
		return valoracionEventoService.saveValoracionEvento(ve);
	}
	//recoger evento negocio por id
	@GetMapping(path = "/{id}")
	public ValoracionEvento getEventoNegocio(@PathVariable(value = "id") int id) {
		return valoracionEventoService.getValoracionEvento(id);

	}
	//borrar evento negocio
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ValoracionEvento> deleterEventoNegocio(@PathVariable(value = "id") int id) {
		ValoracionEvento ve = valoracionEventoService.getValoracionEvento(id);
		valoracionEventoService.deleteValoracionEvento(ve);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping(path="/media")
	public List<ValoracionEvento> getedadMedia(@RequestBody EventoNegocio en){
		
		return valoracionEventoService.getValoracionEventoAVG(en.getIdEventoNegocio());
	}
	
	
	
}
