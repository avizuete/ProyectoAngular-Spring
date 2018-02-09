package com.lanbarServer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.EventoUsuario;
import com.lanbarServer.domain.Usuario;

public interface EventoUsuarioRepository extends JpaRepository<EventoUsuario, Integer>{

	@Query("from EventoUsuario eu JOIN FETCH eu.usuario JOIN FETCH eu.eventonegocio en JOIN FETCH en.negocio  ")
	public List<EventoUsuario> getEventosUsuarioMovimiento();
	
	@Query("from EventoUsuario eu JOIN FETCH eu.usuario u JOIN FETCH eu.eventonegocio en JOIN FETCH en.negocio WHERE u.idUsuario =:idusuario")
	public List<EventoUsuario> getEventosNegocioWithUsuarioId(@Param("idusuario") int idusuario);

}
