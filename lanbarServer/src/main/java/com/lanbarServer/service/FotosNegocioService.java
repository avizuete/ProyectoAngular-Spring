package com.lanbarServer.service;

import java.util.List;

import com.lanbarServer.domain.FotosNegocio;
import com.lanbarServer.domain.FotosUsuario;

public interface FotosNegocioService {

	public List<FotosNegocio> getFotosNegocio();

	public FotosNegocio saveFotosNegocio(FotosNegocio fon);

	public FotosNegocio getFotosNegocio(int id);

	public void deleteFotosNegocio(FotosNegocio fon);

	public void saveNegocio(FotosNegocio fon);
	
	public List<FotosNegocio> getFotosNegocioById(int id);

}
