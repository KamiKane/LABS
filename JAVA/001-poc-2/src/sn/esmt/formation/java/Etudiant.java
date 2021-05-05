package sn.esmt.formation.java;

public class Etudiant extends Personne {

	private int matricule;
	private String formation;
	
	public Etudiant(String nom, String prenom, char sexe, int age, int matricule, String formation) {
		
		super(nom, prenom, sexe, age);
		this.matricule = matricule;
		this.formation =formation;
		
	}
	
	public void sePresenter(){
		super.sePresenter();
		System.out.println("Mais je suis aussi un étudiant ...");
		System.out.println("Matricule : "+ matricule + "\nFormation : "+ formation);
	}
	
	
	
	

}
