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
import com.lanbarServer.domain.Usuario;
import com.lanbarServer.service.UsuarioService;

@CrossOrigin(origins= {"http://192.168.0.97:4200","http://192.168.0.68:4200"},allowCredentials="false")
//@CrossOrigin(origins="http://localhost")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	//listar usuarios
	@GetMapping
	public List<Usuario> getUsuario(){
		return usuarioService.getUsuario();
	}
	//insert usuario
	@PostMapping
	public Usuario saveUsuario(@RequestBody Usuario u) {
		return usuarioService.saveUsuario(u);
	}
	
	//recoger usuario por id
	@PostMapping(path="/login/{id}")
	public Usuario getUsuario(@PathVariable (value = "id") int id) {
		return usuarioService.getUsuario(id);
		
	}
	//borrar usuario
	@PostMapping(path="/{id}")
	public void deleterUsuario(@PathVariable (value = "id") int id){
		Usuario u= usuarioService.getUsuario(id);
		usuarioService.deleteUsuario(u);
	}
	
	@PostMapping(path="/update/{id}")
	public void updateUsuario(@PathVariable (value = "id") int id,
						@RequestBody Usuario usuarioupdate){
		Usuario u= usuarioService.getUsuario(id);
		

		u.setNombreU(usuarioupdate.getNombreU());
		u.setApellidosU(usuarioupdate.getApellidosU());	
		u.setEmailU(usuarioupdate.getEmailU());
		u.setPasswordU(usuarioupdate.getPasswordU());
		u.setFotoPerfilU(usuarioupdate.getFotoPerfilU());
		
		usuarioService.saveUsuario(u);
	}
	//login mail password
	@RequestMapping(value = "/loginUsuario", method = RequestMethod.POST)
	public Usuario loginUsuario(@RequestBody Usuario usuario){
		Usuario u= usuarioService.loginUsuario(usuario.getEmailU(), usuario.getPasswordU());
		return u;
	}
	//guarda en la cockie al usuario al iniciar sesion
	@RequestMapping(value = "/loginCockie", method = RequestMethod.POST)
	public Usuario getUsuarioCoockie(@RequestBody  Usuario usuario){
		Usuario n= usuarioService.findById(usuario.getIdUsuario());
		return n;
	}
	//comprueba si existe mail
	@RequestMapping(value = "/emailUsuario", method = RequestMethod.POST)
	public Usuario comprobarMailUsuario(@RequestBody  Usuario usuario){
		Usuario u= usuarioService.getEmail(usuario.getEmailU());
		return u;
	}
	
}
