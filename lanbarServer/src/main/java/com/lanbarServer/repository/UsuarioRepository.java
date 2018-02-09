package com.lanbarServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lanbarServer.domain.Negocio;
import com.lanbarServer.domain.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
	
	public Usuario findByEmailUAndPasswordU(String emailU,String passwordU);

	public Usuario findByEmailU(String emailU);
	
	public Usuario findByIdUsuario(int idUsuario);

	

}
