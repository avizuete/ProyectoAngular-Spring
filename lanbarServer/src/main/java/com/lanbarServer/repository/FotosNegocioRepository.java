package com.lanbarServer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.lanbarServer.domain.FotosNegocio;


public interface FotosNegocioRepository extends JpaRepository<FotosNegocio, Integer> {
	@Query("from FotosNegocio fn INNER JOIN FETCH fn.negocio ")
	public List<FotosNegocio> getFotosNegocioWithNegocio();

	@Query("from FotosNegocio fn INNER JOIN FETCH fn.negocio n WHERE n.idNegocio = :idNegocio ")
	public List<FotosNegocio> getFotosNegocioWithNegocioById(@Param("idNegocio") int idNegocio);
}
