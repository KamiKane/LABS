package sn.esmt.formation.runtime;
import sn.esmt.formation.java.Personne;

public class Application {

	public static void main(String[] args) {
		int nombre_de_personnes_crees= Personne.getNbPersonnes();
		
		System.out.println("Le nombre de personnes crées est : "+ 
		nombre_de_personnes_crees);
		
		System.out.println("Création d'une personne...\n");
		Personne baye = new Personne("Ndoye", "Baye", 'M', 24);
		
		baye.sePresenter();
		
		nombre_de_personnes_crees= Personne.getNbPersonnes();
		System.out.println("Le nombre de personnes crées est : "+ 
				nombre_de_personnes_crees);
		
		

	}

}
