package com.lanbarServer.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "fotosusuario")
public class FotosUsuario {

	@Id
	@GeneratedValue
	@Column(name = "idfotosusuario")
	private int idfotosusuario;
	
	@Column(name="titulo")
	private String  titulo;
	
	@Column(name="url")
	private String  url;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="usuario_idusuario")
	private Usuario usuario;


	public FotosUsuario() {
		super();
	}
	
	public FotosUsuario(int idfotosUsuario, String titulo, String url, Usuario usuario) {
		super();
		this.idfotosusuario = idfotosUsuario;
		this.titulo = titulo;
		this.url = url;
		this.usuario = usuario;
	}

	public int getIdfotosUsuario() {
		return idfotosusuario;
	}

	public void setIdfotosUsuario(int idfotosUsuario) {
		this.idfotosusuario = idfotosUsuario;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	
	
}
