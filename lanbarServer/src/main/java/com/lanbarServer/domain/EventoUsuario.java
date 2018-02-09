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
@Table(name = "eventousuario")
public class EventoUsuario {

	
	@Id
	@GeneratedValue
	@Column(name = "ideventousuario")
	private int idEventoUsuario;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="usuario_idusuario")
	private Usuario usuario;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="eventonegocio_ideventonegocio")
	private EventoNegocio eventonegocio;

	public EventoUsuario() {
		
	}

	public int getIdEventoUsuario() {
		return idEventoUsuario;
	}

	public void setIdEventoUsuario(int idEventoUsuario) {
		this.idEventoUsuario = idEventoUsuario;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public EventoNegocio getEventonegocio() {
		return eventonegocio;
	}

	public void setEventonegocio(EventoNegocio eventonegocio) {
		this.eventonegocio = eventonegocio;
	}
	
	
	
}
