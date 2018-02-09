package com.lanbarServer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanbarServer.domain.Usuario;
import com.lanbarServer.repository.UsuarioRepository;
import com.lanbarServer.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;
	
	
	public List<Usuario> getUsuario() {
		
		return usuarioRepository.findAll();
	}

	public Usuario saveUsuario(Usuario u) {
		// TODO Auto-generated method stub
		return usuarioRepository.save(u);
	}

	
	public void deleteUsuario(Usuario u) {
		usuarioRepository.delete(u);
	}

	
	public Usuario getUsuario(int id) {
		
		return usuarioRepository.findOne(id);
	}
	
	public Usuario loginUsuario(String emailU,String passwordU) {
		
		return usuarioRepository.findByEmailUAndPasswordU(emailU, passwordU);
		
	}

	public Usuario getEmail(String emailU) {
		// TODO Auto-generated method stub
		return usuarioRepository.findByEmailU(emailU);
	}

	public Usuario findById(int idUsuario) {
		// TODO Auto-generated method stub
		return usuarioRepository.findByIdUsuario(idUsuario);
	}
	
	
}
