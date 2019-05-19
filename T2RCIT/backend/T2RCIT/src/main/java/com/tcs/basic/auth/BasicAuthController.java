package com.tcs.basic.auth;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthController {
	@GetMapping(path="/basicauth")
	public AuthenticationBean checkAuthentication() {
		return new AuthenticationBean("You are authenticated");
		//throw new RuntimeException("error has happened");
	}
	
	
	
	
}
