package com.lanbarServer.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario {

	@Id
	@GeneratedValue
	@Column(name="idusuario")
	private int idUsuario;
	
	
	@Column(name="nombre")
	private String nombreU;
	
	@Column(name="apellidos")
	private String apellidosU;
	
	@Column(name="email")
	private String emailU;
	
	@Column(name="password")
	private String passwordU;
	
	@Column(name="fotoperfil")
	private String fotoPerfilU;

	public Usuario() {
		
	}

	public Usuario(int idUsuario,  String nombreU, String apellidosU, String emailU, String passwordU,
			String fotoPerfilU) {
		super();
		this.idUsuario = idUsuario;
		this.nombreU = nombreU;
		this.apellidosU = apellidosU;
		this.emailU = emailU;
		this.passwordU = passwordU;
		this.fotoPerfilU = fotoPerfilU;
	}

	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombreU() {
		return nombreU;
	}

	public void setNombreU(String nombreU) {
		this.nombreU = nombreU;
	}

	public String getApellidosU() {
		return apellidosU;
	}

	public void setApellidosU(String apellidosU) {
		this.apellidosU = apellidosU;
	}

	public String getEmailU() {
		return emailU;
	}

	public void setEmailU(String emailU) {
		this.emailU = emailU;
	}

	public String getPasswordU() {
		return passwordU;
	}

	public void setPasswordU(String passwordU) {
		this.passwordU = passwordU;
	}

	public String getFotoPerfilU() {
		return fotoPerfilU;
	}

	public void setFotoPerfilU(String fotoPerfilU) {
		this.fotoPerfilU = fotoPerfilU;
	}

	
	
	
}
