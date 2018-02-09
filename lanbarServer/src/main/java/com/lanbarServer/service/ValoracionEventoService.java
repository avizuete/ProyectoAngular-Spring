package com.lanbarServer.service;

import java.util.List;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.ValoracionEvento;

public interface ValoracionEventoService  {
	
	public List<ValoracionEvento> getValoracionEvento();
	
	public ValoracionEvento saveValoracionEvento(ValoracionEvento ve);
	
	public void deleteValoracionEvento(ValoracionEvento ve);
	
	public ValoracionEvento getValoracionEvento(int id);	
	
	

	public List<ValoracionEvento> getValoracionEvento1(ValoracionEvento valoracionEvento) ;
	
	public List<ValoracionEvento> getValoracionEventoAVG(int id) ;
}
