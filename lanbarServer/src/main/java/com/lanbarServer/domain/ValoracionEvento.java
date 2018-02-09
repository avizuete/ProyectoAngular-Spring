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
@Table(name = "valoracionevento")
public class ValoracionEvento {

	@Id
	@GeneratedValue
	@Column(name = "idvaloracionevento")
	private int idValoracionEvento;
	
	@Column(name = "nota")
	private int nota;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="usuario_idusuario")
	private Usuario usuario;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="eventonegocio_ideventonegocio")
	private EventoNegocio eventonegocio;

	public ValoracionEvento() {
		
	}

	public ValoracionEvento(int idValoracionEvento, int nota, Usuario usuario, EventoNegocio eventonegocio) {
		super();
		this.idValoracionEvento = idValoracionEvento;
		this.nota = nota;
		this.usuario = usuario;
		this.eventonegocio = eventonegocio;
	}

	public int getIdValoracionEvento() {
		return idValoracionEvento;
	}

	public void setIdValoracionEvento(int idValoracionEvento) {
		this.idValoracionEvento = idValoracionEvento;
	}

	public int getNota() {
		return nota;
	}

	public void setNota(int nota) {
		this.nota = nota;
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
