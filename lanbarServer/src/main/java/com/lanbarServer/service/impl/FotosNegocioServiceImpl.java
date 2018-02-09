package com.lanbarServer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanbarServer.domain.FotosNegocio;
import com.lanbarServer.domain.FotosUsuario;
import com.lanbarServer.repository.FotosNegocioRepository;
import com.lanbarServer.service.FotosNegocioService;

@Service
public class FotosNegocioServiceImpl implements FotosNegocioService{
	@Autowired
	FotosNegocioRepository fotoNegocioRepository;
	public List<FotosNegocio> getFotosNegocio() {
		// TODO Auto-generated method stub
		return fotoNegocioRepository.getFotosNegocioWithNegocio();
	}

	public FotosNegocio saveFotosNegocio(FotosNegocio fon) {
		// TODO Auto-generated method stub
		return fotoNegocioRepository.save(fon);
	}

	public FotosNegocio getFotosNegocio(int id) {
		// TODO Auto-generated method stub
		return fotoNegocioRepository.findOne(id);
	}

	public void deleteFotosNegocio(FotosNegocio fon) {
		fotoNegocioRepository.delete(fon);
		
	}

	public void saveNegocio(FotosNegocio fon) {
		fotoNegocioRepository.save(fon);
		
	}
	
	public List<FotosNegocio> getFotosNegocioById(int id) {
		
		return fotoNegocioRepository.getFotosNegocioWithNegocioById(id);
	}
}
