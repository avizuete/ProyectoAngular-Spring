package com.lanbarServer.service;

import java.util.List;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.Negocio;

public interface EventoNegocioService {

	public List<EventoNegocio> getEventoNegocio();
	
	public List<EventoNegocio> getEventoNegocioId(int id);

	public EventoNegocio saveEventoNegocio(EventoNegocio eN);

	public EventoNegocio getEventoNegocio(int id);

	public void deleteEventoNegocio(EventoNegocio eN);
	
	public List<EventoNegocio> getEventoNegocio(EventoNegocio en);

	public EventoNegocio findOne(int id);

	
	
	

}
