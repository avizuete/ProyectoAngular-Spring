package com.lanbarServer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanbarServer.domain.Negocio;

import com.lanbarServer.repository.NegocioRepository;
import com.lanbarServer.service.NegocioService;

@Service
public class NegocioServiceImpl implements NegocioService {

	@Autowired
	NegocioRepository negocioRepository;
	
	
	public List<Negocio> getNegocio() {
		
		return negocioRepository.findAll();
	}

	public Negocio saveNegocio(Negocio n) {
		// TODO Auto-generated method stub
		return negocioRepository.save(n);
	}

	
	public void deleteNegocio(Negocio n) {
		negocioRepository.delete(n);
	}

	
	public Negocio getNegocio(int id) {
		
		return negocioRepository.findOne(id);
	}

	public Negocio loginNegocio(String emailN, String passwordN) {
		
		return negocioRepository.findByEmailNAndPasswordN(emailN, passwordN);
	}

	public Negocio getEmail(String emailN) {
		
		return negocioRepository.findByEmailN(emailN);
	}

	public Negocio findById(int idNegocio) {
		// TODO Auto-generated method stub
		return negocioRepository.findByIdNegocio(idNegocio);
	}
	
	
}
