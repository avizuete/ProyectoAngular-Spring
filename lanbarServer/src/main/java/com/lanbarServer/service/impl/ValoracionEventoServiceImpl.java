package com.lanbarServer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanbarServer.domain.ValoracionEvento;
import com.lanbarServer.repository.ValoracionEventoRepository;
import com.lanbarServer.service.ValoracionEventoService;

@Service
public class ValoracionEventoServiceImpl implements ValoracionEventoService {

	@Autowired
	ValoracionEventoRepository valoracionEventoRepository;
	
	
	public List<ValoracionEvento> getValoracionEvento() {
		
		return valoracionEventoRepository.getValoracionEvento();
	}

	
	public ValoracionEvento getValoracionEvento(int id) {
		
		return 	valoracionEventoRepository.findOne(id);
	}
	
	public List<ValoracionEvento> getValoracionEvento1(ValoracionEvento valoracionEvento) {
		
		return valoracionEventoRepository.getEventosNegocioWithUsuarioIdAndIdEventoUsuario(valoracionEvento.getUsuario().getIdUsuario(),valoracionEvento.getEventonegocio().getIdEventoNegocio());
	}

	@Override
	public ValoracionEvento saveValoracionEvento(ValoracionEvento ve) {
		// TODO Auto-generated method stub
		return valoracionEventoRepository.save(ve);
	}

	@Override
	public void deleteValoracionEvento(ValoracionEvento ve) {
		valoracionEventoRepository.delete(ve);
		
	}
	@Override
	public List<ValoracionEvento> getValoracionEventoAVG(int id) {
		
		return valoracionEventoRepository.getEventosNegocioMedia(id);
	}


	
	
}
