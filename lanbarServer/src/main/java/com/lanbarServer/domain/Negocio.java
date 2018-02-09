package com.lanbarServer.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="negocio")
public class Negocio {

	
	@Id
	@GeneratedValue
	@Column(name="idnegocio")
	private int idNegocio;
	
	@Column(name="nombre")
	private String nombreN;
	
	@Column(name="direccion")
	private String direccionN;
	
	@Column(name="horario")
	private String horarioN;
	
	@Column(name="foto")
	private String fotoN;

	@Column(name="email")
	private String emailN;
	
	@Column(name="password")
	private String passwordN;

	public Negocio() {
	
	}

	public Negocio(int idNegocio, String nombreN, String direccionN, String horarioN, String fotoN, String emailN,
			String passwordN) {
		super();
		this.idNegocio = idNegocio;
		this.nombreN = nombreN;
		this.direccionN = direccionN;
		this.horarioN = horarioN;
		this.fotoN = fotoN;
		this.emailN = emailN;
		this.passwordN = passwordN;
	}

	public int getIdNegocio() {
		return idNegocio;
	}

	public void setIdNegocio(int idNegocio) {
		this.idNegocio = idNegocio;
	}

	public String getNombreN() {
		return nombreN;
	}

	public void setNombreN(String nombreN) {
		this.nombreN = nombreN;
	}

	public String getDireccionN() {
		return direccionN;
	}

	public void setDireccionN(String direccionN) {
		this.direccionN = direccionN;
	}

	public String getHorarioN() {
		return horarioN;
	}

	public void setHorarioN(String horarioN) {
		this.horarioN = horarioN;
	}

	public String getFotoN() {
		return fotoN;
	}

	public void setFotoN(String fotoN) {
		this.fotoN = fotoN;
	}

	public String getEmailN() {
		return emailN;
	}

	public void setEmailN(String emailN) {
		this.emailN = emailN;
	}

	public String getPasswordN() {
		return passwordN;
	}

	public void setPasswordN(String passwordN) {
		this.passwordN = passwordN;
	}
	
	
	
	
	
	
}
