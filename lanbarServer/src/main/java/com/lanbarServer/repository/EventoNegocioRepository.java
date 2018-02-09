package com.lanbarServer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.lanbarServer.domain.EventoNegocio;

public interface EventoNegocioRepository extends JpaRepository<EventoNegocio, Integer>{
	
	@Query("from EventoNegocio en INNER JOIN FETCH en.negocio ")
	public List<EventoNegocio> getEventosNegocioWithNegocio();
	
	@Query("from EventoNegocio en INNER JOIN FETCH en.negocio n WHERE n.idNegocio =:idnegocio")
	public List<EventoNegocio> getEventosNegocioWithNegocioId(@Param("idnegocio") int idnegocio);
	
	@Query("from EventoNegocio en INNER JOIN FETCH en.negocio n WHERE n.nombreN like %:nombre%")
	public List<EventoNegocio> getEventosNegocioWithName(@Param("nombre") String nombre);
}
