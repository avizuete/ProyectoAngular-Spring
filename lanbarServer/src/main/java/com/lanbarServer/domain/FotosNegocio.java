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
@Table(name = "fotosnegocio")
public class FotosNegocio {
	@Id
	@GeneratedValue
	@Column(name = "idfotosnegocio")
	private int idfotosnegocio;
	
	@Column(name="titulo")
	private String  titulo;
	
	@Column(name="url")
	private String  url;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="negocio_idnegocio")
	private Negocio negocio;

	public FotosNegocio() {
		super();
	}

	public FotosNegocio(int idfotosnegocio, String titulo, String url, Negocio negocio) {
		super();
		this.idfotosnegocio = idfotosnegocio;
		this.titulo = titulo;
		this.url = url;
		this.negocio = negocio;
	}

	public int getIdfotosnegocio() {
		return idfotosnegocio;
	}

	public void setIdfotosnegocio(int idfotosnegocio) {
		this.idfotosnegocio = idfotosnegocio;
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

	public Negocio getNegocio() {
		return negocio;
	}

	public void setNegocio(Negocio negocio) {
		this.negocio = negocio;
	}


	
}
