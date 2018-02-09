package com.lanbarServer.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

	@Entity
	@Table(name = "eventonegocio")
	public class EventoNegocio {

	@Id
	@GeneratedValue
	@Column(name = "ideventonegocio")
	private int idEventoNegocio;

	@Column(name = "nombre")
	private String nombre;

	/*@Temporal(TemporalType.DATE)
	@DateTimeFormat(iso=ISO.DATE)*/
	@Column(name="fecha")
	private String fecha;

	@Column(name = "descripcion")
	private String descripcion;

	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="negocio_idnegocio")
	private Negocio negocio;
	
	public EventoNegocio() {
		
	}

	public EventoNegocio(int idEventoNegocio, String nombre, String fecha, String descripcion, Negocio negocio) {
		super();
		this.idEventoNegocio = idEventoNegocio;
		this.nombre = nombre;
		this.fecha = fecha;
		this.descripcion = descripcion;
		this.negocio = negocio;
	}

	public int getIdEventoNegocio() {
		return idEventoNegocio;
	}

	public void setIdEventoNegocio(int idEventoNegocio) {
		this.idEventoNegocio = idEventoNegocio;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Negocio getNegocio() {
		return negocio;
	}

	public void setNegocio(Negocio negocio) {
		this.negocio = negocio;
	}

	

	
}
