package com.lanbarServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lanbarServer.domain.Negocio;

public interface NegocioRepository extends JpaRepository<Negocio, Integer>{

	Negocio findByEmailNAndPasswordN(String emailN, String passwordN);

	Negocio findByEmailN(String emailN);
	
	Negocio findByIdNegocio(int idNegocio); 

}
