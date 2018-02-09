package com.lanbarServer.service;

import java.util.List;

import com.lanbarServer.domain.FotosUsuario;


public interface FotosUsuarioService {

	public List<FotosUsuario> getFotosUsuario();

	public FotosUsuario saveFotosUsuario(FotosUsuario fu);

	public FotosUsuario getFotosUsuario(int id);

	public void deleteFotosUsuario(FotosUsuario fu);

	public void saveUsuario(FotosUsuario fu);

	public List<FotosUsuario> getFotosUsuarioById(int id);

}
