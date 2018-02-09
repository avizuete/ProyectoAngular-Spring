package com.lanbarServer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.lanbarServer.domain.FotosUsuario;

public interface FotosUsuarioRepository extends JpaRepository<FotosUsuario, Integer>{
	
	@Query("from FotosUsuario fu INNER JOIN FETCH fu.usuario ")
	public List<FotosUsuario> getFotosUsuarioWithUsuario();

	@Query("from FotosUsuario fu INNER JOIN FETCH fu.usuario u WHERE u.idUsuario = :idUsuario ")
	public List<FotosUsuario> getFotosUsuarioWithUsuarioById(@Param("idUsuario") int idUsuario);

}
