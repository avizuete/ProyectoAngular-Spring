package com.lanbarServer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanbarServer.domain.FotosUsuario;
import com.lanbarServer.repository.FotosUsuarioRepository;
import com.lanbarServer.service.FotosUsuarioService;
@Service
public class FotosUsuarioServiceImpl implements FotosUsuarioService {
	@Autowired
	FotosUsuarioRepository fotoUsuarioRepository;
	public List<FotosUsuario> getFotosUsuario() {
		// TODO Auto-generated method stub
		return fotoUsuarioRepository.getFotosUsuarioWithUsuario();
	}

	public FotosUsuario saveFotosUsuario(FotosUsuario fu) {
		// TODO Auto-generated method stub
		return fotoUsuarioRepository.save(fu);
	}

	public FotosUsuario getFotosUsuario(int id) {
		return fotoUsuarioRepository.findOne(id);
	}

	public void deleteFotosUsuario(FotosUsuario fu) {
		fotoUsuarioRepository.delete(fu);
		
	}

	public void saveUsuario(FotosUsuario fu) {
		fotoUsuarioRepository.save(fu);
		
	}

	@Override
	public List<FotosUsuario> getFotosUsuarioById(int id) {
		
		return fotoUsuarioRepository.getFotosUsuarioWithUsuarioById(id);
	}

}
