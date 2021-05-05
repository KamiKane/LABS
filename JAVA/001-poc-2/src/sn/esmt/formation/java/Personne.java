package sn.esmt.formation.java;

public abstract class Personne {

	private String nom; 
	private String prenom; 
	private char sexe; 
	private int age; 
	
	private static int nbPersonnes;

	public Personne(String nom, String prenom, char sexe, int age) {
		this.nom = nom;
		this.prenom = prenom;
		this.sexe = sexe;
		this.age = age;
		nbPersonnes ++; 
	}
	
	public static int getNbPersonnes() {
		return nbPersonnes;
	}
	
	
	public void sePresenter() {
		System.out.println("Nom : "+ nom+ ", Prenom : "+ prenom+
				"\nAge : "+ age+ ", sexe : "+sexe);
	}

}
