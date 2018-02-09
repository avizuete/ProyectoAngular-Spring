package com.lanbarServer.service;

import java.util.List;

import com.lanbarServer.domain.Usuario;

public interface UsuarioService {

	public List<Usuario> getUsuario();
	
	public Usuario saveUsuario(Usuario u);
	
	public void deleteUsuario(Usuario u);
	
	public Usuario getUsuario(int id);
	
	public Usuario loginUsuario(String emailU,String passwordU);

	public Usuario getEmail(String emailU);

	public Usuario findById(int idUsuario);

	
}
