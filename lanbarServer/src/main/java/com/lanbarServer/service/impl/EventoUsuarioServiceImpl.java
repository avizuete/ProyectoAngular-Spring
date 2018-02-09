package com.lanbarServer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.EventoUsuario;
import com.lanbarServer.domain.Usuario;
import com.lanbarServer.repository.EventoUsuarioRepository;
import com.lanbarServer.service.EventoUsuarioService;

@Service
public class EventoUsuarioServiceImpl implements EventoUsuarioService {
	
	@Autowired
	EventoUsuarioRepository eventoUsuarioRepository;

	public List<EventoUsuario> getEventoUsuario() {
		
		return eventoUsuarioRepository.getEventosUsuarioMovimiento();
	}

	public EventoUsuario saveEventoUsuario(EventoUsuario eU) {
		
		return eventoUsuarioRepository.save(eU);
	}

	public List<EventoUsuario> getEventoUsuarioE(int id) {
		
		return eventoUsuarioRepository.getEventosNegocioWithUsuarioId(id);
	}

	public void deleteEventoUsuario(EventoUsuario eU) {
		
		eventoUsuarioRepository.delete(eU);

	}

	public void saveEventoNegocio(EventoUsuario eU) {
		
		eventoUsuarioRepository.save(eU);

	}


public EventoUsuario getEventoUsuario(int id) {
		
		return eventoUsuarioRepository.findOne(id);
	}
	

}
