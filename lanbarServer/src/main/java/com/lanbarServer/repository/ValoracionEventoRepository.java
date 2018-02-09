package com.lanbarServer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.EventoUsuario;
import com.lanbarServer.domain.ValoracionEvento;

public interface ValoracionEventoRepository extends JpaRepository<ValoracionEvento, Integer>{

	//@Query("FROM ValoracionEvento ve JOIN ve.usuario u JOIN ve.eventonegocio en JOIN FETCH en.negocio WHERE u.idUsuario =:idusuario and en.idEventoNegocio =:ideventoNegocio")
	@Query("FROM ValoracionEvento ve JOIN FETCH ve.usuario u JOIN FETCH ve.eventonegocio en JOIN FETCH en.negocio WHERE u.idUsuario =:idusuario and en.idEventoNegocio =:ideventoNegocio")
	public List<ValoracionEvento> getEventosNegocioWithUsuarioIdAndIdEventoUsuario(@Param("idusuario") int idusuario,@Param("ideventoNegocio") int ideventonegocio );
	
	
	@Query("SELECT avg(ve.nota), en.idEventoNegocio,en.nombre , n.nombreN from ValoracionEvento ve JOIN ve.usuario u JOIN ve.eventonegocio en JOIN en.negocio n WHERE en.idEventoNegocio =:ideventoNegocio group by en.idEventoNegocio")
	public List<ValoracionEvento> getEventosNegocioMedia(@Param("ideventoNegocio") int ideventonegocio);
	
	@Query("from ValoracionEvento ve JOIN FETCH ve.usuario u JOIN FETCH ve.eventonegocio en JOIN FETCH en.negocio")
	public List<ValoracionEvento> getValoracionEvento();
	
	
	
	
}
