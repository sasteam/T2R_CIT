package com.tcs.T2RCIT.controller;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class MyController {
	@GetMapping(path="/appName")
	public String getAppName() {
		return "T2RCIT";
		//throw new RuntimeException("error has happened");
	}
	
	@GetMapping(path="/login/{username}")
	public String login(@PathVariable String username) {
		return "Hello "+username;
	}
	
	
}
