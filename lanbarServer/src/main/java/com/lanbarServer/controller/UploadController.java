package com.lanbarServer.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import com.lanbarServer.domain.FotosNegocio;
import com.lanbarServer.domain.FotosUsuario;
import com.lanbarServer.domain.Negocio;
import com.lanbarServer.domain.Usuario;
import com.lanbarServer.service.FotosNegocioService;
import com.lanbarServer.service.FotosUsuarioService;
import com.lanbarServer.service.NegocioService;
import com.lanbarServer.service.StorageService;
import com.lanbarServer.service.UsuarioService;


@Controller
public class UploadController {
	@Autowired
	StorageService storageService;
	
	@Autowired
	FotosUsuarioService fotosUsuarioService;

	@Autowired
	FotosNegocioService fotosNegocioService;
	
	@Autowired
	UsuarioService usuarioService;
	
	@Autowired
	NegocioService negocioService;
	List<String> files = new ArrayList<String>();

	@PostMapping("/post")
	public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
		String message = "";
		try {
			
			storageService.store(file);
			files.add(file.getOriginalFilename());

			message = "You successfully uploaded " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (Exception e) {
			message = "FAIL to upload " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
		}
	}
	
	
	/****************negocio*****************/
	
	
	@GetMapping("/getFotoNegocioPerfil/{id}")
	public ResponseEntity<List<String>> getFotoNegocioPerfilById(@PathVariable(value = "id") int id) {
		
		Negocio foto = negocioService.getNegocio(id);
		System.out.println("FOTO"+foto);
			files.clear();
			files.add(foto.getFotoN());
			
		
		List<String> fileNames = files
				.stream().map(fileName -> MvcUriComponentsBuilder
						.fromMethodName(UploadController.class, "getFile", fileName).build().toString())
				.collect(Collectors.toList());
		

		return ResponseEntity.ok().body(fileNames);
	}
	@GetMapping("/getallfilesNegocioById/{id}")
	public ResponseEntity<List<String>> getListNegocioFilesById(@PathVariable(value = "id") int id) {
		
		List<FotosNegocio> fotosN = fotosNegocioService.getFotosNegocioById(id);
		System.out.println("FOTOS"+fotosN);
		int num = files.size();
		System.out.println("aki");
		System.out.println(num-1);
		System.out.println("fotos "+fotosN.size());
		if((num-1)<fotosN.size()) {
			files.clear();
		for(FotosNegocio f: fotosN) {
			
			files.add(f.getUrl());
			System.out.println("por id" +files);
			
			}
		}
		
		List<String> fileNames = files
				.stream().map(fileName -> MvcUriComponentsBuilder
						.fromMethodName(UploadController.class, "getFile", fileName).build().toString())
				.collect(Collectors.toList());
		

		return ResponseEntity.ok().body(fileNames);
	}
	
	@GetMapping("/getallfilesNegocio")
	public ResponseEntity<List<String>> getListNegocioFiles(/*Model model*/) {
		
		List<FotosNegocio> fotosN = fotosNegocioService.getFotosNegocio();
		if(files.size()<fotosN.size()) {
		for(FotosNegocio f: fotosN) {
			files.clear();
			files.add(f.getUrl());
			System.out.println("11111111111111" +files);
			}
		}
		/*
		for(int i = 0; i<fotos.size();i++) {
			files.set(i, fotos.get(i).getUrl());
		}
		*/
		List<String> fileNames = files
				.stream().map(fileName -> MvcUriComponentsBuilder
						.fromMethodName(UploadController.class, "getFile", fileName).build().toString())
				.collect(Collectors.toList());
		

		return ResponseEntity.ok().body(fileNames);
	}
	
	
	
	/*****************usuario**********************/
	
	
	
	@GetMapping("/getFotoUsuarioPerfil/{id}")
	public ResponseEntity<List<String>> getFotoUsuarioPerfilById(@PathVariable(value = "id") int id) {
		
		Usuario foto = usuarioService.getUsuario(id);
		System.out.println("FOTO"+foto);
			files.clear();
			files.add(foto.getFotoPerfilU());
			
		
		List<String> fileNames = files
				.stream().map(fileName -> MvcUriComponentsBuilder
						.fromMethodName(UploadController.class, "getFile", fileName).build().toString())
				.collect(Collectors.toList());
		

		return ResponseEntity.ok().body(fileNames);
	}
	
	@GetMapping("/getallfilesUsuarioById/{id}")
	public ResponseEntity<List<String>> getListUsuarioFilesById(@PathVariable(value = "id") int id) {
		
		List<FotosUsuario> fotos = fotosUsuarioService.getFotosUsuarioById(id);
		System.out.println("FOTOS"+fotos);
		int num = files.size();
		System.out.println("aki");
		System.out.println(num-1);
		System.out.println("fotos "+fotos.size());
		if((num-1)<fotos.size()) {
			files.clear();
		for(FotosUsuario f: fotos) {
			
			files.add(f.getUrl());
			System.out.println("por id" +files);
			}
		}
		
		List<String> fileNames = files
				.stream().map(fileName -> MvcUriComponentsBuilder
						.fromMethodName(UploadController.class, "getFile", fileName).build().toString())
				.collect(Collectors.toList());
		

		return ResponseEntity.ok().body(fileNames);
	}
	
	@GetMapping("/getallfilesUsuario")
	public ResponseEntity<List<String>> getListFiles(/*Model model*/) {
		
		List<FotosUsuario> fotos = fotosUsuarioService.getFotosUsuario();
		if(files.size()<fotos.size()) {
		for(FotosUsuario f: fotos) {
			files.clear();
			files.add(f.getUrl());
			System.out.println("11111111111111" +files);
			}
		}
		/*
		for(int i = 0; i<fotos.size();i++) {
			files.set(i, fotos.get(i).getUrl());
		}
		*/
		List<String> fileNames = files
				.stream().map(fileName -> MvcUriComponentsBuilder
						.fromMethodName(UploadController.class, "getFile", fileName).build().toString())
				.collect(Collectors.toList());
		

		return ResponseEntity.ok().body(fileNames);
	}
	
	/**********************************************************/
	
	@GetMapping("/files/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> getFile(@PathVariable String filename) {
		Resource file = storageService.loadFile(filename);
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
				.body(file);
	}
}
