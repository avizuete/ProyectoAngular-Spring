package com.lanbarServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lanbarServer.domain.Negocio;

import com.lanbarServer.service.NegocioService;
@CrossOrigin(origins= {"http://192.168.0.97:4200","http://192.168.0.68:4200"},allowCredentials="false")
//@CrossOrigin(origins="http://localhost")
@RestController
@RequestMapping("/negocio")
public class NegocioController {
	
	

		@Autowired
		NegocioService negocioService;
		//listar negocios
		@GetMapping
		public List<Negocio> getUsuario(){
			return negocioService.getNegocio();
		}
		//insert negocio
		@PostMapping
		public Negocio saveNegocio(@RequestBody Negocio n) {
			return negocioService.saveNegocio(n);
		}
		//recoger negocio por id
		@PostMapping(path="/login/{id}")
		public Negocio getNegocio(@PathVariable (value = "id") int id) {
			return negocioService.getNegocio(id);
			
		}
		//delete negocio
		@PostMapping(path="/{id}")
		public void deleterNegocio(@PathVariable (value = "id") int id){
			Negocio n= negocioService.getNegocio(id);
			negocioService.deleteNegocio(n);
		}
		
		@PostMapping(path="/update/{id}")
		public void updateNegocio(@PathVariable (value = "id") int id,
							@RequestBody Negocio negocioupdate){
			Negocio n= negocioService.getNegocio(id);
			
			

			n.setNombreN(negocioupdate.getNombreN());
			n.setDireccionN(negocioupdate.getDireccionN());
			n.setEmailN(negocioupdate.getEmailN());
			n.setPasswordN(negocioupdate.getPasswordN());
			n.setHorarioN(negocioupdate.getHorarioN());
			n.setFotoN(negocioupdate.getFotoN());
			
			
			negocioService.saveNegocio(n);
		}
		
		//login mail password
		@RequestMapping(value = "/loginNegocio", method = RequestMethod.POST)
		public Negocio loginNegocio(@RequestBody Negocio negocio){
			Negocio n= negocioService.loginNegocio(negocio.getEmailN(), negocio.getPasswordN());
			return n;
		}
		
		//guarda en la cockie al negocio al iniciar sesion
				@RequestMapping(value = "/loginCockie", method = RequestMethod.POST)
				public Negocio getNegocioCoockie(@RequestBody  Negocio negocio){
					Negocio n= negocioService.findById(negocio.getIdNegocio());
					return n;
				}
		//comprueba si existe mail
		@RequestMapping(value = "/emailNegocio", method = RequestMethod.POST)
		public Negocio comprobarMailNegocio(@RequestBody  Negocio negocio){
			Negocio n= negocioService.getEmail(negocio.getEmailN());
			return n;
		}
		
}
