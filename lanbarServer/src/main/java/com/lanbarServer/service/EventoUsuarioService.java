package com.lanbarServer.service;

import java.util.List;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.EventoUsuario;
import com.lanbarServer.domain.Usuario;

public interface EventoUsuarioService {

	public List<EventoUsuario> getEventoUsuario();

	public EventoUsuario saveEventoUsuario(EventoUsuario eU);

	public EventoUsuario getEventoUsuario(int id);
	
	public List<EventoUsuario> getEventoUsuarioE(int id);
	
	public void deleteEventoUsuario(EventoUsuario eU);

	public void saveEventoNegocio(EventoUsuario eU);

	

}
