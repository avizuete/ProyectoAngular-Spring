package com.lanbarServer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanbarServer.domain.EventoNegocio;
import com.lanbarServer.domain.Negocio;
import com.lanbarServer.repository.EventoNegocioRepository;
import com.lanbarServer.service.EventoNegocioService;
@Service
public class EventoNegocioServiceImpl implements EventoNegocioService{
	@Autowired
	EventoNegocioRepository eventoNegocioRepository;
	public List<EventoNegocio> getEventoNegocio() {
		// TODO Auto-generated method stub
		return eventoNegocioRepository.getEventosNegocioWithNegocio();
	}

	public EventoNegocio saveEventoNegocio(EventoNegocio eN) {
		// TODO Auto-generated method stub
		return eventoNegocioRepository.save(eN);
	}

	public List<EventoNegocio> getEventoNegocioId(int id) {
		// TODO Auto-generated method stub
		return eventoNegocioRepository.getEventosNegocioWithNegocioId(id);
	}

	public void deleteEventoNegocio(EventoNegocio eN) {
		eventoNegocioRepository.delete(eN);
		
	}

	public EventoNegocio getEventoNegocio(int id) {
		// TODO Auto-generated method stub
		return eventoNegocioRepository.findOne(id);
	}

	public List<EventoNegocio> getEventoNegocio(EventoNegocio eventonegocio) {
		System.out.println("33333333333333"+eventonegocio.getNombre());
		return eventoNegocioRepository.getEventosNegocioWithName(eventonegocio.getNegocio().getNombreN());
	}

	@Override
	public EventoNegocio findOne(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	

	

	

	


}
