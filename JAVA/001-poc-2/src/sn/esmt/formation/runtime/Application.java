package sn.esmt.formation.runtime;
import sn.esmt.formation.java.Etudiant; 

public class Application {

	public static void main(String[] args) {
		
		int nombre_de_personnes_crees=Etudiant.getNbPersonnes();
		
		System.out.println("Le nombre de personnes crées est : "+ 
		nombre_de_personnes_crees);
		
		
		System.out.println("Création d'une personne...\n");
		Etudiant baye = new Etudiant("Ndoye", "Baye", 'M', 24, 22100001, "MPSI");
		Etudiant ami = new Etudiant ("Diop", "Aminata", 'F', 24, 22100002, "MPSI");
		baye.sePresenter();
		ami.sePresenter();
		
		nombre_de_personnes_crees=Etudiant.getNbPersonnes();
		
		
		System.out.println("Le nombre de personnes crées est : "+ 
		nombre_de_personnes_crees);
		

	}

}
