package com.lanbarServer.service;

import java.util.List;

import com.lanbarServer.domain.Negocio;


public interface NegocioService {

public List<Negocio> getNegocio();
	
	public Negocio saveNegocio(Negocio n);
	
	public void deleteNegocio(Negocio n);
	
	public Negocio getNegocio(int id);

	public Negocio loginNegocio(String emailN, String passwordN);

	public Negocio getEmail(String emailN);

	public Negocio findById(int idNegocio);
}
