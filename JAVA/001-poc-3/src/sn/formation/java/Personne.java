package sn.formation.java;

import sn.formation.java.interfaces.IDanseur;
import sn.formation.java.interfaces.INageur;
import sn.formation.java.interfaces.IPianiste;

public class Personne implements IDanseur, IPianiste, INageur {

	private String nom; 
	private String prenom; 
	private char sexe; 
	private int age; 
	
	private static int nbPersonnes;
	
	public void sePresenter() {
		System.out.println("Nom : "+ nom+ ", Prenom : "+ prenom+
				"\nAge : "+ age+ ", sexe : "+sexe);
	}

	public Personne(String nom, String prenom, char sexe, int age) {
		this.nom = nom;
		this.prenom = prenom;
		this.sexe = sexe;
		this.age = age;
		nbPersonnes++; 
	}
	
	public static int getNbPersonnes() {
		return nbPersonnes;
	}

	@Override
	public void jouerAuPiano() {
		System.out.println(nom+ " "+ prenom+ " joue au Piano");
		
	}

	@Override
	public void danser() {
		System.out.println(nom+ " "+ prenom+ " danse");
		
	}
	
	@Override
	public void nager() {
		System.out.println(nom+ " "+ prenom+ " nage.");
	}
	
}
